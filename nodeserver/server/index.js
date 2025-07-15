const express = require('express')
const app = express()
const fs = require('fs')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

require('./db')

//import { runKafka } from './services/kafka-service'

import authRoute from './routes/auth'
import shopperRoute from './routes/shopper'
import adminRoute from './routes/admin'

//import checkoutServiceRoute from './services/checkout-service/routes'

import handleError from './handleError'
import telegramBotErrorLogger from './telegramBotErrorLogger'
import redisManager from './RedisManager'

const port = process.env.PORT

app.use(express.json())

app.get('/health', async (req, res, next) => {
  try {
    console.log('✅ GET /health hit')
    res.status(200).json({
      message: 'server is up and running here now'
    })
  } catch (error) {
    next(error)
  }
})

app.use(shopperRoute)
app.use(authRoute)
app.use(adminRoute)

//app.use(checkoutServiceRoute)

app.use(async (err, req, res, next) => {
  const timestamp = new Date().toISOString()

  const errorMessage =
    `Error Details:\n` +
    `Timestamp: ${timestamp}\n` +
    `Request Method: ${req.method}\n` +
    `Request URL: ${req.originalUrl}\n` +
    `Error Message: ${err.message}\n` +
    `Stack Trace:\n${err.stack}\n\n` +
    `--- End of Error ---\n\n`

  const errMessageVal = err.message

  const errorDetails = handleError(errorMessage, errMessageVal)

  //console.log(errorDetails)
  const { userMessage, statusCode } = errorDetails

  telegramBotErrorLogger(userMessage)

  res.status(statusCode).json({
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
    userMessage
  })
})

async function startServer () {
  let server

  const shutdown = async signal => {
    console.log(`\n${signal} received: Shutting down server gracefully...`)

    if (server) {
      server.close(async () => {
        console.log('Express server closed.')
        await redisManager.disconnectRedis()
        console.log('Redis disconnected. Exiting process.')
        process.exit(0)
      })
    } else {
      console.log('Server not running, disconnecting Redis and exiting.')
      await redisManager.disconnectRedis()
      process.exit(0)
    }
  }

  try {
    await redisManager.connectRedis()

   // runKafka()
    console.log('Redis connected successfully!')

    server = app.listen(port, () => {
      console.log(`✅ Server is running on port ${port}`)
      console.log(`Access at http://localhost:${port}`)
    })

    process.on('SIGTERM', () => shutdown('SIGTERM'))
    process.on('SIGINT', () => shutdown('SIGINT'))

    process.on('unhandledRejection', (reason, promise) => {
      console.error('Unhandled Rejection at:', promise, 'reason:', reason)
    })

    process.on('uncaughtException', err => {
      console.error('Uncaught Exception:', err)
      shutdown('UncaughtException')
    })
  } catch (error) {
    console.error('❌ Failed to connect to Redis and start application:', error)
    process.exit(1)
  }
}

startServer()
