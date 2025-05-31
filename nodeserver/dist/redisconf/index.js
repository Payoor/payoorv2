"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.redisClient = void 0;
var redis = require('redis');
var redisClient = exports.redisClient = redis.createClient({
  url: process.env.REDIS_URL,
  database: 0
});
redisClient.on('connect', function () {
  console.log('Redis client connected');
});
redisClient.on('ready', function () {
  console.log('Redis client is ready');
});
redisClient.on('reconnecting', function () {
  console.log('Redis client reconnecting');
});
redisClient.on('error', function (err) {
  console.error('Redis Client Error:', err);
});

//docker exec -it b3e983938e8a bash
//ps aux | grep node