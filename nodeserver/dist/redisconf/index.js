"use strict";

var Redis = require('ioredis');
var redisClient = new Redis({
  port: 6379,
  // Redis port
  host: "redisdb",
  // Redis host
  //username: 'default', // needs Redis >= 6
  //password: 'my-top-secret',
  db: 0
});

/*const redisClient = redis.createClient({
  url: process.env.REDIS_URL,
  database: 0
})*/

/*let isConnected = false

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
} */

// Event listeners for better visibility
redisClient.on('connect', function () {
  console.log('✅ Redis client connected');
});
redisClient.on('ready', function () {
  console.log('✅ Redis client is ready');
});
redisClient.on('reconnecting', function () {
  console.log('🔄 Redis client reconnecting...');
});
redisClient.on('error', function (err) {
  console.error('❌ Redis Client Error:', err);
});
module.exports = {
  redisClient: redisClient
};

//docker exec -it b3e983938e8a bash
//ps aux | grep node