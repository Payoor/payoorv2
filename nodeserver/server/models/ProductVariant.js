import mongoose from 'mongoose'

const ProductVariantSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
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
  },
  {
    timestamps: true,
    collection: 'productvariants'
  }
)

const ProductVariant = mongoose.model('ProductVariant', ProductVariantSchema)

module.exports = ProductVariant
