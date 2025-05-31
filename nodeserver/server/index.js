const express = require('express');
const app = express();

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

require('./db');

const { redisClient, connectRedis } = require('./redisconf');

const shopperRoute = require('./routes/shopper');
const authRoute = require('./routes/auth');
const adminRoute = require('./routes/admin');

const port = process.env.PORT;

app.use(express.json());

app.get('/', async (req, res) => {
  console.log('✅ GET / hit');
  res.status(200).json({
    message: 'server is up and running here now',
  });
});

app.use(shopperRoute);
app.use(authRoute);
app.use(adminRoute);

async function startServer() {
  try {
    await connectRedis(); // ensures Redis is connected BEFORE usage
    console.log('🚀 Connected to Redis');

    app.listen(port, () => {
      console.log(`✅ Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('❌ Failed to connect to Redis:', error);
    process.exit(1);
  }
}

startServer();
