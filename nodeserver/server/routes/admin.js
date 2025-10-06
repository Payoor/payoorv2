import mongoose from 'mongoose'
import express from 'express'
import https from 'https'
import jwt from 'jsonwebtoken'
import multer from 'multer'
import fs from 'fs'
const axios = require('axios')

const ELASTIC_URL = process.env.ELASTICSEARCHURL

import ElasticSearchClass from '../controllers/ElasticSearchClass'

const elasticSearchCl = new ElasticSearchClass()

//import { product_variant_added } from '../kafkaclient/topics.js'
//import { sendMessage } from '../kafkaclient/producer.js'

const {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand
} = require('@aws-sdk/client-s3')

const crypto = require('crypto')

import Order from '../models/Order'
import Admin from '../models/Admin.js'
import Checkout from '../models/Checkout.js'
import Product from '../models/Product.js'
import ProductVariant from '../models/ProductVariant'
import Category from '../models/Category.js'
import Coupon from '../models/Coupon.js'

//import '../scripts/createCoupons.js'

import payoorDBConnection from '../payoordb'

import orderconfirmEmail from '../utils/orderconfirmEmail'
import { send } from 'process'

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
    const webhookData = req.body

    if (!webhookData) {
      return res.status(400).json({
        status: false,
        message: 'No body provided or body was empty/invalid'
      })
    }

    if (!headers['bani-hook-signature']) {
      return res
        .status(400)
        .json({ status: false, message: 'No signature provided' })
    }

    const sig = Buffer.from(headers['bani-hook-signature'], 'utf8')
    const hmac = crypto.createHmac('sha256', merchant_private_key)
    const bodyForHmac = JSON.stringify(webhookData)

    const digest = Buffer.from(hmac.update(bodyForHmac).digest('hex'), 'utf8')

    /*if (sig.length !== digest.length || !crypto.timingSafeEqual(digest, sig)) {
      return res
        .status(401)
        .json({ status: false, message: 'Invalid signature' })
    }*/

    const { checkoutId, userId } = webhookData.data.custom_data

    const paymentStatus = webhookData.data.pay_status

    /* console.log(webhookData, 'check here for bani')
    console.log(headers, 'check headers for bani')
    console.log(
      webhookData.data.custom_data,
      'this is a test hewre',
      paymentStatus
    )*/

    const telegbotUrl = 'http://telegbot:3001/neworder'
    //const telegbotSimpleMsgUrl = 'http://telegbot:3001/send/message/simple'

    //const debugOrderMessage = `${checkoutId}, ${userId}, order confirmation`

    /*await axios.post(telegbotSimpleMsgUrl, {
      simplemessage: debugOrderMessage
    })*/

    if (paymentStatus === 'paid') {
      const newOrder = new Order({
        user_id: userId,
        checkout_id: checkoutId
      })

      await newOrder.save()

      await orderconfirmEmail(
        userId,
        `${process.env.PAYOOR_URL}/userorder/${newOrder._id}`
      )

      await axios.post(telegbotUrl, {
        orderId: newOrder._id
      })

      return res.sendStatus(200)
    } else {
      const orderIdentifier = checkoutId || 'N/A'
      return res.status(200).json({
        status: true,
        message: `Webhook received for status: ${paymentStatus} for order: ${orderIdentifier}`
      })
    }
  } catch (error) {
    console.error('Webhook processing error:', error)
    res.status(500).json({ status: false, message: 'Internal Server Error' })
    next(error)
  }
})

