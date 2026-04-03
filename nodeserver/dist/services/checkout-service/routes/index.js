"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _authMiddleware = _interopRequireDefault(require("../../../middleware/authMiddleware"));
var _ProductVariant = _interopRequireDefault(require("../../../models/ProductVariant"));
var _Checkout = _interopRequireDefault(require("../../../models/Checkout"));
var _RedisManager = _interopRequireDefault(require("../../../RedisManager"));
const router = (0, _express.default)();
router.post('/checkout-service/create/checkout', _authMiddleware.default, async (req, res, next) => {
  const userId = req.userId;
  if (!userId) {
    return res.status(401).json({
      userMessage: 'Authentication required: User ID not found.'
    });
  }
  const {
    items
  } = req.body;
  if (!items || Object.keys(items).length === 0) {
    return res.status(400).json({
      userMessage: 'No items provided in the request body.'
    });
  }
  const productIds = Object.keys(items);
  const objectIdProductIds = productIds.map(id => new _mongoose.default.Types.ObjectId(id));
  const productVariants = await _ProductVariant.default.find({
    _id: {
      $in: objectIdProductIds
    }
  }).select('price');
  const productPriceMap = new Map();
  productVariants.forEach(variant => {
    productPriceMap.set(variant._id.toString(), {
      price: Number(variant.price),
      amount: Number(items[variant._id.toString()])
    });
  });
  console.log(productPriceMap);
  let subTotal = Array.from(productPriceMap.values()).reduce((accumulator, item) => {
    return accumulator + item.price * item.amount;
  }, 0);
  subTotal = Number(subTotal);
  const [rawDeliveryFee, rawServiceCharge] = await Promise.all([_RedisManager.default.hget('admindirective', 'deliveryfee'), _RedisManager.default.hget('admindirective', 'servicecharge')
  //Checkout.findOne({ user_id: userId }).sort({ created_at: -1 }).lean()
  ]);
  const deliveryDates = getNext7Days();
  const delivery_fee = parseFloat(rawDeliveryFee) || 0;
  const service_charge = parseFloat(rawServiceCharge) || 0;
  const serviceCharge = subTotal * service_charge / 100;
  const finalTotal = delivery_fee + serviceCharge + subTotal;
  const delivery_date = deliveryDates[2];
  const phone_number = '0';
  const delivery_address = 'add a valid address';
  const roundedFinalTotal = Math.round(finalTotal);
  console.log(roundedFinalTotal, finalTotal, 'roundedFinalTotal');
  const newCheckoutDocument = new _Checkout.default({
    user_id: new _mongoose.default.Types.ObjectId(userId),
    delivery_address,
    delivery_fee,
    service_charge: serviceCharge,
    phone_number,
    subtotal: subTotal,
    delivery_date,
    total: roundedFinalTotal,
    cart_items: items
  });
  await newCheckoutDocument.save();
});
function getNext7Days() {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const result = [];
  const now = new Date();
  const startOffset = now.getHours() >= 17 ? 1 : 0;
  for (let i = 0; i < 7; i++) {
    const currentDate = new Date();
    currentDate.setDate(now.getDate() + startOffset + i);
    result.push({
      dateid: i,
      day: daysOfWeek[currentDate.getDay()],
      date: currentDate.getDate(),
      month: monthsOfYear[currentDate.getMonth()]
    });
  }
  return result;
}
var _default = exports.default = router;