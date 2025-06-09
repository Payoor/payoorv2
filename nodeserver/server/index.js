const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const axios = require('axios')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

require('./db')

const { redisClient, connectRedis } = require('./redisconf')

import shopperRoute from './routes/shopper'
import authRoute from './routes/auth'
import adminRoute from './routes/admin'

//import TelegramBotClass from './TelegramBotClass'

const port = process.env.PORT

app.use(express.json())

const errorLogPath = path.join(__dirname, 'error.log')
const telegbotUrl = 'http://telegbot:3001/errorlog'

console.log(errorLogPath)

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
app.use(authRoute);
app.use(adminRoute)

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

  try {
    const response = await axios.post(telegbotUrl, errorMessage, {
      headers: {
        'Content-Type': 'text/plain',
        'X-Error-Timestamp': timestamp
      }
    })

    if (response.status >= 200 && response.status < 300) {
      console.log('Error message sent to telegbot successfully!')
    } else {
      console.error(
        `Failed to send error message to telegbot. Status: ${response.status}, Body: ${response.data}`
      )

      fs.appendFile(errorLogPath, errorMessage, fileErr => {
        if (fileErr) {
          console.error('Failed to write error to fallback log file:', fileErr)
        } else {
          console.log(
            `Error successfully logged to fallback file: ${errorLogPath}`
          )
        }
      })
    }

    const statusCode = 500

    res.status(statusCode).json({
      stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack
    })
  } catch (error) {
    //we'll only save to a file if this fails here
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
