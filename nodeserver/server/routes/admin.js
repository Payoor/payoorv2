import mongoose from 'mongoose'
import express from 'express'
import https from 'https';
import jwt from 'jsonwebtoken'
import multer from 'multer';
import fs from 'fs';
const axios = require('axios');

const ELASTIC_URL = process.env.ELASTICSEARCHURL;

const {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand
} = require('@aws-sdk/client-s3');

const crypto = require('crypto');

import Order from '../models/Order';
import Admin from '../models/Admin.js';
import Checkout from '../models/Checkout.js';
import ProductVariant from '../models/ProductVariant';

import payoorDBConnection from '../payoordb'

import orderconfirmEmail from '../utils/orderconfirmEmail'

const ObjectId = mongoose.Types.ObjectId

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const adminRoute = express()

function uploadFileWithMulter (storagepath = null) {
  if (!storagepath) {
    // Use memory storage if no path provided
    return multer({ storage: multer.memoryStorage() })
  }

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      if (!fs.existsSync(storagepath)) {
        fs.mkdirSync(storagepath, { recursive: true })
      }
      cb(null, storagepath)
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`)
    }
  })

  return multer({ storage: storage })
}

function verifyAdminToken (req, res, next) {
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1] // Bearer <token>

  if (!token) {
    return res.status(401).json({ error: 'Access token missing' })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.admin = decoded // attach admin info to request if needed
    next()
  } catch (err) {
    return res.status(403).json({ error: 'Invalid or expired token' })
  }
}

/*adminRoute.use((req, res, next) => {
  if (
    [
      '/admin/login',
      '/admin/register',
      '/admin/orders/reference',
      '/admin/checkout',
      '/admin/getoption',
      '/admin/paystack/payment-response'
    ].includes(req.path)
  )
    return next()
  return verifyAdminToken(req, res, next)
})*/

const s3Client = new S3Client({
  region: process.env.AWSS3REGION,
  credentials: {
    accessKeyId: process.env.AWSACCESSKEY,
    secretAccessKey: process.env.AWSSECRETACCESSKEY
  }
})

adminRoute.post(
  '/admin/paystack/payment-response/development',
  async (req, res, next) => {
    try {
      const { checkout_id } = req.query

      if (!checkout_id || checkout_id === 'undefined') {
        return res.status(400).json({ error: 'Bad request' })
      }

      const newOrder = new Order({
        checkout_id
      })

      await newOrder.save()

      /* telegramBot.callBot(
        `new order ${process.env.PAYOOR_URL}/admin/order?reference=${newOrder._id}`
      )*/

      return res.sendStatus(200)
    } catch (error) {
      next(error)
    }
  }
)

adminRoute.get('/admin/orders/reference', async (req, res, next) => {
  try {
    const { referenceId } = req.query

    if (!referenceId || referenceId === 'undefined') {
      return res.status(400).json({ error: 'Bad request' })
    }

    const order = await Order.findOne({ _id: referenceId }).populate(
      'checkout_id'
    )

    if (!order) {
      return res.status(404).json({ error: 'Order not found' })
    }

    const cartItems =
      order.checkout_id.cart_items instanceof Map
        ? Object.fromEntries(order.checkout_id.cart_items)
        : order.checkout_id.cart_items.toObject?.() ||
          order.checkout_id.cart_items

    const variantIds = Object.keys(cartItems).map(id => new ObjectId(id))

    const variantsCollection =
      payoorDBConnection.db.collection('productvariants')
    const productCollection = payoorDBConnection.db.collection('newproducts')

    const variants = await variantsCollection
      .find({ _id: { $in: variantIds } })
      .toArray()

    const productIds = variants.map(v => v.productId)

    const products = await productCollection
      .find({ _id: { $in: productIds } })
      .toArray()

    const productMap = {}
    for (const product of products) {
      productMap[product._id.toString()] = product
    }

    const enrichedCart = variants.map(variant => ({
      ...variant,
      product: productMap[variant.productId.toString()],
      quantity: cartItems[variant._id.toString()]
    }))

    return res.status(200).json({
      message: 'Order with enriched cart and product details',
      order,
      cart: enrichedCart,
      phone_number: order.checkout_id.phone_number || null
    })
  } catch (error) {
    next(error)
  }
})

adminRoute.post('/admin/paystack/payment-response', async (req, res, next) => {
  try {
    const signature = req.headers['x-paystack-signature']

    const computedHash = crypto
      .createHmac('sha512', process.env.PAYSTACK_SECRET_KEY)
      .update(JSON.stringify(req.body))
      .digest('hex')

    if (computedHash !== signature) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    const { event, data } = req.body

    if (event === 'charge.success') {
      const { metadata } = data
      const { checkoutId, userId } = metadata

      const newOrder = new Order({
        user_id: userId,
        checkout_id: checkoutId
      })

      await newOrder.save()

      await orderconfirmEmail(
        userId,
        `${process.env.PAYOOR_URL}/userorder/${newOrder._id}`
      )

      /*telegramBot.callBot(
        `new order ${process.env.PAYOOR_URL}/admin/order?reference=${newOrder._id}`
      )*/

      const telegbotUrl = 'http://telegbot:3001/neworder'

      await axios.post(telegbotUrl, {
        orderId: newOrder._id
      })

      return res.sendStatus(200)
    }

    return res.sendStatus(200)
  } catch (error) {
    next(error)
  }
})

adminRoute.post('/bani/webhook/payment-response', async (req, res, next) => {
  try {
    const merchant_private_key = process.env.MERCHANT_PRIVATE_KEY_BANI
    const headers = req.headers
    const body = req.rawBody

    if (!body) {
      return res
        .status(400)
        .json({ status: false, message: 'No body provided' })
    }

    if (!headers['bani-hook-signature']) {
      return res
        .status(400)
        .json({ status: false, message: 'No signature provided' })
    }

    const sig = Buffer.from(headers['bani-hook-signature'], 'utf8')
    const hmac = crypto.createHmac('sha256', merchant_private_key)
    const digest = Buffer.from(hmac.update(body).digest('hex'), 'utf8')

    if (sig.length !== digest.length || !crypto.timingSafeEqual(digest, sig)) {
      return res
        .status(401)
        .json({ status: false, message: 'Invalid signature' })
    }

    const webhookData = JSON.parse(body)

    const { checkoutId, userId } = webhookData.data.custom_data
    const paymentStatus = webhookData.data.pay_status

    const telegbotUrl = 'http://telegbot:3001/neworder';

    const telegbotSimpleMsgUrl = 'http://telegbot:3001/send/message/simple';

    const debugOrderMessage = `${checkoutId}, ${userId}, order confirmation`;

    console.log(debugOrderMessage);

    await axios.post(telegbotSimpleMsgUrl, {
      simplemessage: debugOrderMessage
    });

    if (paymentStatus === 'paid') {
      const newOrder = new Order({
        user_id: userId,
        checkout_id: checkoutId
      })

      await newOrder.save();

      await orderconfirmEmail(
        userId,
        `${process.env.PAYOOR_URL}/userorder/${newOrder._id}`
      );

      await axios.post(telegbotUrl, {
        orderId: newOrder._id
      })

      return res.sendStatus(200)
    } else {
      console.log(
        `Webhook received for order_ref: ${order_ref} with status: ${paymentStatus}`
      )
      return res.status(200).json({
        status: true,
        message: `Webhook received for status: ${paymentStatus}`
      })
    }
  } catch (error) {
    console.error('Webhook processing error:', error)
    next(error)
  }
})

adminRoute.post('/admin/register', async (req, res, next) => {
  try {
    const { creatorpw } = req.query

    if (creatorpw !== process.env.CREATORPR) {
      return res.status(401).json({ message: 'not allowed' })
    }
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' })
    }

    const existingAdmin = await Admin.findOne({ email })

    if (existingAdmin) {
      return res
        .status(409)
        .json({ error: 'Admin with this email already exists' })
    }

    const newAdmin = new Admin({ email, password })
    await newAdmin.save()

    res.status(201).json({ message: 'Admin created successfully' })
  } catch (error) {
    next(error)
  }
})

adminRoute.post('/admin/login', async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' })
    }

    const admin = await Admin.findOne({ email })
    if (!admin) {
      return res.status(404).json({ error: 'Admin not found' })
    }

    const isMatch = await admin.comparePassword(password)
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid password' })
    }

    const token = jwt.sign(
      { id: admin._id, email: admin.email },
      process.env.JWT_SECRET,
      {
        expiresIn: '7d'
      }
    )

    res.status(200).json({ message: 'Login successful', token })
  } catch (error) {
    next(error)
  }
})

adminRoute.get('/admin/products-with-variants', async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 10
    const skip = (page - 1) * limit
    const search = req.query.search || ''

    const variantsCollection =
      payoorDBConnection.db.collection('productvariants')
    const productCollection = payoorDBConnection.db.collection('newproducts')

    const query = search
      ? { name: { $regex: new RegExp(search, 'i') } } // case-insensitive match
      : {}

    const totalProducts = await productCollection.countDocuments(query)

    const products = await productCollection
      .find(query)
      .skip(skip)
      .limit(limit)
      .toArray()

    const productIds = products.map(p => p._id)

    const variants = await variantsCollection
      .find({ productId: { $in: productIds } })
      .toArray()

    const variantMap = {}
    for (const variant of variants) {
      const key = variant.productId.toString()
      if (!variantMap[key]) {
        variantMap[key] = []
      }
      variantMap[key].push(variant)
    }

    const enrichedProducts = products.map(product => ({
      ...product,
      variants: variantMap[product._id.toString()] || []
    }))

    return res.status(200).json({
      message: 'Paginated products with variants',
      page,
      limit,
      total: totalProducts,
      pages: Math.ceil(totalProducts / limit),
      products: enrichedProducts
    })
  } catch (error) {
    next(error)
  }
})

adminRoute.post(
  '/admin/upload-image',
  uploadFileWithMulter().single('image'),
  async (req, res, next) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' })
      }

      const file = req.file
      const fileName = generateUniqueFileName(file.originalname)

      const uploadParams = {
        Bucket: 'payoorimages',
        Key: `products/${fileName}`,
        Body: file.buffer,
        ContentType: file.mimetype
      }

      const command = new PutObjectCommand(uploadParams)
      await s3Client.send(command)

      const imageUrl = `https://payoorimages.s3.ap-southeast-2.amazonaws.com/products/${fileName}`

      console.log('Uploaded:', imageUrl)

      return res.status(200).json({ url: imageUrl })
    } catch (error) {
      next(error)
    }
  }
)

