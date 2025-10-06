"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _express = _interopRequireDefault(require("express"));
var _https = _interopRequireDefault(require("https"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _multer = _interopRequireDefault(require("multer"));
var _fs = _interopRequireDefault(require("fs"));
var _ElasticSearchClass = _interopRequireDefault(require("../controllers/ElasticSearchClass"));
var _Order = _interopRequireDefault(require("../models/Order"));
var _Admin = _interopRequireDefault(require("../models/Admin.js"));
var _Checkout = _interopRequireDefault(require("../models/Checkout.js"));
var _Product = _interopRequireDefault(require("../models/Product.js"));
var _ProductVariant = _interopRequireDefault(require("../models/ProductVariant"));
var _Category = _interopRequireDefault(require("../models/Category.js"));
var _Coupon = _interopRequireDefault(require("../models/Coupon.js"));
var _payoordb = _interopRequireDefault(require("../payoordb"));
var _orderconfirmEmail = _interopRequireDefault(require("../utils/orderconfirmEmail"));
var _process = require("process");
var _excluded = ["_id", "__v"],
  _excluded2 = ["_id", "__v"],
  _excluded3 = ["_id"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var axios = require('axios');
var ELASTIC_URL = process.env.ELASTICSEARCHURL;
var elasticSearchCl = new _ElasticSearchClass["default"]();

//import { product_variant_added } from '../kafkaclient/topics.js'
//import { sendMessage } from '../kafkaclient/producer.js'

var _require = require('@aws-sdk/client-s3'),
  S3Client = _require.S3Client,
  PutObjectCommand = _require.PutObjectCommand,
  DeleteObjectCommand = _require.DeleteObjectCommand;
var crypto = require('crypto');

//import '../scripts/createCoupons.js'

var ObjectId = _mongoose["default"].Types.ObjectId;
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
var adminRoute = (0, _express["default"])();
function uploadFileWithMulter() {
  var storagepath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  if (!storagepath) {
    // Use memory storage if no path provided
    return (0, _multer["default"])({
      storage: _multer["default"].memoryStorage()
    });
  }
  var storage = _multer["default"].diskStorage({
    destination: function destination(req, file, cb) {
      if (!_fs["default"].existsSync(storagepath)) {
        _fs["default"].mkdirSync(storagepath, {
          recursive: true
        });
      }
      cb(null, storagepath);
    },
    filename: function filename(req, file, cb) {
      cb(null, "".concat(Date.now(), "-").concat(file.originalname));
    }
  });
  return (0, _multer["default"])({
    storage: storage
  });
}
function verifyAdminToken(req, res, next) {
  var authHeader = req.headers.authorization;
  var token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

  if (!token) {
    return res.status(401).json({
      error: 'Access token missing'
    });
  }
  try {
    var decoded = _jsonwebtoken["default"].verify(token, process.env.JWT_SECRET);
    req.admin = decoded; // attach admin info to request if needed
    next();
  } catch (err) {
    return res.status(403).json({
      error: 'Invalid or expired token'
    });
  }
}

/*adminRoute.use((req, res, next) => {
  if (
    [
      '/admin/login',
      '/admin/register',
      '/admin/orders/reference',
      '/admin/checkout',
      '/admin/getoption',
      '/admin/paystack/payment-response'
    ].includes(req.path)
  )
    return next()
  return verifyAdminToken(req, res, next)
})*/

var s3Client = new S3Client({
  region: process.env.AWSS3REGION,
  credentials: {
    accessKeyId: process.env.AWSACCESSKEY,
    secretAccessKey: process.env.AWSSECRETACCESSKEY
  }
});
adminRoute.post('/admin/paystack/payment-response/development', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res, next) {
    var checkout_id, newOrder;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          checkout_id = req.query.checkout_id;
          if (!(!checkout_id || checkout_id === 'undefined')) {
            _context.next = 4;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            error: 'Bad request'
          }));
        case 4:
          newOrder = new _Order["default"]({
            checkout_id: checkout_id
          });
          _context.next = 7;
          return newOrder.save();
        case 7:
          return _context.abrupt("return", res.sendStatus(200));
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          next(_context.t0);
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
adminRoute.get('/admin/orders/reference', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res, next) {
    var _order$checkout_id$ca, _order$checkout_id$ca2, referenceId, order, cartItems, variantIds, variantsCollection, productCollection, variants, productIds, products, productMap, _iterator, _step, product, enrichedCart;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          referenceId = req.query.referenceId;
          if (!(!referenceId || referenceId === 'undefined')) {
            _context2.next = 4;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            error: 'Bad request'
          }));
        case 4:
          _context2.next = 6;
          return _Order["default"].findOne({
            _id: referenceId
          }).populate('checkout_id');
        case 6:
          order = _context2.sent;
          if (order) {
            _context2.next = 9;
            break;
          }
          return _context2.abrupt("return", res.status(404).json({
            error: 'Order not found'
          }));
        case 9:
          cartItems = order.checkout_id.cart_items instanceof Map ? Object.fromEntries(order.checkout_id.cart_items) : ((_order$checkout_id$ca = (_order$checkout_id$ca2 = order.checkout_id.cart_items).toObject) === null || _order$checkout_id$ca === void 0 ? void 0 : _order$checkout_id$ca.call(_order$checkout_id$ca2)) || order.checkout_id.cart_items;
          variantIds = Object.keys(cartItems).map(function (id) {
            return new ObjectId(id);
          });
          variantsCollection = _payoordb["default"].db.collection('productvariants');
          productCollection = _payoordb["default"].db.collection('newproducts');
          _context2.next = 15;
          return variantsCollection.find({
            _id: {
              $in: variantIds
            }
          }).toArray();
        case 15:
          variants = _context2.sent;
          productIds = variants.map(function (v) {
            return v.productId;
          });
          _context2.next = 19;
          return productCollection.find({
            _id: {
              $in: productIds
            }
          }).toArray();
        case 19:
          products = _context2.sent;
          productMap = {};
          _iterator = _createForOfIteratorHelper(products);
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              product = _step.value;
              productMap[product._id.toString()] = product;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          enrichedCart = variants.map(function (variant) {
            return _objectSpread(_objectSpread({}, variant), {}, {
              product: productMap[variant.productId.toString()],
              quantity: cartItems[variant._id.toString()]
            });
          });
          return _context2.abrupt("return", res.status(200).json({
            message: 'Order with enriched cart and product details',
            order: order,
            cart: enrichedCart,
            phone_number: order.checkout_id.phone_number || null
          }));
        case 27:
          _context2.prev = 27;
          _context2.t0 = _context2["catch"](0);
          next(_context2.t0);
        case 30:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 27]]);
  }));
  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}());
adminRoute.post('/admin/paystack/payment-response', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res, next) {
    var signature, computedHash, _req$body, event, data, metadata, checkoutId, userId, newOrder, telegbotUrl;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          signature = req.headers['x-paystack-signature'];
          computedHash = crypto.createHmac('sha512', process.env.PAYSTACK_SECRET_KEY).update(JSON.stringify(req.body)).digest('hex');
          if (!(computedHash !== signature)) {
            _context3.next = 5;
            break;
          }
          return _context3.abrupt("return", res.status(401).json({
            message: 'Unauthorized'
          }));
        case 5:
          _req$body = req.body, event = _req$body.event, data = _req$body.data;
          if (!(event === 'charge.success')) {
            _context3.next = 18;
            break;
          }
          metadata = data.metadata;
          checkoutId = metadata.checkoutId, userId = metadata.userId;
          newOrder = new _Order["default"]({
            user_id: userId,
            checkout_id: checkoutId
          });
          _context3.next = 12;
          return newOrder.save();
        case 12:
          _context3.next = 14;
          return (0, _orderconfirmEmail["default"])(userId, "".concat(process.env.PAYOOR_URL, "/userorder/").concat(newOrder._id));
        case 14:
          /*telegramBot.callBot(
            `new order ${process.env.PAYOOR_URL}/admin/order?reference=${newOrder._id}`
          )*/
          telegbotUrl = 'http://telegbot:3001/neworder';
          _context3.next = 17;
          return axios.post(telegbotUrl, {
            orderId: newOrder._id
          });
        case 17:
          return _context3.abrupt("return", res.sendStatus(200));
        case 18:
          return _context3.abrupt("return", res.sendStatus(200));
        case 21:
          _context3.prev = 21;
          _context3.t0 = _context3["catch"](0);
          next(_context3.t0);
        case 24:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 21]]);
  }));
  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}());
