const express = require('express')
const app = express()

import telegramBot from './TelegramBotClass'

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const { redisClient, connectRedis } = require('./redisconf')

require('./db')

const port = process.env.PORT

app.use(express.json())

app.get('/health', async (req, res) => {
  console.log('✅ GET / hit')
  res.status(200).json({
    message: 'server is up and running here now'
  })
})

app.post('/notify', async (req, res) => {
  try {
    const { orderId } = req.body

    if (!orderId) {
      return res
        .status(400)
        .json({ message: 'Missing orderId in request body' })
    }

    const message = `🛒 New order received: ${process.env.PAYOOR_URL}/admin/order?reference=${orderId}`
    await telegramBot.callBot(message)

    res.status(200).json({ message: 'Notification sent to Telegram bot.' })
  } catch (err) {
    console.error('❌ Error notifying bot:', err)
    res.status(500).json({ message: 'Internal server error' })
  }
})

async function startServer () {
  try {
    //await connectRedis();
    console.log('🚀 Connected to Redis')

    app.listen(port, () => {
      console.log(`✅ Server is running on port ${port}`)
    })
  } catch (error) {
    console.error('❌ Failed to connect to Redis:', error)
    process.exit(1)
  }
}

startServer()
