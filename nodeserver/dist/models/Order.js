"use strict";

var mongoose = require('mongoose');
var OrderSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  checkout_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Checkout',
    required: true
  }
}, {
  timestamps: true,
  collection: 'orders'
});
module.exports = mongoose.model('Order', OrderSchema);