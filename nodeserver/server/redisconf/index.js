const redis = require('redis')

const redisClient = redis.createClient({
  url: process.env.REDIS_URL,
  database: 0
})

let isConnected = false

async function connectRedis () {
  if (!isConnected) {
    try {
      console.log('🔌 Connecting to Redis...')
      await redisClient.connect()
      isConnected = true
      console.log('✅ Connected to Redis')
    } catch (err) {
      console.error('❌ Failed to connect to Redis:', err)
      throw err
    }
  }
}

// Event listeners for better visibility
redisClient.on('connect', () => {
  console.log('✅ Redis client connected')
})

redisClient.on('ready', () => {
  console.log('✅ Redis client is ready')
})

redisClient.on('reconnecting', () => {
  console.log('🔄 Redis client reconnecting...')
})

redisClient.on('error', err => {
  console.error('❌ Redis Client Error:', err)
})

module.exports = { redisClient, connectRedis }

//docker exec -it b3e983938e8a bash
//ps aux | grep node