adminRoute.post('/bani/webhook/payment-response', /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res, next) {
    var merchant_private_key, headers, webhookData, sig, hmac, bodyForHmac, digest, _webhookData$data$cus, checkoutId, userId, paymentStatus, telegbotUrl, newOrder, orderIdentifier;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          merchant_private_key = process.env.MERCHANT_PRIVATE_KEY_BANI;
          headers = req.headers;
          webhookData = req.body;
          if (webhookData) {
            _context4.next = 6;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            status: false,
            message: 'No body provided or body was empty/invalid'
          }));
        case 6:
          if (headers['bani-hook-signature']) {
            _context4.next = 8;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            status: false,
            message: 'No signature provided'
          }));
        case 8:
          sig = Buffer.from(headers['bani-hook-signature'], 'utf8');
          hmac = crypto.createHmac('sha256', merchant_private_key);
          bodyForHmac = JSON.stringify(webhookData);
          digest = Buffer.from(hmac.update(bodyForHmac).digest('hex'), 'utf8');
          /*if (sig.length !== digest.length || !crypto.timingSafeEqual(digest, sig)) {
            return res
              .status(401)
              .json({ status: false, message: 'Invalid signature' })
          }*/
          _webhookData$data$cus = webhookData.data.custom_data, checkoutId = _webhookData$data$cus.checkoutId, userId = _webhookData$data$cus.userId;
          paymentStatus = webhookData.data.pay_status;
          /* console.log(webhookData, 'check here for bani')
          console.log(headers, 'check headers for bani')
          console.log(
            webhookData.data.custom_data,
            'this is a test hewre',
            paymentStatus
          )*/
          telegbotUrl = 'http://telegbot:3001/neworder'; //const telegbotSimpleMsgUrl = 'http://telegbot:3001/send/message/simple'
          //const debugOrderMessage = `${checkoutId}, ${userId}, order confirmation`
          /*await axios.post(telegbotSimpleMsgUrl, {
            simplemessage: debugOrderMessage
          })*/
          if (!(paymentStatus === 'paid')) {
            _context4.next = 26;
            break;
          }
          newOrder = new _Order["default"]({
            user_id: userId,
            checkout_id: checkoutId
          });
          _context4.next = 19;
          return newOrder.save();
        case 19:
          _context4.next = 21;
          return (0, _orderconfirmEmail["default"])(userId, "".concat(process.env.PAYOOR_URL, "/userorder/").concat(newOrder._id));
        case 21:
          _context4.next = 23;
          return axios.post(telegbotUrl, {
            orderId: newOrder._id
          });
        case 23:
          return _context4.abrupt("return", res.sendStatus(200));
        case 26:
          orderIdentifier = checkoutId || 'N/A';
          return _context4.abrupt("return", res.status(200).json({
            status: true,
            message: "Webhook received for status: ".concat(paymentStatus, " for order: ").concat(orderIdentifier)
          }));
        case 28:
          _context4.next = 35;
          break;
        case 30:
          _context4.prev = 30;
          _context4.t0 = _context4["catch"](0);
          console.error('Webhook processing error:', _context4.t0);
          res.status(500).json({
            status: false,
            message: 'Internal Server Error'
          });
          next(_context4.t0);
        case 35:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 30]]);
  }));
  return function (_x0, _x1, _x10) {
    return _ref4.apply(this, arguments);
  };
}());
adminRoute.post('/manual-payment-response-trigger', /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res, next) {
    var _req$body2, userId, checkoutId, _req$body2$paymentSta, paymentStatus, simulatedWebhookData, telegbotUrl, newOrder, orderIdentifier;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _req$body2 = req.body, userId = _req$body2.userId, checkoutId = _req$body2.checkoutId, _req$body2$paymentSta = _req$body2.paymentStatus, paymentStatus = _req$body2$paymentSta === void 0 ? 'paid' : _req$body2$paymentSta; // Basic validation for required fields
          if (!(!userId || !checkoutId)) {
            _context5.next = 4;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            status: false,
            message: 'Missing userId or checkoutId in request body.'
          }));
        case 4:
          // Simulate the necessary data structure for the original logic
          // We assume 'paymentStatus' defaults to 'paid' for manual triggers,
          // but you can allow it to be passed in the body if you need to test other statuses.
          simulatedWebhookData = {
            data: {
              custom_data: {
                checkoutId: checkoutId,
                userId: userId
              },
              pay_status: paymentStatus
            }
          };
          telegbotUrl = 'http://telegbot:3001/neworder';
          if (!(simulatedWebhookData.data.pay_status === 'paid')) {
            _context5.next = 18;
            break;
          }
          newOrder = new _Order["default"]({
            user_id: simulatedWebhookData.data.custom_data.userId,
            checkout_id: simulatedWebhookData.data.custom_data.checkoutId
          });
          _context5.next = 10;
          return newOrder.save();
        case 10:
          _context5.next = 12;
          return (0, _orderconfirmEmail["default"])(simulatedWebhookData.data.custom_data.userId, "".concat(process.env.PAYOOR_URL, "/userorder/").concat(newOrder._id));
        case 12:
          _context5.next = 14;
          return axios.post(telegbotUrl, {
            orderId: newOrder._id
          });
        case 14:
          console.log("Manual trigger successful: Order ".concat(newOrder._id, " created for user ").concat(userId, ", checkout ").concat(checkoutId));
          return _context5.abrupt("return", res.status(200).json({
            status: true,
            message: 'Manual payment trigger processed successfully (Order created).',
            orderId: newOrder._id
          }));
        case 18:
          orderIdentifier = simulatedWebhookData.data.custom_data.checkoutId || 'N/A';
          console.log("Manual trigger for status: ".concat(simulatedWebhookData.data.pay_status, " for order: ").concat(orderIdentifier));
          return _context5.abrupt("return", res.status(200).json({
            status: true,
            message: "Manual payment trigger processed for status: ".concat(simulatedWebhookData.data.pay_status, " for order: ").concat(orderIdentifier)
          }));
        case 21:
          _context5.next = 28;
          break;
        case 23:
          _context5.prev = 23;
          _context5.t0 = _context5["catch"](0);
          console.error('Manual payment trigger error:', _context5.t0);
          res.status(500).json({
            status: false,
            message: 'Internal Server Error during manual trigger.'
          });
          next(_context5.t0); // Pass error to Express error handling middleware if configured
        case 28:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 23]]);
  }));
  return function (_x11, _x12, _x13) {
    return _ref5.apply(this, arguments);
  };
}());
adminRoute.post('/admin/register', /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res, next) {
    var creatorpw, _req$body3, email, password, existingAdmin, newAdmin;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          creatorpw = req.query.creatorpw;
          if (!(creatorpw !== process.env.CREATORPR)) {
            _context6.next = 4;
            break;
          }
          return _context6.abrupt("return", res.status(401).json({
            message: 'not allowed'
          }));
        case 4:
          _req$body3 = req.body, email = _req$body3.email, password = _req$body3.password;
          if (!(!email || !password)) {
            _context6.next = 7;
            break;
          }
          return _context6.abrupt("return", res.status(400).json({
            error: 'Email and password are required'
          }));
        case 7:
          _context6.next = 9;
          return _Admin["default"].findOne({
            email: email
          });
        case 9:
          existingAdmin = _context6.sent;
          if (!existingAdmin) {
            _context6.next = 12;
            break;
          }
          return _context6.abrupt("return", res.status(409).json({
            error: 'Admin with this email already exists'
          }));
        case 12:
          newAdmin = new _Admin["default"]({
            email: email,
            password: password
          });
          _context6.next = 15;
          return newAdmin.save();
        case 15:
          res.status(201).json({
            message: 'Admin created successfully'
          });
          _context6.next = 21;
          break;
        case 18:
          _context6.prev = 18;
          _context6.t0 = _context6["catch"](0);
          next(_context6.t0);
        case 21:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 18]]);
  }));
  return function (_x14, _x15, _x16) {
    return _ref6.apply(this, arguments);
  };
}());
adminRoute.post('/admin/login', /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res, next) {
    var _req$body4, email, password, admin, isMatch, token;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _req$body4 = req.body, email = _req$body4.email, password = _req$body4.password;
          if (!(!email || !password)) {
            _context7.next = 4;
            break;
          }
          return _context7.abrupt("return", res.status(400).json({
            error: 'Email and password are required'
          }));
        case 4:
          _context7.next = 6;
          return _Admin["default"].findOne({
            email: email
          });
        case 6:
          admin = _context7.sent;
          if (admin) {
            _context7.next = 9;
            break;
          }
          return _context7.abrupt("return", res.status(404).json({
            error: 'Admin not found'
          }));
        case 9:
          _context7.next = 11;
          return admin.comparePassword(password);
        case 11:
          isMatch = _context7.sent;
          if (isMatch) {
            _context7.next = 14;
            break;
          }
          return _context7.abrupt("return", res.status(401).json({
            error: 'Invalid password'
          }));
        case 14:
          token = _jsonwebtoken["default"].sign({
            id: admin._id,
            email: admin.email
          }, process.env.JWT_SECRET, {
            expiresIn: '7d'
          });
          res.status(200).json({
            message: 'Login successful',
            token: token
          });
          _context7.next = 21;
          break;
        case 18:
          _context7.prev = 18;
          _context7.t0 = _context7["catch"](0);
          next(_context7.t0);
        case 21:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 18]]);
  }));
  return function (_x17, _x18, _x19) {
    return _ref7.apply(this, arguments);
  };
}());
adminRoute.get('/admin/products-with-variants', /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res, next) {
    var page, limit, skip, search, variantsCollection, productCollection, query, totalProducts, products, productIds, variants, variantMap, _iterator2, _step2, variant, key, enrichedProducts;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          page = parseInt(req.query.page) || 1;
          limit = parseInt(req.query.limit) || 10;
          skip = (page - 1) * limit;
          search = req.query.search || '';
          variantsCollection = _payoordb["default"].db.collection('productvariants');
          productCollection = _payoordb["default"].db.collection('newproducts');
          query = search ? {
            name: {
              $regex: new RegExp(search, 'i')
            }
          } // case-insensitive match
          : {};
          _context8.next = 10;
          return productCollection.countDocuments(query);
        case 10:
          totalProducts = _context8.sent;
          _context8.next = 13;
          return productCollection.find(query).skip(skip).limit(limit).toArray();
        case 13:
          products = _context8.sent;
          productIds = products.map(function (p) {
            return p._id;
          });
          _context8.next = 17;
          return variantsCollection.find({
            productId: {
              $in: productIds
            }
          }).toArray();
        case 17:
          variants = _context8.sent;
          variantMap = {};
          _iterator2 = _createForOfIteratorHelper(variants);
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              variant = _step2.value;
              key = variant.productId.toString();
              if (!variantMap[key]) {
                variantMap[key] = [];
              }
              variantMap[key].push(variant);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          enrichedProducts = products.map(function (product) {
            return _objectSpread(_objectSpread({}, product), {}, {
              variants: variantMap[product._id.toString()] || []
            });
          });
          return _context8.abrupt("return", res.status(200).json({
            message: 'Paginated products with variants',
            page: page,
            limit: limit,
            total: totalProducts,
            pages: Math.ceil(totalProducts / limit),
            products: enrichedProducts
          }));
        case 25:
          _context8.prev = 25;
          _context8.t0 = _context8["catch"](0);
          next(_context8.t0);
        case 28:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 25]]);
  }));
  return function (_x20, _x21, _x22) {
    return _ref8.apply(this, arguments);
  };
}());
adminRoute.post('/admin/upload-image', uploadFileWithMulter().single('image'), /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res, next) {
    var file, fileName, uploadParams, command, imageUrl, _req$query, itemId, model, updatedItem;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          if (req.file) {
            _context9.next = 3;
            break;
          }
          return _context9.abrupt("return", res.status(400).json({
            error: 'No file uploaded'
          }));
        case 3:
          file = req.file;
          fileName = generateUniqueFileName(file.originalname);
          uploadParams = {
            Bucket: 'payoorimages',
            Key: "products/".concat(fileName),
            Body: file.buffer,
            ContentType: file.mimetype
          };
          command = new PutObjectCommand(uploadParams);
          _context9.next = 9;
          return s3Client.send(command);
        case 9:
          imageUrl = "https://payoorimages.s3.ap-southeast-2.amazonaws.com/products/".concat(fileName);
          _req$query = req.query, itemId = _req$query.itemId, model = _req$query.model;
          console.log(itemId, model);
          if (!(itemId !== "0")) {
            _context9.next = 31;
            break;
          }
          if (!(model === 'NewProduct')) {
            _context9.next = 20;
            break;
          }
          _context9.next = 16;
          return _Product["default"].findOneAndUpdate({
            _id: itemId
          }, {
            image: imageUrl
          }, {
            "new": true,
            runValidators: true
          });
        case 16:
          updatedItem = _context9.sent;
          if (updatedItem) {
            console.log('Successfully updated product:', updatedItem);
          } else {
            console.log('No product found with ID:', itemId);
          }
          _context9.next = 31;
          break;
        case 20:
          if (!(model === 'ProductVariant')) {
            _context9.next = 27;
            break;
          }
          _context9.next = 23;
          return _ProductVariant["default"].findOneAndUpdate({
            _id: itemId
          }, {
            image: imageUrl
          }, {
            "new": true,
            runValidators: true
          });
        case 23:
          updatedItem = _context9.sent;
          if (updatedItem) {
            console.log('Successfully updated product:', updatedItem);
          } else {
            console.log('No product found with ID:', itemId);
          }
          _context9.next = 31;
          break;
        case 27:
          _context9.next = 29;
          return _Category["default"].findOneAndUpdate({
            _id: itemId
          }, {
            image: imageUrl
          }, {
            "new": true,
            runValidators: true
          });
        case 29:
          updatedItem = _context9.sent;
          if (updatedItem) {
            console.log('Successfully updated product:', updatedItem);
          } else {
            console.log('No product found with ID:', itemId);
          }
        case 31:
          return _context9.abrupt("return", res.status(200).json({
            url: imageUrl,
            updatedItem: updatedItem
          }));
        case 34:
          _context9.prev = 34;
          _context9.t0 = _context9["catch"](0);
          next(_context9.t0);
        case 37:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 34]]);
  }));
  return function (_x23, _x24, _x25) {
    return _ref9.apply(this, arguments);
  };
}());
adminRoute.put('/admin/product/update/description', /*#__PURE__*/function () {
  var _ref0 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee0(req, res) {
    var id, description, updated;
    return _regeneratorRuntime().wrap(function _callee0$(_context0) {
      while (1) switch (_context0.prev = _context0.next) {
        case 0:
          _context0.prev = 0;
          id = req.query.id;
          description = req.body.description;
          if (!(typeof description !== 'string' || description.trim().length === 0)) {
            _context0.next = 5;
            break;
          }
          return _context0.abrupt("return", res.status(400).json({
            ok: false,
            error: 'Description is required'
          }));
        case 5:
          _context0.next = 7;
          return _Product["default"].findByIdAndUpdate(id, {
            $set: {
              description: description.trim()
            }
          }, {
            "new": true
          });
        case 7:
          updated = _context0.sent;
          if (updated) {
            _context0.next = 10;
            break;
          }
          return _context0.abrupt("return", res.status(404).json({
            ok: false,
            error: 'Product not found'
          }));
        case 10:
          return _context0.abrupt("return", res.json({
            ok: true,
            product: updated
          }));
        case 13:
          _context0.prev = 13;
          _context0.t0 = _context0["catch"](0);
          console.error(_context0.t0);
          return _context0.abrupt("return", res.status(500).json({
            ok: false,
            error: 'Internal server error'
          }));
        case 17:
        case "end":
          return _context0.stop();
      }
    }, _callee0, null, [[0, 13]]);
  }));
  return function (_x26, _x27) {
    return _ref0.apply(this, arguments);
  };
}());
adminRoute.get('/admin/product/description', /*#__PURE__*/function () {
  var _ref1 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee1(req, res) {
    var id, product;
    return _regeneratorRuntime().wrap(function _callee1$(_context1) {
      while (1) switch (_context1.prev = _context1.next) {
        case 0:
          _context1.prev = 0;
          id = req.query.id;
          if (id) {
            _context1.next = 4;
            break;
          }
          return _context1.abrupt("return", res.status(400).json({
            ok: false,
            error: 'Product ID is required'
          }));
        case 4:
          _context1.next = 6;
          return _Product["default"].findById(id).select('description');
        case 6:
          product = _context1.sent;
          if (product) {
            _context1.next = 9;
            break;
          }
          return _context1.abrupt("return", res.status(404).json({
            ok: false,
            error: 'Product not found'
          }));
        case 9:
          res.json({
            ok: true,
            description: product.description ? product.description : ''
          });
          _context1.next = 16;
          break;
        case 12:
          _context1.prev = 12;
          _context1.t0 = _context1["catch"](0);
          console.error(_context1.t0);
          res.status(500).json({
            ok: false,
            error: 'Internal server error'
          });
        case 16:
        case "end":
          return _context1.stop();
      }
    }, _callee1, null, [[0, 12]]);
  }));
  return function (_x28, _x29) {
    return _ref1.apply(this, arguments);
  };
}());

