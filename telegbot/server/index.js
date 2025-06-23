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
app.use(express.text({ type: 'text/plain' }))

app.get('/health', async (req, res) => {
  console.log('✅ GET / hit')
  res.status(200).json({
    message: 'server is up and running here now'
  })
})

app.post('/errorlog', async (req, res) => {
  try {
    const receivedErrorMessage = req.body

    console.log('\n--- Received Error Log from Client ---')
    console.log(receivedErrorMessage)
    console.log('--- End of Received Error Log ---\n')

    const timestamp = req.header('X-Error-Timestamp')
    if (timestamp) {
      console.log(`Received at: ${timestamp}`)

      const message = receivedErrorMessage

      await telegramBot.callBot(`${message} ==> ${timestamp}`)
    }

    res
      .status(200)
      .json({ message: 'Error log received and processed by bot.' })
  } catch (error) {
    console.error('❌ Error in telegbot /errorlog route:', error)
    // Ensure you send a 500 status back to the client if there's an issue processing
    res.status(500).json({ message: 'Internal server error on bot side.' })
  }
})

app.post('/neworder', async (req, res) => {
  try {
    const { orderId } = req.body;

    if (!orderId) {
      return res
        .status(400)
        .json({ message: 'Missing orderId in request body' })
    }

    const message = `🛒 New order received: ${process.env.PAYOOR_URL}/admin/order?reference=${orderId}`;
    await telegramBot.callBot(message)

    res.status(200).json({ message: 'Notification sent to Telegram bot.' })
  } catch (err) {
    console.error('❌ Error notifying bot:', err)
    res.status(500).json({ message: 'Internal server error' })
  }
});

app.post('/send/message/simple', async (req, res) => {
  try {
    const { simplemessage } = req.body

    if (!simplemessage) {
      return res
        .status(400)
        .json({ message: 'Missing simplemessage in request body' })
    }

    await telegramBot.callBot(simplemessage)

    res.status(200).json({ message: 'Notification sent to Telegram bot.' })
  } catch (error) {
    console.error('❌ Error notifying bot:', err)
    res.status(500).json({ message: 'Internal server error' })
  }
});

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