adminRoute.post('/manual-payment-response-trigger', async (req, res, next) => {
  try {
    const { userId, checkoutId, paymentStatus = 'paid' } = req.body

    // Basic validation for required fields
    if (!userId || !checkoutId) {
      return res.status(400).json({
        status: false,
        message: 'Missing userId or checkoutId in request body.'
      })
    }

    // Simulate the necessary data structure for the original logic
    // We assume 'paymentStatus' defaults to 'paid' for manual triggers,
    // but you can allow it to be passed in the body if you need to test other statuses.
    const simulatedWebhookData = {
      data: {
        custom_data: {
          checkoutId: checkoutId,
          userId: userId
        },
        pay_status: paymentStatus
      }
    }

    const telegbotUrl = 'http://telegbot:3001/neworder'

    if (simulatedWebhookData.data.pay_status === 'paid') {
      const newOrder = new Order({
        user_id: simulatedWebhookData.data.custom_data.userId,
        checkout_id: simulatedWebhookData.data.custom_data.checkoutId
      })

      await newOrder.save()

      await orderconfirmEmail(
        simulatedWebhookData.data.custom_data.userId,
        `${process.env.PAYOOR_URL}/userorder/${newOrder._id}`
      )

      await axios.post(telegbotUrl, {
        orderId: newOrder._id
      })

      console.log(
        `Manual trigger successful: Order ${newOrder._id} created for user ${userId}, checkout ${checkoutId}`
      )
      return res.status(200).json({
        status: true,
        message:
          'Manual payment trigger processed successfully (Order created).',
        orderId: newOrder._id
      })
    } else {
      const orderIdentifier =
        simulatedWebhookData.data.custom_data.checkoutId || 'N/A'
      console.log(
        `Manual trigger for status: ${simulatedWebhookData.data.pay_status} for order: ${orderIdentifier}`
      )
      return res.status(200).json({
        status: true,
        message: `Manual payment trigger processed for status: ${simulatedWebhookData.data.pay_status} for order: ${orderIdentifier}`
      })
    }
  } catch (error) {
    console.error('Manual payment trigger error:', error)
    res.status(500).json({
      status: false,
      message: 'Internal Server Error during manual trigger.'
    })
    next(error) // Pass error to Express error handling middleware if configured
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

adminRoute.post('/admin/login', async (req, res, next) => {
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

      const { itemId, model } = req.query

      console.log(itemId, model)

      let updatedItem

      if (itemId !== `0`) {
        if (model === 'NewProduct') {
          updatedItem = await Product.findOneAndUpdate(
            { _id: itemId },
            { image: imageUrl },
            {
              new: true,
              runValidators: true
            }
          )

          if (updatedItem) {
            console.log('Successfully updated product:', updatedItem)
          } else {
            console.log('No product found with ID:', itemId)
          }
        } else if (model === 'ProductVariant') {
          updatedItem = await ProductVariant.findOneAndUpdate(
            { _id: itemId },
            { image: imageUrl },
            {
              new: true,
              runValidators: true
            }
          )

          if (updatedItem) {
            console.log('Successfully updated product:', updatedItem)
          } else {
            console.log('No product found with ID:', itemId)
          }
        } else {
          updatedItem = await Category.findOneAndUpdate(
            { _id: itemId },
            { image: imageUrl },
            {
              new: true,
              runValidators: true
            }
          )

          if (updatedItem) {
            console.log('Successfully updated product:', updatedItem)
          } else {
            console.log('No product found with ID:', itemId)
          }
        }
      }

      // console.log('Uploaded:', imageUrl)

      return res.status(200).json({ url: imageUrl, updatedItem })
    } catch (error) {
      next(error)
    }
  }
)

adminRoute.put('/admin/product/update/description', async (req, res) => {
  try {
    const { id } = req.query
    const { description } = req.body

    if (typeof description !== 'string' || description.trim().length === 0) {
      return res
        .status(400)
        .json({ ok: false, error: 'Description is required' })
    }

    const updated = await Product.findByIdAndUpdate(
      id,
      { $set: { description: description.trim() } },
      { new: true }
    )

    if (!updated) {
      return res.status(404).json({ ok: false, error: 'Product not found' })
    }

    return res.json({ ok: true, product: updated })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ ok: false, error: 'Internal server error' })
  }
})

adminRoute.get('/admin/product/description', async (req, res) => {
  try {
    const { id } = req.query
    if (!id)
      return res
        .status(400)
        .json({ ok: false, error: 'Product ID is required' })

    const product = await Product.findById(id).select('description')
    if (!product)
      return res.status(404).json({ ok: false, error: 'Product not found' })

    res.json({
      ok: true,
      description: product.description ? product.description : ''
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ ok: false, error: 'Internal server error' })
  }
})