/*adminRoute.post('/admin/create-product', async (req, res, next) => {
  try {
    const { name, image, generatedDescription, generatedCategories } = req.body

    if (!name || !image) {
      return res.status(400).json({ error: 'Name and image are required' })
    }

    const newProduct = {
      name,
      image,
      generatedDescription: generatedDescription || '',
      generatedCategories: Array.isArray(generatedCategories)
        ? generatedCategories
        : [],
      synced_to_algolia: false,
      variantCount: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    const productCollection = payoorDBConnection.db.collection('newproducts')
    const result = await productCollection.insertOne(newProduct)
    const product = await productCollection.findOne({ _id: result.insertedId })

    const { _id, __v, ...removeIdField } = product
    const productForIndexing = { _mongooseid: _id, ...removeIdField }

    // Build NDJSON payload for Elasticsearch bulk insert
    const bulkPayload =
      JSON.stringify({ index: { _id: _id.toString() } }) +
      '\n' +
      JSON.stringify(productForIndexing) +
      '\n'

    await axios.post(`${ELASTIC_URL}/products/_bulk?refresh`, bulkPayload, {
      headers: { 'Content-Type': 'application/x-ndjson' }
    })

    return res.status(201).json({ product })
  } catch (error) {
    console.error('Error in create-product:', error)
    next(error)
  }
})*/

