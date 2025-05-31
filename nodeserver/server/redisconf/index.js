const redis = require('redis');

export const redisClient = redis.createClient({
    url: process.env.REDIS_URL,
    database: 0,
});

redisClient.on('connect', () => {
    console.log('Redis client connected');
});

redisClient.on('ready', () => {
    console.log('Redis client is ready');
});

redisClient.on('reconnecting', () => {
    console.log('Redis client reconnecting');
});

redisClient.on('error', (err) => {
    console.error('Redis Client Error:', err);
});

//docker exec -it b3e983938e8a bash
//ps aux | grep node