/*adminRoute.post('/admin/create-product', async (req, res, next) => {
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

    // Build NDJSON payload for Elasticsearch bulk insert
    const bulkPayload =
      JSON.stringify({ index: { _id: _id.toString() } }) +
      '\n' +
      JSON.stringify(productForIndexing) +
      '\n'

    await axios.post(`${ELASTIC_URL}/products/_bulk?refresh`, bulkPayload, {
      headers: { 'Content-Type': 'application/x-ndjson' }
    })

    return res.status(201).json({ product })
  } catch (error) {
    console.error('Error in create-product:', error)
    next(error)
  }
})*/

adminRoute.post('/admin/create-product', async (req, res, next) => {
  try {
    const { name, image, metadata, generatedDescription, generatedCategories } =
      req.body

    if (!name || !image) {
      return res.status(400).json({ error: 'Name and image are required' })
    }

    console.log(req.body, '/admin/create-product')

    const newProduct = {
      name,
      image,
      metadata,
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
    const productForIndexing = { _mongooseid: _id.toString(), ...removeIdField }

    // NDJSON bulk payload
    const bulkPayload =
      JSON.stringify({ index: { _id: _id.toString() } }) +
      '\n' +
      JSON.stringify(productForIndexing) +
      '\n'

    // Index in Elasticsearch
    const bulkResponse = await axios.post(
      `${ELASTIC_URL}/products/_bulk?refresh`,
      bulkPayload,
      {
        headers: { 'Content-Type': 'application/x-ndjson' }
      }
    )

    if (bulkResponse.data.errors) {
      const failedItems = bulkResponse.data.items.filter(item => {
        return item.index?.error
      })

      console.error('❌ Bulk insert had errors:', failedItems)
    }

    // Search immediately to verify the product was indexed
    const searchResponse = await axios.post(
      `${ELASTIC_URL}/products/_search`,
      {
        query: {
          match: {
            name: name
          }
        }
      },
      {
        headers: { 'Content-Type': 'application/json' }
      }
    )

    const hits = searchResponse.data.hits?.hits || []

    //console.log(hits, 'these are the hits')

    return res.status(201).json({
      message: 'Product created and indexed',
      product,
      indexed: hits.length > 0,
      elasticHits: hits.map(hit => hit._source)
    })
  } catch (error) {
    if (error.response) {
      console.error(
        'Elasticsearch error:',
        error.response.status,
        error.response.data
      )
    } else {
      console.error('Unexpected error:', error.message)
    }

    next(error)
  }
})

adminRoute.post('/admin/add-variant/:productId', async (req, res, next) => {
  //console.log('adding a new variant')

  try {
    const productId = new ObjectId(req.params.productId)
    const { unit, price, availability, image } = req.body

    if (!unit || !price || !availability || !image) {
      return res.status(400).json({ error: 'All fields are required' })
    }

    const variantCollection =
      payoorDBConnection.db.collection('productvariants')
    const productsCollection = payoorDBConnection.db.collection('newproducts')

    // 1️⃣ Insert the new variant
    const result = await variantCollection.insertOne({
      productId,
      unit,
      price,
      availability,
      image,
      createdAt: new Date(),
      updatedAt: new Date()
    })

    // 2️⃣ Increment variantCount and get the new value
    const updateResult = await productsCollection.findOneAndUpdate(
      { _id: productId },
      {
        $inc: { variantCount: 1 },
        $set: { updatedAt: new Date() }
      },
      { returnDocument: 'after' }
    )

    const newVariant = await variantCollection.findOne({
      _id: result.insertedId
    })

    //console.log(updateResult, 'updateResult')

    const mongooseId = updateResult._id
    const variantCount = updateResult.variantCount

    const data = await elasticSearchCl.updateProduct({
      mongooseId,
      variantCount
    })

    /*sendMessage(product_variant_added, {
      mongooseId,
      variantCount
    })*/

    // 3️⃣ Include the new variantCount in the response
    res.status(201).json({
      variant: newVariant,
      variantCount: updateResult.variantCount
    })
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
      metadata,
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
      metadata,
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

      const elasticDeleteResponse = await axios.delete(
        `${ELASTIC_URL}/products/_doc/${productId.toString()}`,
        {
          headers: { 'Content-Type': 'application/json' }
        }
      )

      if (
        elasticDeleteResponse.status !== 200 &&
        elasticDeleteResponse.status !== 202
      ) {
        console.warn(
          '⚠️ Elasticsearch delete returned unexpected status:',
          elasticDeleteResponse.status
        )
      }

      res.status(200).json({
        message:
          'Product and its variants deleted successfully from MongoDB and Elasticsearch'
      })
    } catch (error) {
      if (error.response) {
        console.error(
          'Elasticsearch error:',
          error.response.status,
          error.response.data
        )
      } else {
        console.error('Unexpected error:', error.message)
      }

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

      const updateResult = await payoorDBConnection.db
        .collection('newproducts')
        .findOneAndUpdate(
          { _id: variant.productId },
          { $inc: { variantCount: -1 }, $set: { updatedAt: new Date() } },
          { returnDocument: 'after' }
        )

      const mongooseId = variant.productId
      const variantCount = updateResult.variantCount

      const data = await elasticSearchCl.updateProduct({
        mongooseId,
        variantCount
      })

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

adminRoute.post('/admin/create-category', async (req, res, next) => {
  try {
    const { name, description, image, hexcolor } = req.body

    if (!name || !description || !image) {
      return res.status(400).json({
        message: 'Name, description, and image are required for a category.'
      })
    }

    const newCategory = new Category({
      name,
      description,
      image,
      hexcolor
    })

    await newCategory.save()

    res.status(201).json({
      message: 'Category created successfully!',
      category: newCategory
    })
  } catch (error) {
    next(error)
  }
})

adminRoute.get('/admin/categories', async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 10
    const search = req.query.search || ''
    const skip = (page - 1) * limit

    let query = {}
    if (search) {
      query = { name: { $regex: new RegExp(search, 'i') } }
    }

    const totalCategories = await Category.countDocuments(query)
    const totalPages = Math.ceil(totalCategories / limit)

    const categories = await Category.find(query).skip(skip).limit(limit)

    res.status(200).json({
      categories,
      currentPage: page,
      totalPages,
      totalCategories
    })
  } catch (error) {
    next(error)
  }
})

adminRoute.put('/admin/update-category/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const { name, description, image, hexcolor } = req.body

    // Basic validation for update fields
    if (!name || !description || !image) {
      return res.status(400).json({
        message:
          'Name, description, and image are required for updating a category.'
      })
    }

    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      {
        name,
        description,
        image,
        hexcolor
      },
      { new: true, runValidators: true }
    )

    if (!updatedCategory) {
      return res.status(404).json({ message: 'Category not found.' })
    }

    res.status(200).json({
      message: 'Category updated successfully!',
      category: updatedCategory
    })
  } catch (error) {
    next(error)
  }
})

