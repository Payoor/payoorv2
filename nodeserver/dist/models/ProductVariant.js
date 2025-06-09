"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ProductVariantSchema = new _mongoose["default"].Schema({
  productId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  image: {
    type: String,
    required: true
  },
  unit: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  availability: {
    type: String,
    "enum": ['YES', 'NO'],
    "default": 'YES'
  }
}, {
  timestamps: true,
  collection: 'productvariants'
});
var ProductVariant = _mongoose["default"].model('ProductVariant', ProductVariantSchema);
module.exports = ProductVariant;