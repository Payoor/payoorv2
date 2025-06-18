import mongoose from 'mongoose'
import express from 'express'
import https from 'https'

import Checkout from '../models/Checkout'
import User from '../models/User'
import Order from '../models/Order'
import UserCart from '../models/UserCart'
import Product from '../models/Product'
import ProductVariant from '../models/ProductVariant'

import authMiddleware from '../middleware/authMiddleware'
import CouponClass from '../CouponClass'

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

shopperRoute.post(
  '/shopper/message',
  authMiddleware,
  async (req, res, next) => {
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

      const totalItems = total.value
      const currentCount = page * size

      //console.log(hits)

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
      next(error)
      //res.status(500).json({ error: 'Internal server error' })
    }
  }
)

shopperRoute.post(
  '/shopper/message/suggest',
  authMiddleware,
  async (req, res, next) => {
    try {
      const { query } = req.query

      console.log(query, 'this is a test')

      const hits = await elasticSearchCl.autoComplete(query)

      res.status(200).json({
        message: 'autocorrect',
        hits
      })
    } catch (error) {
      next(error)
    }
  }
)

shopperRoute.get(
  '/shopper/getoptions',
  authMiddleware,
  async (req, res, next) => {
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
      next(error)
    }
  }
)

shopperRoute.get(
  '/shopper/getproduct',
  authMiddleware,
  async (req, res, next) => {
    try {
      const { mongooseid } = req.query

      if (!mongooseid || !ObjectId.isValid(mongooseid)) {
        return res
          .status(400)
          .json({ userMessage: 'Invalid or missing product ID.' })
      }

      const productId = new ObjectId(mongooseid)

      const product = await Product.findOne({ _id: productId })

      if (!product) {
        return res.status(404).json({ userMessage: 'Product not found.' })
      }

      res.status(200).json({
        message: 'Product found successfully.',
        product: {
          productname: product.name,
          productimg: product.image,
          productMongooseId: product._id,
          productDescription: product.generatedDescription,
          variantCount: product.variantCount,
          metadata: product.metadata
        }
      })
    } catch (error) {
      // Pass the error to the next error-handling middleware
      next(error)
    }
  }
)

shopperRoute.get(
  '/shopper/getoption',
  authMiddleware,
  async (req, res, next) => {
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
          userMessage: 'Variant not found'
        })
      }

      res.status(200).json({
        message: 'Variant found',
        variant
      })
    } catch (error) {
      next(error)
    }
  }
)

shopperRoute.get(
  '/shopper/init/checkout',
  authMiddleware,
  async (req, res, next) => {
    try {
      const { jwt } = req.query
      const userId = req.userId

      const [fee, servicecharge, latestCheckout] = await Promise.all([
        redisClient.hget('admindirective', 'deliveryfee'),
        redisClient.hget('admindirective', 'servicecharge'),
        Checkout.findOne({ user_id: userId }).sort({ created_at: -1 }).lean()
      ])

      const phone_number = latestCheckout?.phone_number || ''
      const delivery_address = latestCheckout?.delivery_address || ''

      res.status(200).json({
        message: 'Checkout data',
        jwt,
        fee: Number(fee),
        servicecharge: Number(servicecharge),
        phone_number,
        delivery_address
      })
    } catch (error) {
      next(error)
    }
  }
)

shopperRoute.post(
  '/shopper/update/checkout',
  authMiddleware,
  async (req, res, next) => {
    try {
      const { jwt, checkoutId } = req.query
      const { checkout } = req.body

      const validUser = await User.findByToken(jwt)

      if (!validUser) {
        return res.status(404).json({ userMessage: 'invalid user' })
      }

      const allowedUpdateFields = [
        'delivery_address',
        'delivery_date',
        'delivery_instruction',
        'promo_code',
        'phone_number'
      ]

      const updateData = {}

      for (const key of allowedUpdateFields) {
        if (checkout.hasOwnProperty(key)) {
          updateData[key] = checkout[key]
        }
      }

      // Handle promo code logic if it's being updated
      if (updateData.promo_code && typeof updateData.promo_code === 'string') {
        const coupon = await CouponClass.getCoupon(updateData.promo_code)

        if (coupon && coupon.type) {
          updateData.promo_code_type = coupon.type
        } else {
          return res.status(400).json({
            userMessage: 'Invalid or expired coupon code'
          })
        }
      } else if (updateData.promo_code === '') {
        updateData.promo_code_type = ''
      }

      const updatedCheckout = await Checkout.findOneAndUpdate(
        { _id: new ObjectId(checkoutId), user_id: new ObjectId(validUser._id) },
        { $set: updateData },
        { new: true, runValidators: true }
      )

      if (!updatedCheckout) {
        return res
          .status(404)
          .json({
            userMessage:
              'Checkout not found or you do not have permission to update it.'
          })
      }

      res.status(200).json({
        message: 'Checkout data updated successfully',
        updatedCheckout: updatedCheckout
      })
    } catch (error) {
      next(error)
    }
  }
)