adminRoute.post('/admin/create-product', /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res, next) {
    var _searchResponse$data$, _req$body5, name, image, metadata, generatedDescription, generatedCategories, newProduct, productCollection, result, product, _id, __v, removeIdField, productForIndexing, bulkPayload, bulkResponse, failedItems, searchResponse, hits;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _req$body5 = req.body, name = _req$body5.name, image = _req$body5.image, metadata = _req$body5.metadata, generatedDescription = _req$body5.generatedDescription, generatedCategories = _req$body5.generatedCategories;
          if (!(!name || !image)) {
            _context10.next = 4;
            break;
          }
          return _context10.abrupt("return", res.status(400).json({
            error: 'Name and image are required'
          }));
        case 4:
          console.log(req.body, '/admin/create-product');
          newProduct = {
            name: name,
            image: image,
            metadata: metadata,
            generatedDescription: generatedDescription || '',
            generatedCategories: Array.isArray(generatedCategories) ? generatedCategories : [],
            synced_to_algolia: false,
            variantCount: 0,
            createdAt: new Date(),
            updatedAt: new Date()
          };
          productCollection = _payoordb["default"].db.collection('newproducts');
          _context10.next = 9;
          return productCollection.insertOne(newProduct);
        case 9:
          result = _context10.sent;
          _context10.next = 12;
          return productCollection.findOne({
            _id: result.insertedId
          });
        case 12:
          product = _context10.sent;
          _id = product._id, __v = product.__v, removeIdField = _objectWithoutProperties(product, _excluded);
          productForIndexing = _objectSpread({
            _mongooseid: _id.toString()
          }, removeIdField); // NDJSON bulk payload
          bulkPayload = JSON.stringify({
            index: {
              _id: _id.toString()
            }
          }) + '\n' + JSON.stringify(productForIndexing) + '\n'; // Index in Elasticsearch
          _context10.next = 18;
          return axios.post("".concat(ELASTIC_URL, "/products/_bulk?refresh"), bulkPayload, {
            headers: {
              'Content-Type': 'application/x-ndjson'
            }
          });
        case 18:
          bulkResponse = _context10.sent;
          if (bulkResponse.data.errors) {
            failedItems = bulkResponse.data.items.filter(function (item) {
              var _item$index;
              return (_item$index = item.index) === null || _item$index === void 0 ? void 0 : _item$index.error;
            });
            console.error('❌ Bulk insert had errors:', failedItems);
          }

          // Search immediately to verify the product was indexed
          _context10.next = 22;
          return axios.post("".concat(ELASTIC_URL, "/products/_search"), {
            query: {
              match: {
                name: name
              }
            }
          }, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
        case 22:
          searchResponse = _context10.sent;
          hits = ((_searchResponse$data$ = searchResponse.data.hits) === null || _searchResponse$data$ === void 0 ? void 0 : _searchResponse$data$.hits) || []; //console.log(hits, 'these are the hits')
          return _context10.abrupt("return", res.status(201).json({
            message: 'Product created and indexed',
            product: product,
            indexed: hits.length > 0,
            elasticHits: hits.map(function (hit) {
              return hit._source;
            })
          }));
        case 27:
          _context10.prev = 27;
          _context10.t0 = _context10["catch"](0);
          if (_context10.t0.response) {
            console.error('Elasticsearch error:', _context10.t0.response.status, _context10.t0.response.data);
          } else {
            console.error('Unexpected error:', _context10.t0.message);
          }
          next(_context10.t0);
        case 31:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 27]]);
  }));
  return function (_x30, _x31, _x32) {
    return _ref10.apply(this, arguments);
  };
}());
adminRoute.post('/admin/add-variant/:productId', /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res, next) {
    var productId, _req$body6, unit, price, availability, image, variantCollection, productsCollection, result, updateResult, newVariant, mongooseId, variantCount, data;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          productId = new ObjectId(req.params.productId);
          _req$body6 = req.body, unit = _req$body6.unit, price = _req$body6.price, availability = _req$body6.availability, image = _req$body6.image;
          if (!(!unit || !price || !availability || !image)) {
            _context11.next = 5;
            break;
          }
          return _context11.abrupt("return", res.status(400).json({
            error: 'All fields are required'
          }));
        case 5:
          variantCollection = _payoordb["default"].db.collection('productvariants');
          productsCollection = _payoordb["default"].db.collection('newproducts'); // 1️⃣ Insert the new variant
          _context11.next = 9;
          return variantCollection.insertOne({
            productId: productId,
            unit: unit,
            price: price,
            availability: availability,
            image: image,
            createdAt: new Date(),
            updatedAt: new Date()
          });
        case 9:
          result = _context11.sent;
          _context11.next = 12;
          return productsCollection.findOneAndUpdate({
            _id: productId
          }, {
            $inc: {
              variantCount: 1
            },
            $set: {
              updatedAt: new Date()
            }
          }, {
            returnDocument: 'after'
          });
        case 12:
          updateResult = _context11.sent;
          _context11.next = 15;
          return variantCollection.findOne({
            _id: result.insertedId
          });
        case 15:
          newVariant = _context11.sent;
          //console.log(updateResult, 'updateResult')
          mongooseId = updateResult._id;
          variantCount = updateResult.variantCount;
          _context11.next = 20;
          return elasticSearchCl.updateProduct({
            mongooseId: mongooseId,
            variantCount: variantCount
          });
        case 20:
          data = _context11.sent;
          /*sendMessage(product_variant_added, {
            mongooseId,
            variantCount
          })*/

          // 3️⃣ Include the new variantCount in the response
          res.status(201).json({
            variant: newVariant,
            variantCount: updateResult.variantCount
          });
          _context11.next = 27;
          break;
        case 24:
          _context11.prev = 24;
          _context11.t0 = _context11["catch"](0);
          next(_context11.t0);
        case 27:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 24]]);
  }));
  return function (_x33, _x34, _x35) {
    return _ref11.apply(this, arguments);
  };
}());
adminRoute.put('/admin/update-product/:productId', /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res, next) {
    var productId, _req$body7, name, image, metadata, generatedDescription, generatedCategories, synced_to_algolia, updateFields, updatedProduct, _id, __v, removeIdField, productForIndexing;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          productId = new ObjectId(req.params.productId);
          _req$body7 = req.body, name = _req$body7.name, image = _req$body7.image, metadata = _req$body7.metadata, generatedDescription = _req$body7.generatedDescription, generatedCategories = _req$body7.generatedCategories, synced_to_algolia = _req$body7.synced_to_algolia;
          if (!(!name || !Array.isArray(generatedCategories))) {
            _context12.next = 5;
            break;
          }
          return _context12.abrupt("return", res.status(400).json({
            error: 'Invalid input'
          }));
        case 5:
          updateFields = {
            name: name,
            image: image,
            metadata: metadata,
            generatedDescription: generatedDescription,
            generatedCategories: generatedCategories,
            synced_to_algolia: synced_to_algolia,
            updatedAt: new Date()
          };
          _context12.next = 8;
          return _payoordb["default"].db.collection('newproducts').updateOne({
            _id: productId
          }, {
            $set: updateFields
          });
        case 8:
          _context12.next = 10;
          return _payoordb["default"].db.collection('newproducts').findOne({
            _id: productId
          });
        case 10:
          updatedProduct = _context12.sent;
          _id = updatedProduct._id, __v = updatedProduct.__v, removeIdField = _objectWithoutProperties(updatedProduct, _excluded2);
          productForIndexing = _objectSpread({
            _mongooseid: _id
          }, removeIdField);
          _context12.next = 15;
          return axios.post("".concat(ELASTIC_URL, "/products/_doc/") + _id.toString(), productForIndexing, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
        case 15:
          res.status(200).json({
            message: 'Product updated successfully'
          });
          _context12.next = 21;
          break;
        case 18:
          _context12.prev = 18;
          _context12.t0 = _context12["catch"](0);
          next(_context12.t0);
        case 21:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 18]]);
  }));
  return function (_x36, _x37, _x38) {
    return _ref12.apply(this, arguments);
  };
}());
adminRoute.put('/admin/update-variant/:variantId', /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res, next) {
    var variantId, _req$body8, unit, price, availability, image, updateFields, result;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          variantId = new ObjectId(req.params.variantId);
          _req$body8 = req.body, unit = _req$body8.unit, price = _req$body8.price, availability = _req$body8.availability, image = _req$body8.image;
          if (!(!unit || !price || !availability)) {
            _context13.next = 6;
            break;
          }
          console.log('All fields are required');
          return _context13.abrupt("return", res.status(400).json({
            error: 'All fields are required'
          }));
        case 6:
          updateFields = {
            unit: unit,
            price: price,
            availability: availability,
            image: image,
            updatedAt: new Date()
          };
          _context13.next = 9;
          return _payoordb["default"].db.collection('productvariants').updateOne({
            _id: variantId
          }, {
            $set: updateFields
          });
        case 9:
          result = _context13.sent;
          res.status(200).json({
            message: 'Variant updated successfully'
          });
          _context13.next = 16;
          break;
        case 13:
          _context13.prev = 13;
          _context13.t0 = _context13["catch"](0);
          next(_context13.t0);
        case 16:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 13]]);
  }));
  return function (_x39, _x40, _x41) {
    return _ref13.apply(this, arguments);
  };
}());
adminRoute["delete"]('/admin/delete-product/:productId', /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res, next) {
    var productId, elasticDeleteResponse;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          productId = new ObjectId(req.params.productId);
          _context14.next = 4;
          return _payoordb["default"].db.collection('newproducts').deleteOne({
            _id: productId
          });
        case 4:
          _context14.next = 6;
          return _payoordb["default"].db.collection('productvariants').deleteMany({
            productId: productId
          });
        case 6:
          _context14.next = 8;
          return axios["delete"]("".concat(ELASTIC_URL, "/products/_doc/").concat(productId.toString()), {
            headers: {
              'Content-Type': 'application/json'
            }
          });
        case 8:
          elasticDeleteResponse = _context14.sent;
          if (elasticDeleteResponse.status !== 200 && elasticDeleteResponse.status !== 202) {
            console.warn('⚠️ Elasticsearch delete returned unexpected status:', elasticDeleteResponse.status);
          }
          res.status(200).json({
            message: 'Product and its variants deleted successfully from MongoDB and Elasticsearch'
          });
          _context14.next = 17;
          break;
        case 13:
          _context14.prev = 13;
          _context14.t0 = _context14["catch"](0);
          if (_context14.t0.response) {
            console.error('Elasticsearch error:', _context14.t0.response.status, _context14.t0.response.data);
          } else {
            console.error('Unexpected error:', _context14.t0.message);
          }
          next(_context14.t0);
        case 17:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[0, 13]]);
  }));
  return function (_x42, _x43, _x44) {
    return _ref14.apply(this, arguments);
  };
}());

