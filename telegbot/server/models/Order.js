const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  checkout_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Checkout',
    required: true
  },
})

module.exports = mongoose.model('Order', OrderSchema)