adminRoute.delete('/admin/delete-category/:id', async (req, res, next) => {
  try {
    const { id } = req.params

    const deletedCategory = await Category.findByIdAndDelete(id)

    if (!deletedCategory) {
      return res.status(404).json({ message: 'Category not found.' })
    }

    res.status(200).json({ message: 'Category deleted successfully!' })
  } catch (error) {
    next(error)
  }
})

adminRoute.post('/admin/add-category-to-product', async (req, res, next) => {
  try {
    const { productId, categoryId } = req.body

    if (!productId || !categoryId) {
      return res
        .status(400)
        .json({ message: 'Product ID and Category ID are required.' })
    }

    if (
      !mongoose.Types.ObjectId.isValid(productId) ||
      !mongoose.Types.ObjectId.isValid(categoryId)
    ) {
      return res
        .status(400)
        .json({ message: 'Invalid Product ID or Category ID format.' })
    }

    const product = await Product.findById(productId)

    if (!product) {
      return res.status(404).json({ message: 'Product not found.' })
    }

    const category = await Category.findById(categoryId)

    if (!category) {
      return res.status(404).json({ message: 'Category not found.' })
    }

    if (product.categories.includes(categoryId)) {
      return res
        .status(409)
        .json({ message: 'Category already linked to this product.' })
    }

    product.categories.push(categoryId)

    await product.save()

    res.status(200).json({
      message: 'Category successfully added to product!',
      product: product.populate('categories')
    })
  } catch (error) {
    next(error)
  }
})

