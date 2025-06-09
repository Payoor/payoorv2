import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema(
  {
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
    }
  },
  {
    timestamps: true,
    collection: 'newproducts'
  }
)

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product
