"use strict";

var mongoose = require('mongoose');
var DeliveryDateSchema = new mongoose.Schema({
  day: String,
  date: Number,
  month: String,
  id: Number
}, {
  _id: false
});
var CheckoutSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  delivery_address: {
    type: String,
    required: true
  },
  delivery_date: {
    type: DeliveryDateSchema,
    required: true
  },
  delivery_instruction: {
    type: String,
    "default": ''
  },
  promo_code: {
    type: String,
    "default": ''
  },
  cart_items: {
    type: Map,
    of: Number,
    required: true
  },
  subtotal: {
    type: Number,
    required: true
  },
  delivery_fee: {
    type: Number,
    required: true
  },
  service_charge: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  created_at: {
    type: Date,
    "default": Date.now
  }
});
module.exports = mongoose.model('Checkout', CheckoutSchema);