// Server-side route for deleting a variant
adminRoute["delete"]('/admin/delete-variant/:variantId', /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res, next) {
    var variantId, variantCollection, variant, updateResult, mongooseId, variantCount, data;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          variantId = new ObjectId(req.params.variantId);
          variantCollection = _payoordb["default"].db.collection('productvariants');
          _context15.next = 5;
          return variantCollection.findOne({
            _id: variantId
          });
        case 5:
          variant = _context15.sent;
          if (variant) {
            _context15.next = 8;
            break;
          }
          return _context15.abrupt("return", res.status(404).json({
            error: 'Variant not found'
          }));
        case 8:
          _context15.next = 10;
          return variantCollection.deleteOne({
            _id: variantId
          });
        case 10:
          _context15.next = 12;
          return _payoordb["default"].db.collection('newproducts').findOneAndUpdate({
            _id: variant.productId
          }, {
            $inc: {
              variantCount: -1
            },
            $set: {
              updatedAt: new Date()
            }
          }, {
            returnDocument: 'after'
          });
        case 12:
          updateResult = _context15.sent;
          mongooseId = variant.productId;
          variantCount = updateResult.variantCount;
          _context15.next = 17;
          return elasticSearchCl.updateProduct({
            mongooseId: mongooseId,
            variantCount: variantCount
          });
        case 17:
          data = _context15.sent;
          res.status(200).json({
            message: 'Variant deleted successfully'
          });
          _context15.next = 24;
          break;
        case 21:
          _context15.prev = 21;
          _context15.t0 = _context15["catch"](0);
          next(_context15.t0);
        case 24:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[0, 21]]);
  }));
  return function (_x45, _x46, _x47) {
    return _ref15.apply(this, arguments);
  };
}());
function generateUniqueFileName(originalname) {
  var timestamp = Date.now();
  var extension = originalname.split('.').pop();
  return "".concat(timestamp, "-").concat(Math.random().toString(36).substring(2, 15), ".").concat(extension);
}
function testTelegbotNotify() {
  return _testTelegbotNotify.apply(this, arguments);
}
function _testTelegbotNotify() {
  _testTelegbotNotify = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee30() {
    var telegbotUrl, response;
    return _regeneratorRuntime().wrap(function _callee30$(_context30) {
      while (1) switch (_context30.prev = _context30.next) {
        case 0:
          telegbotUrl = 'http://telegbot:3001/notify';
          _context30.prev = 1;
          _context30.next = 4;
          return axios.post(telegbotUrl, {
            orderId: 'test-order-12345'
          });
        case 4:
          response = _context30.sent;
          console.log('✅ Response from telegbot:', response.data);
          _context30.next = 11;
          break;
        case 8:
          _context30.prev = 8;
          _context30.t0 = _context30["catch"](1);
          if (_context30.t0.response) {
            console.error('❌ Error response:', _context30.t0.response.status, _context30.t0.response.data);
          } else {
            console.error('❌ Request error:', _context30.t0.message);
          }
        case 11:
        case "end":
          return _context30.stop();
      }
    }, _callee30, null, [[1, 8]]);
  }));
  return _testTelegbotNotify.apply(this, arguments);
}
adminRoute.get('/admin/checkout', /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res, next) {
    var checkoutid, checkout;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.prev = 0;
          checkoutid = req.query.checkoutid;
          _context16.next = 4;
          return _Checkout["default"].findOne({
            _id: checkoutid
          }).populate({
            path: 'user_id',
            select: 'email phoneNumber'
          });
        case 4:
          checkout = _context16.sent;
          if (checkout) {
            res.status(200).json({
              checkout: checkout
            });
          } else {
            res.status(400).json({
              message: 'not found',
              checkout: {}
            });
          }
          _context16.next = 11;
          break;
        case 8:
          _context16.prev = 8;
          _context16.t0 = _context16["catch"](0);
          next(_context16.t0);
        case 11:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[0, 8]]);
  }));
  return function (_x48, _x49, _x50) {
    return _ref16.apply(this, arguments);
  };
}());
adminRoute.get('/admin/getoption', /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res, next) {
    var mongooseid, objectId, variant;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          _context17.prev = 0;
          mongooseid = req.query.mongooseid;
          objectId = new ObjectId(mongooseid);
          _context17.next = 5;
          return _ProductVariant["default"].findOne({
            _id: objectId
          }).populate({
            path: 'productId',
            select: 'name'
          });
        case 5:
          variant = _context17.sent;
          console.log(variant);
          if (variant) {
            _context17.next = 9;
            break;
          }
          return _context17.abrupt("return", res.status(404).json({
            message: 'Variant not found'
          }));
        case 9:
          res.status(200).json({
            message: 'Variant found',
            variant: variant
          });
          _context17.next = 15;
          break;
        case 12:
          _context17.prev = 12;
          _context17.t0 = _context17["catch"](0);
          next(_context17.t0);
        case 15:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[0, 12]]);
  }));
  return function (_x51, _x52, _x53) {
    return _ref17.apply(this, arguments);
  };
}());
adminRoute.post('/admin/create-category', /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res, next) {
    var _req$body9, name, description, image, hexcolor, newCategory;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          _context18.prev = 0;
          _req$body9 = req.body, name = _req$body9.name, description = _req$body9.description, image = _req$body9.image, hexcolor = _req$body9.hexcolor;
          if (!(!name || !description || !image)) {
            _context18.next = 4;
            break;
          }
          return _context18.abrupt("return", res.status(400).json({
            message: 'Name, description, and image are required for a category.'
          }));
        case 4:
          newCategory = new _Category["default"]({
            name: name,
            description: description,
            image: image,
            hexcolor: hexcolor
          });
          _context18.next = 7;
          return newCategory.save();
        case 7:
          res.status(201).json({
            message: 'Category created successfully!',
            category: newCategory
          });
          _context18.next = 13;
          break;
        case 10:
          _context18.prev = 10;
          _context18.t0 = _context18["catch"](0);
          next(_context18.t0);
        case 13:
        case "end":
          return _context18.stop();
      }
    }, _callee18, null, [[0, 10]]);
  }));
  return function (_x54, _x55, _x56) {
    return _ref18.apply(this, arguments);
  };
}());
adminRoute.get('/admin/categories', /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res, next) {
    var page, limit, search, skip, query, totalCategories, totalPages, categories;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          _context19.prev = 0;
          page = parseInt(req.query.page) || 1;
          limit = parseInt(req.query.limit) || 10;
          search = req.query.search || '';
          skip = (page - 1) * limit;
          query = {};
          if (search) {
            query = {
              name: {
                $regex: new RegExp(search, 'i')
              }
            };
          }
          _context19.next = 9;
          return _Category["default"].countDocuments(query);
        case 9:
          totalCategories = _context19.sent;
          totalPages = Math.ceil(totalCategories / limit);
          _context19.next = 13;
          return _Category["default"].find(query).skip(skip).limit(limit);
        case 13:
          categories = _context19.sent;
          res.status(200).json({
            categories: categories,
            currentPage: page,
            totalPages: totalPages,
            totalCategories: totalCategories
          });
          _context19.next = 20;
          break;
        case 17:
          _context19.prev = 17;
          _context19.t0 = _context19["catch"](0);
          next(_context19.t0);
        case 20:
        case "end":
          return _context19.stop();
      }
    }, _callee19, null, [[0, 17]]);
  }));
  return function (_x57, _x58, _x59) {
    return _ref19.apply(this, arguments);
  };
}());
adminRoute.put('/admin/update-category/:id', /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20(req, res, next) {
    var id, _req$body0, name, description, image, hexcolor, updatedCategory;
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          _context20.prev = 0;
          id = req.params.id;
          _req$body0 = req.body, name = _req$body0.name, description = _req$body0.description, image = _req$body0.image, hexcolor = _req$body0.hexcolor; // Basic validation for update fields
          if (!(!name || !description || !image)) {
            _context20.next = 5;
            break;
          }
          return _context20.abrupt("return", res.status(400).json({
            message: 'Name, description, and image are required for updating a category.'
          }));
        case 5:
          _context20.next = 7;
          return _Category["default"].findByIdAndUpdate(id, {
            name: name,
            description: description,
            image: image,
            hexcolor: hexcolor
          }, {
            "new": true,
            runValidators: true
          });
        case 7:
          updatedCategory = _context20.sent;
          if (updatedCategory) {
            _context20.next = 10;
            break;
          }
          return _context20.abrupt("return", res.status(404).json({
            message: 'Category not found.'
          }));
        case 10:
          res.status(200).json({
            message: 'Category updated successfully!',
            category: updatedCategory
          });
          _context20.next = 16;
          break;
        case 13:
          _context20.prev = 13;
          _context20.t0 = _context20["catch"](0);
          next(_context20.t0);
        case 16:
        case "end":
          return _context20.stop();
      }
    }, _callee20, null, [[0, 13]]);
  }));
  return function (_x60, _x61, _x62) {
    return _ref20.apply(this, arguments);
  };
}());
adminRoute["delete"]('/admin/delete-category/:id', /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee21(req, res, next) {
    var id, deletedCategory;
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          _context21.prev = 0;
          id = req.params.id;
          _context21.next = 4;
          return _Category["default"].findByIdAndDelete(id);
        case 4:
          deletedCategory = _context21.sent;
          if (deletedCategory) {
            _context21.next = 7;
            break;
          }
          return _context21.abrupt("return", res.status(404).json({
            message: 'Category not found.'
          }));
        case 7:
          res.status(200).json({
            message: 'Category deleted successfully!'
          });
          _context21.next = 13;
          break;
        case 10:
          _context21.prev = 10;
          _context21.t0 = _context21["catch"](0);
          next(_context21.t0);
        case 13:
        case "end":
          return _context21.stop();
      }
    }, _callee21, null, [[0, 10]]);
  }));
  return function (_x63, _x64, _x65) {
    return _ref21.apply(this, arguments);
  };
}());
adminRoute.post('/admin/add-category-to-product', /*#__PURE__*/function () {
  var _ref22 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee22(req, res, next) {
    var _req$body1, productId, categoryId, product, category;
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          _context22.prev = 0;
          _req$body1 = req.body, productId = _req$body1.productId, categoryId = _req$body1.categoryId;
          if (!(!productId || !categoryId)) {
            _context22.next = 4;
            break;
          }
          return _context22.abrupt("return", res.status(400).json({
            message: 'Product ID and Category ID are required.'
          }));
        case 4:
          if (!(!_mongoose["default"].Types.ObjectId.isValid(productId) || !_mongoose["default"].Types.ObjectId.isValid(categoryId))) {
            _context22.next = 6;
            break;
          }
          return _context22.abrupt("return", res.status(400).json({
            message: 'Invalid Product ID or Category ID format.'
          }));
        case 6:
          _context22.next = 8;
          return _Product["default"].findById(productId);
        case 8:
          product = _context22.sent;
          if (product) {
            _context22.next = 11;
            break;
          }
          return _context22.abrupt("return", res.status(404).json({
            message: 'Product not found.'
          }));
        case 11:
          _context22.next = 13;
          return _Category["default"].findById(categoryId);
        case 13:
          category = _context22.sent;
          if (category) {
            _context22.next = 16;
            break;
          }
          return _context22.abrupt("return", res.status(404).json({
            message: 'Category not found.'
          }));
        case 16:
          if (!product.categories.includes(categoryId)) {
            _context22.next = 18;
            break;
          }
          return _context22.abrupt("return", res.status(409).json({
            message: 'Category already linked to this product.'
          }));
        case 18:
          product.categories.push(categoryId);
          _context22.next = 21;
          return product.save();
        case 21:
          res.status(200).json({
            message: 'Category successfully added to product!',
            product: product.populate('categories')
          });
          _context22.next = 27;
          break;
        case 24:
          _context22.prev = 24;
          _context22.t0 = _context22["catch"](0);
          next(_context22.t0);
        case 27:
        case "end":
          return _context22.stop();
      }
    }, _callee22, null, [[0, 24]]);
  }));
  return function (_x66, _x67, _x68) {
    return _ref22.apply(this, arguments);
  };
}());
adminRoute.post('/admin/remove-category-from-product', /*#__PURE__*/function () {
  var _ref23 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee23(req, res, next) {
    var _req$body10, productId, categoryId, updatedProduct;
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          _context23.prev = 0;
          _req$body10 = req.body, productId = _req$body10.productId, categoryId = _req$body10.categoryId;
          if (!(!productId || !categoryId)) {
            _context23.next = 4;
            break;
          }
          return _context23.abrupt("return", res.status(400).json({
            message: 'Product ID and Category ID are required.'
          }));
        case 4:
          if (!(!_mongoose["default"].Types.ObjectId.isValid(productId) || !_mongoose["default"].Types.ObjectId.isValid(categoryId))) {
            _context23.next = 6;
            break;
          }
          return _context23.abrupt("return", res.status(400).json({
            message: 'Invalid Product ID or Category ID format.'
          }));
        case 6:
          _context23.next = 8;
          return _Product["default"].findByIdAndUpdate(productId, {
            $pull: {
              categories: categoryId
            }
          }, {
            "new": true
          }).populate('categories');
        case 8:
          updatedProduct = _context23.sent;
          if (updatedProduct) {
            _context23.next = 11;
            break;
          }
          return _context23.abrupt("return", res.status(404).json({
            message: 'Product not found.'
          }));
        case 11:
          res.status(200).json({
            message: 'Category successfully removed from product!',
            product: updatedProduct
          });
          _context23.next = 17;
          break;
        case 14:
          _context23.prev = 14;
          _context23.t0 = _context23["catch"](0);
          next(_context23.t0);
        case 17:
        case "end":
          return _context23.stop();
      }
    }, _callee23, null, [[0, 14]]);
  }));
  return function (_x69, _x70, _x71) {
    return _ref23.apply(this, arguments);
  };
}());