adminRoute.post('/admin/create-product', async (req, res, next) => {
  try {
    const { name, image, generatedDescription, generatedCategories } = req.body

    if (!name || !image) {
      return res.status(400).json({ error: 'Name and image are required' })
    }

    const newProduct = {
      name,
      image,
      generatedDescription: generatedDescription || '',
      generatedCategories: Array.isArray(generatedCategories)
        ? generatedCategories
        : [],
      synced_to_algolia: false,
      variantCount: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    const productCollection = payoorDBConnection.db.collection('newproducts')
    const result = await productCollection.insertOne(newProduct)
    const product = await productCollection.findOne({ _id: result.insertedId })

    const { _id, __v, ...removeIdField } = product
    const productForIndexing = { _mongooseid: _id, ...removeIdField }

    await axios.post(
      `${ELASTIC_URL}/products/_doc/` + _id.toString(),
      productForIndexing,
      {
        headers: { 'Content-Type': 'application/json' }
      }
    )

    return res.status(201).json({ product })
  } catch (error) {
    next(error)
  }
})

adminRoute.post('/admin/add-variant/:productId', async (req, res, next) => {
  try {
    const productId = new ObjectId(req.params.productId)
    const { unit, price, availability, image } = req.body

    if (!unit || !price || !availability || !image) {
      return res.status(400).json({ error: 'All fields are required' })
    }

    const variantCollection =
      payoorDBConnection.db.collection('productvariants')

    const result = await variantCollection.insertOne({
      productId,
      unit,
      price,
      availability,
      image,
      createdAt: new Date(),
      updatedAt: new Date()
    })

    //console.log(result)

    await payoorDBConnection.db.collection('newproducts').updateOne(
      { _id: productId },
      {
        $inc: { variantCount: 1 },
        $set: { updatedAt: new Date() }
      }
    )

    const newVariant = await variantCollection.findOne({
      _id: result.insertedId
    })

    //console.log(newVariant)

    res.status(201).json({ variant: newVariant })
  } catch (error) {
    next(error)
  }
})

adminRoute.put('/admin/update-product/:productId', async (req, res, next) => {
  try {
    const productId = new ObjectId(req.params.productId)
    const {
      name,
      image,
      generatedDescription,
      generatedCategories,
      synced_to_algolia
    } = req.body

    if (!name || !Array.isArray(generatedCategories)) {
      return res.status(400).json({ error: 'Invalid input' })
    }

    const updateFields = {
      name,
      image,
      generatedDescription,
      generatedCategories,
      synced_to_algolia,
      updatedAt: new Date()
    }

    await payoorDBConnection.db
      .collection('newproducts')
      .updateOne({ _id: productId }, { $set: updateFields })

    const updatedProduct = await payoorDBConnection.db
      .collection('newproducts')
      .findOne({ _id: productId })

    const { _id, __v, ...removeIdField } = updatedProduct
    const productForIndexing = { _mongooseid: _id, ...removeIdField }

    await axios.post(
      `${ELASTIC_URL}/products/_doc/` + _id.toString(),
      productForIndexing,
      {
        headers: { 'Content-Type': 'application/json' }
      }
    )

    res.status(200).json({ message: 'Product updated successfully' })
  } catch (error) {
    next(error)
  }
})

adminRoute.put('/admin/update-variant/:variantId', async (req, res, next) => {
  try {
    const variantId = new ObjectId(req.params.variantId)
    const { unit, price, availability, image } = req.body

    if (!unit || !price || !availability) {
      console.log('All fields are required')
      return res.status(400).json({ error: 'All fields are required' })
    }

    const updateFields = {
      unit,
      price,
      availability,
      image,
      updatedAt: new Date()
    }

    const result = await payoorDBConnection.db
      .collection('productvariants')
      .updateOne({ _id: variantId }, { $set: updateFields })

    res.status(200).json({ message: 'Variant updated successfully' })
  } catch (error) {
    next(error)
  }
})

adminRoute.delete(
  '/admin/delete-product/:productId',
  async (req, res, next) => {
    try {
      const productId = new ObjectId(req.params.productId)

      await payoorDBConnection.db
        .collection('newproducts')
        .deleteOne({ _id: productId })
      await payoorDBConnection.db
        .collection('productvariants')
        .deleteMany({ productId })

      res
        .status(200)
        .json({ message: 'Product and its variants deleted successfully' })
    } catch (error) {
      next(error)
    }
  }
)

// Server-side route for deleting a variant
adminRoute.delete(
  '/admin/delete-variant/:variantId',
  async (req, res, next) => {
    try {
      const variantId = new ObjectId(req.params.variantId)

      const variantCollection =
        payoorDBConnection.db.collection('productvariants')
      const variant = await variantCollection.findOne({ _id: variantId })

      if (!variant) return res.status(404).json({ error: 'Variant not found' })

      await variantCollection.deleteOne({ _id: variantId })
      await payoorDBConnection.db
        .collection('newproducts')
        .updateOne(
          { _id: variant.productId },
          { $inc: { variantCount: -1 }, $set: { updatedAt: new Date() } }
        )

      res.status(200).json({ message: 'Variant deleted successfully' })
    } catch (error) {
      next(error)
    }
  }
)

function generateUniqueFileName (originalname) {
  const timestamp = Date.now()
  const extension = originalname.split('.').pop()
  return `${timestamp}-${Math.random()
    .toString(36)
    .substring(2, 15)}.${extension}`
}

async function testTelegbotNotify () {
  const telegbotUrl = 'http://telegbot:3001/notify'

  try {
    const response = await axios.post(telegbotUrl, {
      orderId: 'test-order-12345'
    })

    console.log('✅ Response from telegbot:', response.data)
  } catch (error) {
    if (error.response) {
      console.error(
        '❌ Error response:',
        error.response.status,
        error.response.data
      )
    } else {
      console.error('❌ Request error:', error.message)
    }
  }
}

adminRoute.get('/admin/checkout', async (req, res, next) => {
  try {
    const { checkoutid } = req.query
    const checkout = await Checkout.findOne({ _id: checkoutid }).populate({
      path: 'user_id',
      select: 'email phoneNumber'
    })

    if (checkout) {
      res.status(200).json({
        checkout
      })
    } else {
      res.status(400).json({
        message: 'not found',
        checkout: {}
      })
    }
  } catch (error) {
    next(error)
  }
})

adminRoute.get('/admin/getoption', async (req, res, next) => {
  try {
    const { mongooseid } = req.query

    const objectId = new ObjectId(mongooseid)

    const variant = await ProductVariant.findOne({ _id: objectId }).populate({
      path: 'productId',
      select: 'name'
    })

    console.log(variant)

    if (!variant) {
      return res.status(404).json({
        message: 'Variant not found'
      })
    }

    res.status(200).json({
      message: 'Variant found',
      variant
    })
  } catch (error) {
    next(error)
  }
})

//testTelegbotNotify()

export default adminRoute