adminRoute.post(
  '/admin/remove-category-from-product',
  async (req, res, next) => {
    try {
      const { productId, categoryId } = req.body

      if (!productId || !categoryId) {
        return res
          .status(400)
          .json({ message: 'Product ID and Category ID are required.' })
      }

      if (
        !mongoose.Types.ObjectId.isValid(productId) ||
        !mongoose.Types.ObjectId.isValid(categoryId)
      ) {
        return res
          .status(400)
          .json({ message: 'Invalid Product ID or Category ID format.' })
      }

      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        { $pull: { categories: categoryId } },
        { new: true }
      ).populate('categories')

      if (!updatedProduct) {
        return res.status(404).json({ message: 'Product not found.' })
      }

      res.status(200).json({
        message: 'Category successfully removed from product!',
        product: updatedProduct
      })
    } catch (error) {
      next(error)
    }
  }
)

//testTelegbotNotify()

adminRoute.get('/admin/orders', async (req, res, next) => {
  try {
    const page = parseInt(req.query.page, 10) || 1
    const limit = parseInt(req.query.limit, 10) || 10
    const skip = (page - 1) * limit
    const search = (req.query.search || '').trim()

    const matchQuery = {
      checkout_id: { $exists: true }
    }

    if (search) {
      const searchRegex = new RegExp(search, 'i')
      matchQuery.$or = [
        { 'user.name': searchRegex },
        { 'checkout.delivery_address': searchRegex },
        { 'checkout.promo_code': searchRegex },
        { 'checkout.promo_code_type': searchRegex }
      ]
    }

    const countResult = await Order.aggregate([
      {
        $lookup: {
          from: 'users',
          localField: 'user_id',
          foreignField: '_id',
          as: 'user'
        }
      },
      {
        $lookup: {
          from: 'checkouts',
          localField: 'checkout_id',
          foreignField: '_id',
          as: 'checkout'
        }
      },
      {
        $unwind: { path: '$user', preserveNullAndEmptyArrays: true }
      },
      {
        $unwind: { path: '$checkout', preserveNullAndEmptyArrays: true }
      },
      {
        $match: matchQuery
      },
      {
        $count: 'totalOrders'
      }
    ])

    const total = countResult.length > 0 ? countResult[0].totalOrders : 0

    const orders = await Order.aggregate([
      {
        $lookup: {
          from: 'users',
          localField: 'user_id',
          foreignField: '_id',
          as: 'user'
        }
      },
      {
        $lookup: {
          from: 'checkouts',
          localField: 'checkout_id',
          foreignField: '_id',
          as: 'checkout'
        }
      },
      {
        $unwind: { path: '$user', preserveNullAndEmptyArrays: true }
      },
      {
        $unwind: { path: '$checkout', preserveNullAndEmptyArrays: true }
      },
      {
        $match: matchQuery
      },
      {
        $sort: { _id: -1 }
      },
      {
        $skip: skip
      },
      {
        $limit: limit
      },
      {
        $project: {
          _id: '$_id',
          name: '$user.name',
          email: '$user.email',
          phoneNumber: '$user.phoneNumber',
          delivery_address: '$checkout.delivery_address',
          delivery_date: '$checkout.delivery_date',
          delivery_instruction: '$checkout.delivery_instruction',
          promo_code: '$checkout.promo_code',
          promo_code_type: '$checkout.promo_code_type',
          cart_items: '$checkout.cart_items',
          subtotal: '$checkout.subtotal',
          delivery_fee: '$checkout.delivery_fee',
          service_charge: '$checkout.service_charge',
          total: '$checkout.total'
        }
      }
    ])

    return res.status(200).json({
      message: 'Paginated orders',
      page,
      limit,
      total,
      pages: Math.ceil(total / limit),
      orders: orders // The `orders` array is now already in the desired format
    })

    /*const query = {
      checkout_id: { $exists: true }
    }

    if (search) {
      const searchRegex = new RegExp(search, 'i')

      query.$or = [
        { 'user_id.name': searchRegex },
        { 'checkout_id.delivery_address': searchRegex },
        { 'checkout_id.promo_code': searchRegex },
        { 'checkout_id.promo_code_type': searchRegex }
      ];

      console.log(query, 'physics')
    }

    const total = await Order.countDocuments(query)

    const orders = await Order.find(query)
      .populate([
        { path: 'user_id', select: 'name email phoneNumber' },
        {
          path: 'checkout_id',
          select:
            'delivery_address delivery_date delivery_instruction promo_code promo_code_type cart_items subtotal delivery_fee service_charge total'
        }
      ])
      .sort({ _id: -1 })
      .skip(skip)
      .limit(limit)

    //console.log(orders)

    const cleanedOrders = orders.map(o => {
      const checkoutData = o.checkout_id
      const userData = o.user_id

      const final = {
        ...checkoutData.toObject({ virtuals: false }),
        ...userData.toObject({ virtuals: false }),

        _id: o._id
      }

      return final
    })

    return res.status(200).json({
      message: 'Paginated orders',
      page,
      limit,
      total,
      pages: Math.ceil(total / limit),
      orders: cleanedOrders
    })

    /*const agg = [
      // Join checkout
      {
        $lookup: {
          from: 'checkouts',
          localField: 'checkout_id',
          foreignField: '_id',
          as: 'checkout'
        }
      }
      { $unwind: { path: '$checkout', preserveNullAndEmptyArrays: true } },

      // Join user
      {
        $lookup: {
          from: 'users',
          localField: 'user_id',
          foreignField: '_id',
          as: 'user'
        }
      },
      { $unwind: { path: '$user', preserveNullAndEmptyArrays: true } },

      // Compute itemsCount from checkout.cart_items (object of {productId: qty})
      {
        $addFields: {
          itemsCount: {
            $sum: {
              $map: {
                input: {
                  $objectToArray: { $ifNull: ['$checkout.cart_items', {}] }
                },
                as: 'kv',
                in: { $toInt: { $ifNull: ['$$kv.v', 0] } }
              }
            }
          }
        }
      }
    ]

    // Optional search on joined fields
    if (rx) {
      agg.push({
        $match: {
          $or: [
            { 'user.name': { $regex: rx } },
            { 'user.email': { $regex: rx } },
            { 'user.phoneNumber': { $regex: rx } },
            { 'checkout.delivery_address': { $regex: rx } },
            { 'checkout.phone_number': { $regex: rx } }
          ]
        }
      })
    }

    // Sort by most recent first (fallback to _id)
    agg.push({ $sort: { 'checkout.created_at': -1, _id: -1 } })

    // Paginate + total in one pass
    agg.push({
      $facet: {
        data: [{ $skip: skip }, { $limit: limit }],
        count: [{ $count: 'total' }]
      }
    })

    const [{ data, count }] = await Order.aggregate(agg).allowDiskUse(true)

    console.log(data, count, 'data, count')

    const total = count?.[0]?.total || 0
    const pages = Math.max(1, Math.ceil(total / limit))

    // Shape the response
    const shapedOrders = data.map((o, idx) => ({
      index: skip + idx + 1, // for your "Index" column
      id: o._id?.toString(),
      userId: o.user?._id?.toString() || null,
      email: o.user?.email ?? null,
      name: o.user?.name ?? null,
      phoneNumber: o.user?.phoneNumber ?? o.checkout?.phone_number ?? null,
      deliveryAddress: o.checkout?.delivery_address ?? null,
      deliveryDate: o.checkout?.delivery_date
        ? `${o.checkout.delivery_date.day}, ${o.checkout.delivery_date.month} ${o.checkout.delivery_date.date}`
        : null,
      itemsCount: o.itemsCount ?? 0,
      subtotal: o.checkout?.subtotal ?? 0,
      deliveryFee: o.checkout?.delivery_fee ?? 0,
      serviceCharge: o.checkout?.service_charge ?? 0,
      total: o.checkout?.total ?? 0,
      createdAt: o.checkout?.created_at ?? null
    }))
    // keep rows that actually have an address (as you had)
    //.filter(o => o.deliveryAddress)

    //console.log(shapedOrders)

    return res.status(200).json({
      message: 'Paginated orders',
      page,
      limit,
      total,
      pages,
      orders: shapedOrders
    })*/
  } catch (error) {
    next(error)
  }
})

