const express = require('express')
const http = require('http')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

import './db'

const app = express()
const port = process.env.PORT

app.use(express.json())

app.get('/', async (req, res) => {
  console.log('✅ GET / hit')

  res.status(200).json({
    message: 'server is up and running here now'
  })
})

async function startServer () {
  try {
    const server = http.createServer(app)

    server.listen(port, () => {
      console.log(`Server is running on port ${port}`)
    })

    // Optional: attach event handlers to server
    server.on('error', err => {
      console.error('Server error:', err)
      process.exit(1)
    })
  } catch (error) {
    console.error('Failed to start server:', error)
    process.exit(1)
  }
}

startServer()