//testTelegbotNotify()

adminRoute.get('/admin/orders', /*#__PURE__*/function () {
  var _ref24 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee24(req, res, next) {
    var page, limit, skip, search, matchQuery, searchRegex, countResult, total, orders;
    return _regeneratorRuntime().wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          _context24.prev = 0;
          page = parseInt(req.query.page, 10) || 1;
          limit = parseInt(req.query.limit, 10) || 10;
          skip = (page - 1) * limit;
          search = (req.query.search || '').trim();
          matchQuery = {
            checkout_id: {
              $exists: true
            }
          };
          if (search) {
            searchRegex = new RegExp(search, 'i');
            matchQuery.$or = [{
              'user.name': searchRegex
            }, {
              'checkout.delivery_address': searchRegex
            }, {
              'checkout.promo_code': searchRegex
            }, {
              'checkout.promo_code_type': searchRegex
            }];
          }
          _context24.next = 9;
          return _Order["default"].aggregate([{
            $lookup: {
              from: 'users',
              localField: 'user_id',
              foreignField: '_id',
              as: 'user'
            }
          }, {
            $lookup: {
              from: 'checkouts',
              localField: 'checkout_id',
              foreignField: '_id',
              as: 'checkout'
            }
          }, {
            $unwind: {
              path: '$user',
              preserveNullAndEmptyArrays: true
            }
          }, {
            $unwind: {
              path: '$checkout',
              preserveNullAndEmptyArrays: true
            }
          }, {
            $match: matchQuery
          }, {
            $count: 'totalOrders'
          }]);
        case 9:
          countResult = _context24.sent;
          total = countResult.length > 0 ? countResult[0].totalOrders : 0;
          _context24.next = 13;
          return _Order["default"].aggregate([{
            $lookup: {
              from: 'users',
              localField: 'user_id',
              foreignField: '_id',
              as: 'user'
            }
          }, {
            $lookup: {
              from: 'checkouts',
              localField: 'checkout_id',
              foreignField: '_id',
              as: 'checkout'
            }
          }, {
            $unwind: {
              path: '$user',
              preserveNullAndEmptyArrays: true
            }
          }, {
            $unwind: {
              path: '$checkout',
              preserveNullAndEmptyArrays: true
            }
          }, {
            $match: matchQuery
          }, {
            $sort: {
              _id: -1
            }
          }, {
            $skip: skip
          }, {
            $limit: limit
          }, {
            $project: {
              _id: '$_id',
              name: '$user.name',
              email: '$user.email',
              phoneNumber: '$user.phoneNumber',
              delivery_address: '$checkout.delivery_address',
              delivery_date: '$checkout.delivery_date',
              delivery_instruction: '$checkout.delivery_instruction',
              promo_code: '$checkout.promo_code',
              promo_code_type: '$checkout.promo_code_type',
              cart_items: '$checkout.cart_items',
              subtotal: '$checkout.subtotal',
              delivery_fee: '$checkout.delivery_fee',
              service_charge: '$checkout.service_charge',
              total: '$checkout.total'
            }
          }]);
        case 13:
          orders = _context24.sent;
          return _context24.abrupt("return", res.status(200).json({
            message: 'Paginated orders',
            page: page,
            limit: limit,
            total: total,
            pages: Math.ceil(total / limit),
            orders: orders // The `orders` array is now already in the desired format
          }));
        case 17:
          _context24.prev = 17;
          _context24.t0 = _context24["catch"](0);
          next(_context24.t0);
        case 20:
        case "end":
          return _context24.stop();
      }
    }, _callee24, null, [[0, 17]]);
  }));
  return function (_x72, _x73, _x74) {
    return _ref24.apply(this, arguments);
  };
}());
adminRoute.get('/admin/order/details', /*#__PURE__*/function () {
  var _ref25 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee25(req, res, next) {
    var orderId, order, cart_items, productIds, orderItems, enrichedItems;
    return _regeneratorRuntime().wrap(function _callee25$(_context25) {
      while (1) switch (_context25.prev = _context25.next) {
        case 0:
          _context25.prev = 0;
          orderId = req.query.orderId;
          _context25.next = 4;
          return _Order["default"].findOne({
            _id: orderId
          }).populate({
            path: 'checkout_id',
            select: 'delivery_address delivery_date phone_number cart_items subtotal delivery_fee service_charge total created_at'
          }).populate({
            path: 'user_id',
            select: 'email name phoneNumber'
          }).lean();
        case 4:
          order = _context25.sent;
          cart_items = order.checkout_id.cart_items;
          productIds = Object.keys(cart_items);
          console.log(productIds, productIds.length);
          _context25.next = 10;
          return _ProductVariant["default"].find({
            _id: {
              $in: productIds
            }
          }).populate({
            path: 'productId'
          }).lean();
        case 10:
          orderItems = _context25.sent;
          enrichedItems = orderItems.map(function (p) {
            return _objectSpread(_objectSpread({}, p), {}, {
              amount: cart_items[p._id.toString()]
            });
          });
          res.status(200).json({
            message: 'Orders found',
            orderItems: enrichedItems
          });
          _context25.next = 18;
          break;
        case 15:
          _context25.prev = 15;
          _context25.t0 = _context25["catch"](0);
          next(_context25.t0);
        case 18:
        case "end":
          return _context25.stop();
      }
    }, _callee25, null, [[0, 15]]);
  }));
  return function (_x75, _x76, _x77) {
    return _ref25.apply(this, arguments);
  };
}());
adminRoute.get('/admin/coupons', /*#__PURE__*/function () {
  var _ref26 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee26(req, res, next) {
    var page, limit, search, skip, query, searchQuery, totalCoupons, totalPages, coupons;
    return _regeneratorRuntime().wrap(function _callee26$(_context26) {
      while (1) switch (_context26.prev = _context26.next) {
        case 0:
          _context26.prev = 0;
          page = parseInt(req.query.page) || 1;
          limit = parseInt(req.query.limit) || 10;
          search = req.query.search || '';
          skip = (page - 1) * limit; // Start with a base query that checks for the existence of the expiresAt field
          query = {
            expiresAt: {
              $exists: true
            }
          };
          if (search) {
            // Create a case-insensitive search query across multiple fields
            searchQuery = {
              $or: [{
                name: {
                  $regex: new RegExp(search, 'i')
                }
              }, {
                affiliateKey: {
                  $regex: new RegExp(search, 'i')
                }
              }, {
                code: {
                  $regex: new RegExp(search, 'i')
                }
              }, {
                singleUse: {
                  $regex: new RegExp(search, 'i')
                }
              }]
            }; // Combine the base query with the search query using $and
            query = _objectSpread(_objectSpread({}, query), searchQuery);
          }

          // Get the total count of documents that match the combined query
          _context26.next = 9;
          return _Coupon["default"].countDocuments(query);
        case 9:
          totalCoupons = _context26.sent;
          totalPages = Math.ceil(totalCoupons / limit); // Find the coupons with pagination and the search query
          _context26.next = 13;
          return _Coupon["default"].find(query).skip(skip).limit(limit).lean();
        case 13:
          coupons = _context26.sent;
          // Respond with the list of coupons and pagination information
          res.status(200).json({
            coupons: coupons,
            currentPage: page,
            totalPages: totalPages,
            totalCoupons: totalCoupons
          });
          _context26.next = 20;
          break;
        case 17:
          _context26.prev = 17;
          _context26.t0 = _context26["catch"](0);
          // Pass any errors to the Express error-handling middleware
          next(_context26.t0);
        case 20:
        case "end":
          return _context26.stop();
      }
    }, _callee26, null, [[0, 17]]);
  }));
  return function (_x78, _x79, _x80) {
    return _ref26.apply(this, arguments);
  };
}());
var generateCouponCode = function generateCouponCode() {
  return crypto.randomBytes(5).toString('hex').toUpperCase();
};
adminRoute.post('/admin/coupons', /*#__PURE__*/function () {
  var _ref27 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee27(req, res, next) {
    var _req$body11, _id, couponData, finalCouponData, newCoupon, savedCoupon;
    return _regeneratorRuntime().wrap(function _callee27$(_context27) {
      while (1) switch (_context27.prev = _context27.next) {
        case 0:
          _context27.prev = 0;
          _req$body11 = req.body, _id = _req$body11._id, couponData = _objectWithoutProperties(_req$body11, _excluded3);
          finalCouponData = _objectSpread(_objectSpread({}, couponData), {}, {
            code: generateCouponCode()
          });
          newCoupon = new _Coupon["default"](finalCouponData);
          _context27.next = 6;
          return newCoupon.save();
        case 6:
          savedCoupon = _context27.sent;
          res.status(201).json({
            message: 'Coupon created successfully',
            coupon: savedCoupon
          });
          _context27.next = 13;
          break;
        case 10:
          _context27.prev = 10;
          _context27.t0 = _context27["catch"](0);
          next(_context27.t0);
        case 13:
        case "end":
          return _context27.stop();
      }
    }, _callee27, null, [[0, 10]]);
  }));
  return function (_x81, _x82, _x83) {
    return _ref27.apply(this, arguments);
  };
}());
adminRoute.put('/admin/coupons/:id', /*#__PURE__*/function () {
  var _ref28 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee28(req, res, next) {
    var id, updatedCoupon;
    return _regeneratorRuntime().wrap(function _callee28$(_context28) {
      while (1) switch (_context28.prev = _context28.next) {
        case 0:
          _context28.prev = 0;
          id = req.params.id;
          _context28.next = 4;
          return _Coupon["default"].findByIdAndUpdate(id, req.body, {
            "new": true,
            runValidators: true
          });
        case 4:
          updatedCoupon = _context28.sent;
          if (updatedCoupon) {
            _context28.next = 7;
            break;
          }
          return _context28.abrupt("return", res.status(404).json({
            message: 'Coupon not found.'
          }));
        case 7:
          res.status(200).json({
            message: 'Coupon updated successfully',
            coupon: updatedCoupon
          });
          _context28.next = 13;
          break;
        case 10:
          _context28.prev = 10;
          _context28.t0 = _context28["catch"](0);
          next(_context28.t0);
        case 13:
        case "end":
          return _context28.stop();
      }
    }, _callee28, null, [[0, 10]]);
  }));
  return function (_x84, _x85, _x86) {
    return _ref28.apply(this, arguments);
  };
}());
adminRoute["delete"]('/admin/coupons/:id', /*#__PURE__*/function () {
  var _ref29 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee29(req, res, next) {
    var id, deletedCoupon;
    return _regeneratorRuntime().wrap(function _callee29$(_context29) {
      while (1) switch (_context29.prev = _context29.next) {
        case 0:
          _context29.prev = 0;
          id = req.params.id;
          _context29.next = 4;
          return _Coupon["default"].findByIdAndDelete(id);
        case 4:
          deletedCoupon = _context29.sent;
          if (deletedCoupon) {
            _context29.next = 7;
            break;
          }
          return _context29.abrupt("return", res.status(404).json({
            message: 'Coupon not found.'
          }));
        case 7:
          res.status(200).json({
            message: 'Coupon deleted successfully',
            deletedCoupon: deletedCoupon
          });
          _context29.next = 13;
          break;
        case 10:
          _context29.prev = 10;
          _context29.t0 = _context29["catch"](0);
          next(_context29.t0);
        case 13:
        case "end":
          return _context29.stop();
      }
    }, _callee29, null, [[0, 10]]);
  }));
  return function (_x87, _x88, _x89) {
    return _ref29.apply(this, arguments);
  };
}());
var _default = exports["default"] = adminRoute;