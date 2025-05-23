import mongoose from 'mongoose'
import express from 'express'
import https from 'https'

import Checkout from '../models/Checkout'
import User from '../models/User'
import Order from '../models/Order'

import authMiddleware from '../middleware/authMiddleware'

import { redisClient } from '../redisconf'

import payoorDBConnection from '../payoordb'

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

import ElasticSearchClass from '../controllers/ElasticSearchClass'
import GoogleApiController from '../controllers/GoogleApiController'

const ObjectId = mongoose.Types.ObjectId

const elasticsearchUrl = process.env.ELASTICSEARCHURL
const productIndex = 'products'

const elasticSearchCl = new ElasticSearchClass(elasticsearchUrl)

const shopperRoute = express()

shopperRoute.post('/shopper/message', authMiddleware, async (req, res) => {
  try {
    const { message } = req.body
    const page = parseInt(req.query.page) || 1
    const size = parseInt(req.query.size) || 10

    const data = await elasticSearchCl.findProducts({
      query: message,
      index: productIndex,
      page,
      size
    })

    const { total, hits } = data.hits

    const totalItems = total.value;
    const currentCount = page * size 

    res.status(200).json({
      message: 'message sent',
      input: message,
      page,
      size,
      products: hits ? hits.map(hit => hit._source) : [],
      total: totalItems,
      hasMore: currentCount < totalItems // true if more pages remain
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

shopperRoute.post(
  '/shopper/message/suggest',
  authMiddleware,
  async (req, res) => {
    try {
      const { query } = req.query

      console.log(query, 'this is a test')

      const hits = await elasticSearchCl.autoComplete(query)

      res.status(200).json({
        message: 'autocorrect',
        hits
      })
    } catch (error) {
      console.log(error)
    }
  }
)

shopperRoute.get('/shopper/getoptions', authMiddleware, async (req, res) => {
  try {
    const { mongooseid } = req.query

    const productId = new ObjectId(mongooseid)

    const variantsCollection =
      payoorDBConnection.db.collection('productvariants')

    const variants = await variantsCollection
      .find({ productId: productId })
      .toArray()

    res.status(200).json({
      message: 'Variants found',
      variants
    })
  } catch (error) {
    console.log(error)
  }
})

shopperRoute.get('/shopper/getoption', authMiddleware, async (req, res) => {
  try {
    const { mongooseid } = req.query

    const productId = new ObjectId(mongooseid)

    const variantsCollection =
      payoorDBConnection.db.collection('productvariants')

    const variant = await variantsCollection.findOne({ _id: productId })

    res.status(200).json({
      message: 'Variant found',
      variant
    })
  } catch (error) {
    console.log(error)
  }
})

shopperRoute.get('/shopper/init/checkout', authMiddleware, async (req, res) => {
  try {
    const { jwt } = req.query

    const fee = await redisClient.hGet('admindirective', 'deliveryfee')
    const servicecharge = await redisClient.hGet(
      'admindirective',
      'servicecharge'
    )

    res.status(200).json({
      message: 'Checkout data',
      jwt,
      fee: Number(fee),
      servicecharge: Number(servicecharge)
    })
  } catch (error) {
    console.log(error)
  }
})

shopperRoute.post(
  '/shopper/create/checkout',
  authMiddleware,
  async (req, res) => {
    try {
      const { jwt } = req.query

      const { checkout } = req.body

      const validUser = await User.findByToken(jwt)

      if (validUser) {
        let newCheckout = new Checkout(checkout)
        newCheckout.user_id = validUser._id

        await newCheckout.save()

        //console.log(newCheckout)

        res.status(200).json({
          message: 'Checkout data',
          newcheckout: newCheckout
        })
      } else {
        res.status(404).json({ message: 'invalid user' })
      }
    } catch (error) {
      console.log(error)
    }
  }
)

shopperRoute.get(
  '/shopper/paystack/generate-paystack-link',
  authMiddleware,
  async (req, res) => {
    const { checkout_id } = req.query

    if (!checkout_id) {
      return res.status(400).json({ error: 'Checkout ID is required' })
    }

    try {
      const [checkoutWithUser] = await Checkout.aggregate([
        { $match: { _id: new mongoose.Types.ObjectId(checkout_id) } },
        {
          $lookup: {
            from: 'users',
            localField: 'user_id',
            foreignField: '_id',
            as: 'user'
          }
        },
        { $unwind: '$user' },
        {
          $project: {
            delivery_address: 1,
            total: 1,
            user_id: 1,
            email: '$user.email'
          }
        }
      ])

      if (!checkoutWithUser) {
        return res.status(400).json({ error: 'Invalid Checkout ID' })
      }

      const { email, user_id, total } = checkoutWithUser

      console.log(checkoutWithUser)

      const params = JSON.stringify({
        email: email,
        amount: Math.round(total * 100),
        channels: ['bank_transfer'],
        metadata: {
          userId: user_id,
          checkoutId: checkout_id
        }
      })

      const options = {
        hostname: 'api.paystack.co',
        port: 443,
        path: '/transaction/initialize',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          'Content-Type': 'application/json'
        }
      }

      const paystackRes = await new Promise((resolve, reject) => {
        const req = https.request(options, res => {
          let data = ''
          res.on('data', chunk => (data += chunk))
          res.on('end', () => {
            try {
              resolve(JSON.parse(data))
            } catch (err) {
              reject(new Error('Failed to parse Paystack response'))
            }
          })
        })

        req.on('error', reject)
        req.write(params)
        req.end()
      })

      if (!paystackRes.status) {
        return res.status(400).json({ error: paystackRes.message })
      }

      res.status(200).json({
        success: true,
        data: {
          authorizationUrl: paystackRes.data.authorization_url,
          reference: paystackRes.data.reference,
          accessCode: paystackRes.data.access_code
        }
      })
    } catch (error) {
      console.error('Error generating paystack link:', error)
      return res.status(500).json({ error: 'Server error' })
    }
  }
)

shopperRoute.get(
  '/shopper/user/getorders',
  authMiddleware,
  async (req, res) => {
    try {
      const { userId } = req

      const userOrders = await Order.find({ user_id: userId }).populate(
        'checkout_id'
      )

      const variantsCollection =
        payoorDBConnection.db.collection('productvariants')
      const productCollection = payoorDBConnection.db.collection('newproducts')

      const enrichedOrders = []

      for (const order of userOrders) {
        const cartItems =
          order.checkout_id.cart_items instanceof Map
            ? Object.fromEntries(order.checkout_id.cart_items)
            : order.checkout_id.cart_items.toObject?.() ||
              order.checkout_id.cart_items

        const variantIds = Object.keys(cartItems || {}).map(
          id => new ObjectId(id)
        )

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

        enrichedOrders.push({
          ...order.toObject(),
          cart: enrichedCart
        })
      }

      console.log(enrichedOrders)

      return res.status(200).json({
        success: true,
        orders: enrichedOrders
      })
    } catch (error) {
      console.error(error)
      return res.status(500).json({
        success: false,
        message: 'Server error'
      })
    }
  }
)

shopperRoute.get(
  '/shopper/user/getorder/',
  authMiddleware,
  async (req, res) => {
    try {
      const { userId } = req
      const { orderId } = req.query

      if (!ObjectId.isValid(orderId)) {
        return res
          .status(400)
          .json({ success: false, message: 'Invalid order ID' })
      }

      const order = await Order.findOne({
        _id: new ObjectId(orderId),
        user_id: new ObjectId(userId)
      }).populate('checkout_id')

      if (!order) {
        return res
          .status(404)
          .json({ success: false, message: 'Order not found' })
      }

      const cartItems =
        order.checkout_id.cart_items instanceof Map
          ? Object.fromEntries(order.checkout_id.cart_items)
          : order.checkout_id.cart_items.toObject?.() ||
            order.checkout_id.cart_items

      const variantIds = Object.keys(cartItems || {}).map(
        id => new ObjectId(id)
      )

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
        success: true,
        order: order.toObject(),
        cart: enrichedCart
      })
    } catch (error) {
      console.error(error)
      return res.status(500).json({
        success: false,
        message: 'Server error'
      })
    }
  }
)

shopperRoute.get(
  '/shopper/google/search-places',
  authMiddleware,
  GoogleApiController.searchPlaces
)

shopperRoute.get(
  '/shopper/google/use-current-location',
  authMiddleware,
  GoogleApiController.reverseGeocode
)

export default shopperRoute

//https://chatgpt.com/c/6819039c-9ad4-8005-8400-d2567db4dc3c
