import mongoose from 'mongoose'
import express from 'express'
import https from 'https'
const crypto = require('crypto')

import Order from '../models/Order'

import telegramBot from '../TelegramBotClass'

import payoorDBConnection from '../payoordb'

import orderconfirmEmail from '../utils/orderconfirmEmail'

const ObjectId = mongoose.Types.ObjectId

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const adminRoute = express()

adminRoute.post(
  '/admin/paystack/payment-response/development',
  async (req, res) => {
    try {
      const { checkout_id } = req.query

      if (!checkout_id || checkout_id === 'undefined') {
        return res.status(400).json({ error: 'Bad request' })
      }

      const newOrder = new Order({
        checkout_id
      })

      await newOrder.save()

      telegramBot.callBot(
        `new order ${process.env.PAYOOR_URL}/admin/order?reference=${newOrder._id}`
      )

      return res.sendStatus(200)
    } catch (error) {
      console.log(error)
    }
  }
)

adminRoute.get('/admin/orders/reference', async (req, res) => {
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
    console.log(error)
    return res.status(500).json({ error: 'Server error' })
  }
})

adminRoute.post('/admin/paystack/payment-response', async (req, res) => {
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

      telegramBot.callBot(
        `new order ${process.env.PAYOOR_URL}/admin/order?reference=${newOrder._id}`
      )

      return res.sendStatus(200)
    }

    return res.sendStatus(200)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'Server error' })
  }
})

adminRoute.get

export default adminRoute