shopperRoute.get(
  '/shopper/paystack/generate-paystack-link',
  authMiddleware,
  async (req, res, next) => {
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

      // console.log(checkoutWithUser)

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
        return res.status(400).json({
          error: paystackRes.message,
          userMessage:
            'Error while generating paystack link. Please try again in a minute'
        })
      }

      console.log(paystackRes)

      res.status(200).json({
        success: true,
        data: {
          authorizationUrl: paystackRes.data.authorization_url,
          reference: paystackRes.data.reference,
          accessCode: paystackRes.data.access_code
        }
      })
    } catch (error) {
      console.log(error, 'from paystack')
      next(error)
    }
  }
)

shopperRoute.get(
  '/shopper/user/getorders',
  authMiddleware,
  async (req, res, next) => {
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

      //console.log(enrichedOrders)

      return res.status(200).json({
        success: true,
        orders: enrichedOrders
      })
    } catch (error) {
      next(error)
    }
  }
)

shopperRoute.get(
  '/shopper/user/getorder/',
  authMiddleware,
  async (req, res, next) => {
    try {
      const { userId } = req
      const { orderId } = req.query

      if (!ObjectId.isValid(orderId)) {
        return res
          .status(400)
          .json({ success: false, userMessage: 'Invalid order ID' })
      }

      const order = await Order.findOne({
        _id: new ObjectId(orderId),
        user_id: new ObjectId(userId)
      }).populate('checkout_id')

      if (!order) {
        return res
          .status(404)
          .json({ success: false, userMessage: 'Order not found' })
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
      next(error)
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

shopperRoute.post(
  '/shopper/apply-coupon',
  authMiddleware,
  async (req, res, next) => {
    try {
      const { coupon_code } = req.body
      const userId = req.userId

      if (!coupon_code || typeof coupon_code !== 'string') {
        return res.status(401).json({
          success: false,
          userMessage: 'Coupon code is required and must be a string'
        })
      }

      console.log(coupon_code, 'coupon_code')

      // Get the coupon from Redis
      const key = `coupon:code:${coupon_code}`
      const raw = await redisClient.get(key)

      console.log(raw, 'raw here')

      if (!raw) {
        return res.status(404).json({
          success: false,
          userMessage: 'Coupon code not found or expired'
        })
      }

      const couponConfig = JSON.parse(raw)
      const { type, redeemed } = couponConfig

      const typeKey = `coupon:type:${type}`
      const typeRaw = await redisClient.get(typeKey)

      if (!typeRaw) {
        return res.status(404).json({
          success: false,
          userMessage: 'Coupon type not found or expired'
        })
      }

      const couponTypeConfig = JSON.parse(typeRaw)
      const { ttl, createdAt, discount } = couponTypeConfig

      const now = Date.now()
      const isExpired = now > createdAt + ttl * 1000

      if (isExpired) {
        return res.status(410).json({
          success: false,
          userMessage: 'Coupon code has expired'
        })
      }

      const usedCodeCheckout = await Checkout.findOne({
        user_id: userId,
        promo_code: coupon_code
      }).select('_id')

      let usedCoupon = false

      if (usedCodeCheckout) {
        const usedOrder = await Order.findOne({
          checkout_id: usedCodeCheckout._id
        })

        if (usedOrder) usedCoupon = true
      }

      const usedTypeCheckout = await Checkout.findOne({
        user_id: userId,
        promo_code_type: type
      }).select('_id')

      if (usedTypeCheckout) {
        const usedOrder = await Order.findOne({
          checkout_id: usedTypeCheckout._id
        })

        if (usedOrder) usedCoupon = true
      }

      if (usedCoupon) {
        return res.status(409).json({
          success: false,
          userMessage:
            'You have already used this coupon code or a coupon of this type'
        })
      }

      const discountKey = ``

      return res.status(200).json({
        success: true,
        message: 'Coupon code applied successfully',
        discount: discount || {}, // could contain flat, percentage, or freeDelivery
        type,
        expires_in: Math.floor((createdAt + ttl * 1000 - now) / 1000)
      })
    } catch (error) {
      console.log(error)
      next(error)
    }
  }
)

shopperRoute.post('/shopper/cart', authMiddleware, async (req, res, next) => {
  try {
    const userId = req.userId
    const items = req.body.items || {}
    const totalItems = req.body.totalItems || []

    if (!userId) {
      return res
        .status(401)
        .json({ userMessage: 'Authentication required: User ID not found.' })
    }

    let user_cart
    let total = 0

    const foundUserCart = await UserCart.findOne({ userId })

    if (foundUserCart) {
      const mergedTotalItems = Array.from(new Set([...totalItems]))

      const existingItems = { ...(foundUserCart.items || {}) }

      for (const productId in items) {
        if (items.hasOwnProperty(productId)) {
          existingItems[productId] = items[productId]
        }
      }

      for (const existingProductId in existingItems) {
        if (!items.hasOwnProperty(existingProductId)) {
          delete existingItems[existingProductId]
        }
      }

      const updatedUserCart = await UserCart.findOneAndUpdate(
        { userId },
        {
          $set: {
            totalItems: mergedTotalItems,
            items: existingItems
          }
        },
        { new: true, runValidators: true }
      )

      if (!updatedUserCart) {
        return res.status(404).json({
          synced: false,
          user_cart: {}
        })
      }

      user_cart = updatedUserCart

      total = await user_cart.calculateTotal()
    } else {
      const newUserCart = new UserCart({
        userId,
        items,
        totalItems
      })

      await newUserCart.save()

      user_cart = await UserCart.findOne({ userId })

      total = await user_cart.calculateTotal()
    }

    return res.status(200).json({
      synced: true,
      user_cart,
      total
    })
  } catch (error) {
    next(error)
  }
})

shopperRoute.post(
  '/shopper/initialize',
  authMiddleware,
  async (req, res, next) => {
    try {
      const userId = req.userId

      if (!userId) {
        return res
          .status(401)
          .json({ userMessage: 'Authentication required: User ID not found.' })
      }

      const foundUserCart = await UserCart.findOne({ userId })

      if (foundUserCart) {
        const total = await foundUserCart.calculateTotal()

        return res.status(200).json({
          initialized: true,
          user_cart: {
            items: foundUserCart.items || {},
            totalItems: foundUserCart.totalItems || []
          },
          total
        })
      } else {
        return res.status(200).json({
          initialized: true,
          user_cart: {
            items: {},
            totalItems: []
          },
          total: 0
        })
      }
    } catch (error) {
      next(error)
    }
  }
)

shopperRoute.get(
  '/shopper/bani/getuserdetails',
  authMiddleware,
  async (req, res, next) => {
    try {
      const userId = req.userId

      const { checkout_id } = req.query

      if (!checkout_id) {
        return res.status(400).json({ error: 'Checkout ID is required' })
      }

      if (!userId) {
        return res
          .status(401)
          .json({ userMessage: 'Authentication required: User ID not found.' })
      }

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
            name: '$user.name',
            email: '$user.email',
            phoneNumber: '$user.phoneNumber'
          }
        }
      ])

      if (!checkoutWithUser) {
        return res.status(400).json({ error: 'Invalid Checkout ID' })
      }

      const { name, email, phoneNumber, user_id, total, delivery_address } =
        checkoutWithUser

      res.status(200).json({
        name,
        email,
        phoneNumber,
        userId: user_id,
        total,
        deliveryAddress: delivery_address
      })
    } catch (error) {
      next(error)
    }
  }
)