adminRoute.get('/admin/order/details', async (req, res, next) => {
  try {
    const { orderId } = req.query

    const order = await Order.findOne({ _id: orderId })
      .populate({
        path: 'checkout_id',
        select:
          'delivery_address delivery_date phone_number cart_items subtotal delivery_fee service_charge total created_at'
      })
      .populate({ path: 'user_id', select: 'email name phoneNumber' })
      .lean()

    const { cart_items } = order.checkout_id
    const productIds = Object.keys(cart_items)
    console.log(productIds, productIds.length)

    const orderItems = await ProductVariant.find({
      _id: { $in: productIds }
    })
      .populate({
        path: 'productId'
      })
      .lean()

    const enrichedItems = orderItems.map(p => ({
      ...p,
      amount: cart_items[p._id.toString()]
    }))

    res.status(200).json({
      message: 'Orders found',
      orderItems: enrichedItems
    })
  } catch (error) {
    next(error)
  }
})

adminRoute.get('/admin/coupons', async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 10
    const search = req.query.search || ''
    const skip = (page - 1) * limit

    // Start with a base query that checks for the existence of the expiresAt field
    let query = { expiresAt: { $exists: true } }

    if (search) {
      // Create a case-insensitive search query across multiple fields
      const searchQuery = {
        $or: [
          { name: { $regex: new RegExp(search, 'i') } },
          { affiliateKey: { $regex: new RegExp(search, 'i') } },
          { code: { $regex: new RegExp(search, 'i') } },
          { singleUse: { $regex: new RegExp(search, 'i') } }
        ]
      }

      // Combine the base query with the search query using $and
      query = { ...query, ...searchQuery }
    }

    // Get the total count of documents that match the combined query
    const totalCoupons = await Coupon.countDocuments(query)
    const totalPages = Math.ceil(totalCoupons / limit)

    // Find the coupons with pagination and the search query
    const coupons = await Coupon.find(query).skip(skip).limit(limit).lean()

    // Respond with the list of coupons and pagination information
    res.status(200).json({
      coupons,
      currentPage: page,
      totalPages,
      totalCoupons
    })
  } catch (error) {
    // Pass any errors to the Express error-handling middleware
    next(error)
  }
})

