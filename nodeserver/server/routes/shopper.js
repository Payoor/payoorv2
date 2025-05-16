import mongoose from 'mongoose'
import express from 'express'

import Checkout from '../models/Checkout'
import User from '../models/User'

import { redisClient } from '../redisconf'

import payoorDBConnection from '../payoordb'

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

import ElasticSearchClass from '../controllers/ElasticSearchClass'

const ObjectId = mongoose.Types.ObjectId

const elasticsearchUrl = 'http://shopping_assistant-elasticsearch-1:9200'
const productIndex = 'products'

const elasticSearchCl = new ElasticSearchClass(elasticsearchUrl)

const shopperRoute = express()

shopperRoute.post('/shopper/message', async (req, res) => {
  try {
    const { message } = req.body

    const data = await elasticSearchCl.findProducts({
      query: message,
      index: productIndex
    })

    const { total, hits } = data.hits

    res.status(200).json({
      message: 'message sent',
      input: message,
      products: hits ? hits.map(hit => hit._source) : [],
      total: total.value
    })
  } catch (error) {
    console.log(error)
  }
})

shopperRoute.post('/shopper/message/suggest', async (req, res) => {
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
})

shopperRoute.get('/shopper/getoptions', async (req, res) => {
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

shopperRoute.get('/shopper/getoption', async (req, res) => {
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

shopperRoute.get('/shopper/init/checkout', async (req, res) => {
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

shopperRoute.post('/shopper/create/checkout', async (req, res) => {
  try {
    const { jwt } = req.query

    const { checkout } = req.body

    const validUser = await User.findByToken(jwt)

    if (validUser) {
      let newCheckout = new Checkout(checkout)
      newCheckout.user_id = validUser._id

      await newCheckout.save()

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
})

export default shopperRoute

//https://chatgpt.com/c/6819039c-9ad4-8005-8400-d2567db4dc3c
