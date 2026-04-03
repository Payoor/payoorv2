"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _mongoose = _interopRequireDefault(require("mongoose"));
const ProductVariantSchema = new _mongoose.default.Schema({
  productId: {
    type: _mongoose.default.Schema.Types.ObjectId,
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
    enum: ['YES', 'NO'],
    default: 'YES'
  }
}, {
  timestamps: true,
  collection: 'productvariants'
});
const ProductVariant = _mongoose.default.model('ProductVariant', ProductVariantSchema);
module.exports = ProductVariant;

/*Example: For your variantsCollection.find({ productId: productId }), 
ensuring productId is indexed on the productvariants collection is paramount.*/