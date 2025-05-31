const express = require('express')
const app = express()

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

import './db'

import { redisClient } from './redisconf'

import shopperRoute from './routes/shopper'
import authRoute from './routes/auth';
import adminRoute from './routes/admin';

const port = process.env.PORT

app.use(express.json())

app.get('/', async (req, res) => {
  console.log('✅ GET / hit');
  
  res.status(200).json({
    message: 'server is up and running here now'
  })
})

app.use(shopperRoute);
app.use(authRoute);
app.use(adminRoute);

async function startServer () {
  try {
    await redisClient.connect()
    console.log('Connected to Redis')

    app.listen(port, () => {
      console.log(`Server is running on ${port}`)
    })

    
  } catch (error) {
    console.error('Failed to connect to Redis:', error)
    process.exit(1) // exit process on failure
  }
}

startServer()