shopperRoute.post(
  '/shopper/checkout/create',
  authMiddleware,
  async (req, res, next) => {
    try {
      const userId = req.userId

      if (!userId) {
        return res
          .status(401)
          .json({ userMessage: 'Authentication required: User ID not found.' })
      }

      const { items } = req.body

      if (!items || Object.keys(items).length === 0) {
        return res
          .status(400)
          .json({ userMessage: 'No items provided in the request body.' })
      }

      const productIds = Object.keys(items)
      const objectIdProductIds = productIds.map(
        id => new mongoose.Types.ObjectId(id)
      )

      const productVariants = await ProductVariant.find({
        _id: { $in: objectIdProductIds }
      }).select('price')

      let subTotal = 0
      const productPriceMap = new Map()

      productVariants.forEach(variant => {
        productPriceMap.set(variant._id.toString(), variant.price)
      })

      for (const productId of productIds) {
        const quantity = Number(items[productId])

        if (isNaN(quantity) || quantity <= 0) {
          return res.status(400).json({
            userMessage: `Invalid quantity for product ID ${productId}. Quantity must be a positive number.`
          })
        }

        const price = productPriceMap.get(productId)

        if (price !== undefined) {
          subTotal += Number(price) * quantity
        } else {
          return res.status(404).json({
            userMessage: `Product with ID ${productId} not found or invalid.`
          })
        }
      }

      subTotal = Number(subTotal)

      const [validUser, rawDeliveryFee, rawServiceCharge, latestCheckout] =
        await Promise.all([
          User.findOne({ _id: new mongoose.Types.ObjectId(userId) }).lean(),
          redisClient.hget('admindirective', 'deliveryfee'),
          redisClient.hget('admindirective', 'servicecharge'),
          Checkout.findOne({ user_id: userId }).sort({ created_at: -1 }).lean()
        ])

      if (!validUser) {
        return res.status(404).json({ userMessage: 'User not found.' })
      }

      const { email, phoneNumber } = validUser

      const delivery_fee = parseFloat(rawDeliveryFee) || 0
      const service_charge = parseFloat(rawServiceCharge) || 0

      const finalTotal = delivery_fee + service_charge + subTotal

      const phone_number = phoneNumber
      const delivery_address =
        latestCheckout?.delivery_address || 'add a valid address'

      const deliveryDates = getNext7Days() // Generate delivery dates

      const delivery_date = deliveryDates[2] // Select the 3rd day (index 2)

      const newCheckoutDocument = new Checkout({
        // Renamed for clarity
        user_id: new mongoose.Types.ObjectId(userId),
        delivery_address,
        delivery_fee,
        service_charge,
        phone_number,
        subtotal: subTotal,
        delivery_date,
        total: finalTotal,
        cart_items: items
      })

      await newCheckoutDocument.save()

      // Convert Mongoose document to a plain JavaScript object
      const checkout = newCheckoutDocument.toObject()

      console.log('Checkout successfully created:')
      console.log('Subtotal:', subTotal)
      console.log('Delivery Fee:', delivery_fee)
      console.log('Service Charge:', service_charge)
      console.log('Final Total:', finalTotal)
      console.log('New Checkout Document (Mongoose):', newCheckoutDocument) // Mongoose object
      console.log('Checkout Object (Plain JS):', checkout) // Plain JS object

      res.status(201).json({
        message: 'Checkout successfully created.',
        checkout: { ...checkout, deliveryDates } // Spread checkout object and add deliveryDates
      })
    } catch (error) {
      console.error('Error during checkout creation:', error)
      next(error)
    }
  }
)

