"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
var _Category = _interopRequireDefault(require("./Category"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ProductSchema = new _mongoose["default"].Schema({
  image: {
    type: String,
    required: true
  },
  generatedDescription: {
    type: String,
    // required: true,
    trim: true
  },
  generatedCategories: {
    type: [String],
    "default": []
  },
  synced_to_algolia: {
    type: Boolean,
    "default": false
  },
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  variantCount: {
    type: Number,
    "default": 0,
    min: 0
  },
  metadata: {
    type: String,
    trim: true
  },
  // Array of ObjectIds referencing the 'Category' model
  categories: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Category'
  }]
}, {
  timestamps: true,
  collection: 'newproducts'
});
var Product = _mongoose["default"].model('Product', ProductSchema);
module.exports = Product;