const generateCouponCode = () => {
  return crypto.randomBytes(5).toString('hex').toUpperCase()
}

adminRoute.post('/admin/coupons', async (req, res, next) => {
  try {
    const { _id, ...couponData } = req.body

    const finalCouponData = { ...couponData, code: generateCouponCode() }

    const newCoupon = new Coupon(finalCouponData)

    const savedCoupon = await newCoupon.save()

    res.status(201).json({
      message: 'Coupon created successfully',
      coupon: savedCoupon
    })
  } catch (error) {
    next(error)
  }
})

adminRoute.put('/admin/coupons/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const updatedCoupon = await Coupon.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    })

    if (!updatedCoupon) {
      return res.status(404).json({ message: 'Coupon not found.' })
    }

    res.status(200).json({
      message: 'Coupon updated successfully',
      coupon: updatedCoupon
    })
  } catch (error) {
    next(error)
  }
})

adminRoute.delete('/admin/coupons/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const deletedCoupon = await Coupon.findByIdAndDelete(id)

    if (!deletedCoupon) {
      return res.status(404).json({ message: 'Coupon not found.' })
    }

    res.status(200).json({
      message: 'Coupon deleted successfully',
      deletedCoupon
    })
  } catch (error) {
    next(error)
  }
})

export default adminRoute
