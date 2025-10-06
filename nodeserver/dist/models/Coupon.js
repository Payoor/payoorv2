"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var CouponSchema = new _mongoose["default"].Schema({
  // The name for the coupon (e.g., "Welcome Discount", "Holiday Sale")
  name: {
    type: String,
    required: true,
    trim: true
  },
  // The unique, redeemable code for the coupon
  code: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
    trim: true
  },
  // Affiliate key to track who is responsible for this coupon
  affiliateKey: {
    type: String,
    trim: true,
    // Add validation for email format
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
    "default": null
  },
  // The percentage of the order total to be paid to the affiliate
  affiliatePercentage: {
    type: Number,
    min: 0,
    max: 100,
    "default": null
  },
  usageLimit: {
    type: Number,
    min: 1,
    "default": 1
  },
  // The percentage discount value (optional)
  percentageOff: {
    type: Number,
    min: 0,
    max: 100,
    "default": null
  },
  // Flag for free delivery (optional)
  deliveryAmountOff: {
    type: Number,
    min: 0,
    max: 100,
    "default": null
  },
  // Redemption & Usage
  // This field tracks the user who redeems a single-use coupon.
  singleUse: {
    type: String,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
    "default": null
  },
  // The date and time when the coupon expires
  expiresAt: {
    type: Date,
    required: true,
    index: {
      expires: 0
    } // Automatically delete document after expiration
  }

  // Mongoose will automatically manage these fields
}, {
  timestamps: true
});
module.exports = _mongoose["default"].model('Coupon', CouponSchema);