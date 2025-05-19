const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
  checkout_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Checkout',
    required: true
  }
})

module.exports = mongoose.model('Order', OrderSchema)
