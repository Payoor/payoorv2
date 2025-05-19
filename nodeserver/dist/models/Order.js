"use strict";

var mongoose = require('mongoose');
var OrderSchema = new mongoose.Schema({
  checkout_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Checkout',
    required: true
  }
});
module.exports = mongoose.model('Order', OrderSchema);