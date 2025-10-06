import mongoose from 'mongoose'

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

mongoose
  .connect(process.env.MONGO_URL, { 
    useNewUrlParser: true
    //useUnifiedTopology: true
  })
  .then(() => {
    console.log(`database connection on ${process.env.MONGO_URL}`); 
    // dropIndex('filepath_1');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error)
  });

require('../models/Product');
require('../models/ProductVariant');
require('../models/Admin');
require('../models/Checkout'); 
require('../models/Order');
require('../models/User');
require('../models/UserCart');

export default mongoose;
