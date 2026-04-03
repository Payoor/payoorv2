"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
const ProductSchema = new _mongoose.default.Schema({
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
    default: []
  },
  synced_to_algolia: {
    type: Boolean,
    default: false
  },
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  variantCount: {
    type: Number,
    default: 0,
    min: 0
  },
  metadata: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true,
    default: ''
  },
  // Array of ObjectIds referencing the 'Category' model
  categories: [{
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: 'Category'
  }]
}, {
  timestamps: true,
  collection: 'newproducts'
});
const Product = _mongoose.default.model('Product', ProductSchema);
var _default = exports.default = Product;