shopperRoute.get(
  '/shopper/checkout/get',
  authMiddleware,
  async (req, res, next) => {
    try {
      const { checkout_id } = req.query

      if (!checkout_id) {
        return res.status(400).json({ userMessage: 'Checkout ID is required.' })
      }

      if (!mongoose.Types.ObjectId.isValid(checkout_id)) {
        return res
          .status(400)
          .json({ userMessage: 'Invalid Checkout ID format.' })
      }

      const checkOutData = await Checkout.findOne({
        _id: new mongoose.Types.ObjectId(checkout_id)
      }).lean()

      if (!checkOutData) {
        return res.status(404).json({ userMessage: 'Checkout not found.' })
      }

      console.log('Retrieved Checkout Data (Plain JS):', checkOutData)

      const deliveryDates = getNext7Days()
      const checkout = checkOutData

      res.status(200).json({
        message: 'Checkout data retrieved successfully.',
        checkout: { ...checkout, deliveryDates }
      })
    } catch (error) {
      console.error('Error retrieving checkout data:', error)
      next(error)
    }
  }
)

function getNext7Days () {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  const monthsOfYear = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  const result = []
  const now = new Date()

  const startOffset = now.getHours() >= 17 ? 1 : 0

  for (let i = 0; i < 7; i++) {
    const currentDate = new Date()
    currentDate.setDate(now.getDate() + startOffset + i)

    result.push({
      dateid: i,
      day: daysOfWeek[currentDate.getDay()],
      date: currentDate.getDate(),
      month: monthsOfYear[currentDate.getMonth()]
    })
  }

  return result
}

export default shopperRoute

//https://chatgpt.com/c/6819039c-9ad4-8005-8400-d2567db4dc3c
