"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _nodeCron = _interopRequireDefault(require("node-cron"));
var _updateProductsVariantCounts = _interopRequireDefault(require("./utils/updateProductsVariantCounts.js"));
var _auth = _interopRequireDefault(require("./routes/auth"));
var _shopper = _interopRequireDefault(require("./routes/shopper"));
var _admin = _interopRequireDefault(require("./routes/admin"));
var _handleError = _interopRequireDefault(require("./handleError"));
var _telegramBotErrorLogger = _interopRequireDefault(require("./telegramBotErrorLogger"));
var _RedisManager = _interopRequireDefault(require("./RedisManager"));
const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');
//import { connectProducer } from './kafkaclient/producer.js'

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
  const allowedOrigins = ['http://localhost:3000', 'http://localhost:8082', 'https://byo3w5nm4wfv.shares.zrok.io'];
  app.use(cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error('Not allowed by CORS'));
    },
    credentials: true
  }));
}
require('./db');
//import { runKafka } from './services/kafka-service'

//import checkoutServiceRoute from './services/checkout-service/routes'

const port = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.get('/health', async (req, res, next) => {
  try {
    console.log('✅ GET /health hit');
    res.status(200).json({
      message: 'server is up and running here now'
    });
  } catch (error) {
    next(error);
  }
});
app.use(_shopper.default);
app.use(_auth.default);
app.use(_admin.default);

//app.use(checkoutServiceRoute)

app.use(async (err, req, res, next) => {
  const timestamp = new Date().toISOString();
  const errorMessage = `Error Details:\n` + `Timestamp: ${timestamp}\n` + `Request Method: ${req.method}\n` + `Request URL: ${req.originalUrl}\n` + `Error Message: ${err.message}\n` + `Stack Trace:\n${err.stack}\n\n` + `--- End of Error ---\n\n`;
  const errMessageVal = err.message;
  const errorDetails = (0, _handleError.default)(errorMessage, errMessageVal);

  //console.log(errorDetails)
  const {
    userMessage,
    statusCode
  } = errorDetails;
  (0, _telegramBotErrorLogger.default)(userMessage);
  res.status(statusCode).json({
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
    userMessage
  });
});
console.log(process.env.LEADER, typeof process.env.LEADER);
if (process.env.LEADER === 'true') {
  ;
  (async () => {
    try {
      console.log('[CRON] Updating product variant counts...');
      // const result = await updateProductsVariantCounts()
      //console.log(`[CRON] Updated ${result.updated} products`)
    } catch (err) {
      console.error('[CRON] Error updating product variant counts', err);
    }
  })();
}
console.log('help');
/*if (process.env.LEADER === 'true') {
  ;(async () => {
    try {
      console.log('[CRON] Updating product variant counts...')
      const result = await updateProductsVariantCounts()
      console.log(`[CRON] Updated ${result.updated} products`)
    } catch (err) {
      console.error('[CRON] Error updating product variant counts', err)
    }
  })()

  cron.schedule('0 2 * * *', async () => {
    try {
      console.log('[CRON] Updating product variant counts...')
      const res = await updateProductsVariantCounts()
      console.log(`[CRON] Updated ${res.updated} products`)
    } catch (err) {
      console.error('[CRON] Error updating product variant counts', err)
    }
  })
}*/

//68e072dc4afc53be4ff1d94d

async function startServer() {
  let server;
  const shutdown = async signal => {
    console.log(`\n${signal} received: Shutting down server gracefully...`);
    if (server) {
      server.close(async () => {
        console.log('Express server closed.');
        await _RedisManager.default.disconnectRedis();
        console.log('Redis disconnected. Exiting process.');
        process.exit(0);
      });
    } else {
      console.log('Server not running, disconnecting Redis and exiting.');
      await _RedisManager.default.disconnectRedis();
      process.exit(0);
    }
  };
  try {
    await _RedisManager.default.connectRedis();

    // runKafka()
    console.log('Redis connected successfully!');
    server = app.listen(port, async () => {
      // await connectProducer()
      console.log(`✅ Server is running on port ${port}`);
      console.log(`Access at http://localhost:${port}`);
    });
    process.on('SIGTERM', () => shutdown('SIGTERM'));
    process.on('SIGINT', () => shutdown('SIGINT'));
    process.on('unhandledRejection', (reason, promise) => {
      console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    });
    process.on('uncaughtException', err => {
      console.error('Uncaught Exception:', err);
      shutdown('UncaughtException');
    });
  } catch (error) {
    console.error('❌ Failed to connect to Redis and start application:', error);
    process.exit(1);
  }
}
startServer();