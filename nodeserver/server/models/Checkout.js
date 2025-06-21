const mongoose = require('mongoose')

const DeliveryDateSchema = new mongoose.Schema(
  {
    day: String,
    date: Number,
    month: String,
    dateid: Number
  },
  { _id: false }
)

const CheckoutSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  delivery_address: {
    type: String,
    required: true
  },
  discount_applied: {
    type: {
      coupon_code: {
        type: String,
        default: null
      },
      coupon_type: {
        type: String,
        default: null
      },
      percentage: {
        type: Number,
        default: null
      },
      flat: {
        type: Number,
        default: null
      },
      freeDelivery: {
        type: Boolean,
        default: false
      }
    },
    required: false
  },
  delivery_date: {
    type: DeliveryDateSchema,
    required: true
  },
  delivery_instruction: {
    type: String,
    default: ''
  },
  promo_code_type: {
    type: String,
    default: ''
  },
  promo_code: {
    type: String,
    default: ''
  },
  phone_number: {
    type: String,
    default: ''
  },
  cart_items: {
    type: Map,
    of: Number,
    required: true
  },
  subtotal: {
    type: Number,
    required: true
  },
  delivery_fee: {
    type: Number,
    required: true
  },
  service_charge: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Checkout', CheckoutSchema)
