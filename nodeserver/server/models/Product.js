import mongoose from 'mongoose'

import Category from './Category'

const ProductSchema = new mongoose.Schema(
  {
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
    // Array of ObjectIds referencing the 'Category' model
    categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
      }
    ]
  },
  {
    timestamps: true,
    collection: 'newproducts'
  }
)

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product
