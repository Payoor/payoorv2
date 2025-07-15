"use strict";

var mongoose = require('mongoose');
var CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Category name is required'],
    unique: true,
    trim: true,
    minlength: [2, 'Category name must be at least 2 characters long']
  },
  description: {
    type: String,
    required: [true, 'Category description is required'],
    trim: true,
    minlength: [5, 'Category description must be at least 5 characters long']
  },
  image: {
    type: String,
    required: [true, 'Category image URL is required'],
    trim: true
  },
  hexcolor: {
    type: String,
    trim: true,
    required: [true, 'Hexcolor is required']
  }
}, {
  timestamps: true
});
var Category = mongoose.model('Category', CategorySchema);
module.exports = Category;