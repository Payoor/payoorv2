import express from 'express'
import mongoose from 'mongoose'

import authMiddleware from '../../../middleware/authMiddleware'

import ProductVariant from '../../../models/ProductVariant'
import Checkout from '../../../models/Checkout'

import redisManager from '../../../RedisManager'

const router = express()

router.post(
  '/checkout-service/create/checkout',
  authMiddleware,
  async (req, res, next) => {
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

    const productPriceMap = new Map()

    productVariants.forEach(variant => {
      productPriceMap.set(variant._id.toString(), {
        price: Number(variant.price),
        amount: Number(items[variant._id.toString()])
      })
    })

    console.log(productPriceMap)

    let subTotal = Array.from(productPriceMap.values()).reduce(
      (accumulator, item) => {
        return accumulator + item.price * item.amount
      },
      0
    )

    subTotal = Number(subTotal)

    const [rawDeliveryFee, rawServiceCharge] = await Promise.all([
      redisManager.hget('admindirective', 'deliveryfee'),
      redisManager.hget('admindirective', 'servicecharge')
      //Checkout.findOne({ user_id: userId }).sort({ created_at: -1 }).lean()
    ])

    const deliveryDates = getNext7Days()
    const delivery_fee = parseFloat(rawDeliveryFee) || 0
    const service_charge = parseFloat(rawServiceCharge) || 0

    const serviceCharge = (subTotal * service_charge) / 100

    const finalTotal = delivery_fee + serviceCharge + subTotal

    const delivery_date = deliveryDates[2]

    const phone_number = '0'

    const delivery_address = 'add a valid address'

    const roundedFinalTotal = Math.round(finalTotal)

    console.log(roundedFinalTotal, finalTotal, 'roundedFinalTotal')

    const newCheckoutDocument = new Checkout({
      user_id: new mongoose.Types.ObjectId(userId),
      delivery_address,
      delivery_fee,
      service_charge: serviceCharge,
      phone_number,
      subtotal: subTotal,
      delivery_date,
      total: roundedFinalTotal,
      cart_items: items
    })

    await newCheckoutDocument.save()
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

export default router
