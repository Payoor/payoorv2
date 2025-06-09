"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ProductSchema = new _mongoose["default"].Schema({
  image: {
    type: String,
    required: true
  },
  generatedDescription: {
    type: String,
    required: true,
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
  }
}, {
  timestamps: true,
  collection: 'newproducts'
});
var Product = _mongoose["default"].model('Product', ProductSchema);
var _default = exports["default"] = Product;