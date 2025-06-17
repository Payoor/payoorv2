"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _express = _interopRequireDefault(require("express"));
var _https = _interopRequireDefault(require("https"));
var _Checkout = _interopRequireDefault(require("../models/Checkout"));
var _User = _interopRequireDefault(require("../models/User"));
var _Order = _interopRequireDefault(require("../models/Order"));
var _UserCart = _interopRequireDefault(require("../models/UserCart"));
var _Product = _interopRequireDefault(require("../models/Product"));
var _ProductVariant = _interopRequireDefault(require("../models/ProductVariant"));
var _authMiddleware = _interopRequireDefault(require("../middleware/authMiddleware"));
var _CouponClass = _interopRequireDefault(require("../CouponClass"));
var _redisconf = require("../redisconf");
var _payoordb = _interopRequireDefault(require("../payoordb"));
var _ElasticSearchClass = _interopRequireDefault(require("../controllers/ElasticSearchClass"));
var _GoogleApiController = _interopRequireDefault(require("../controllers/GoogleApiController"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
var ObjectId = _mongoose["default"].Types.ObjectId;
var elasticsearchUrl = process.env.ELASTICSEARCHURL;
var productIndex = 'products';
var elasticSearchCl = new _ElasticSearchClass["default"](elasticsearchUrl);
var shopperRoute = (0, _express["default"])();
shopperRoute.post('/shopper/message', _authMiddleware["default"], /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res, next) {
    var message, page, size, data, _data$hits, total, hits, totalItems, currentCount;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          message = req.body.message;
          page = parseInt(req.query.page) || 1;
          size = parseInt(req.query.size) || 10;
          _context.next = 6;
          return elasticSearchCl.findProducts({
            query: message,
            index: productIndex,
            page: page,
            size: size
          });
        case 6:
          data = _context.sent;
          _data$hits = data.hits, total = _data$hits.total, hits = _data$hits.hits;
          totalItems = total.value;
          currentCount = page * size; //console.log(hits)
          res.status(200).json({
            message: 'message sent',
            input: message,
            page: page,
            size: size,
            products: hits ? hits.map(function (hit) {
              return hit._source;
            }) : [],
            total: totalItems,
            hasMore: currentCount < totalItems // true if more pages remain
          });
          _context.next = 16;
          break;
        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          next(_context.t0);
          //res.status(500).json({ error: 'Internal server error' })
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 13]]);
  }));
  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
shopperRoute.post('/shopper/message/suggest', _authMiddleware["default"], /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res, next) {
    var query, hits;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          query = req.query.query;
          console.log(query, 'this is a test');
          _context2.next = 5;
          return elasticSearchCl.autoComplete(query);
        case 5:
          hits = _context2.sent;
          res.status(200).json({
            message: 'autocorrect',
            hits: hits
          });
          _context2.next = 12;
          break;
        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          next(_context2.t0);
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 9]]);
  }));
  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}());
shopperRoute.get('/shopper/getoptions', _authMiddleware["default"], /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res, next) {
    var mongooseid, productId, variantsCollection, variants;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          mongooseid = req.query.mongooseid;
          productId = new ObjectId(mongooseid);
          variantsCollection = _payoordb["default"].db.collection('productvariants');
          _context3.next = 6;
          return variantsCollection.find({
            productId: productId
          }).toArray();
        case 6:
          variants = _context3.sent;
          res.status(200).json({
            message: 'Variants found',
            variants: variants
          });
          _context3.next = 13;
          break;
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          next(_context3.t0);
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 10]]);
  }));
  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}());
shopperRoute.get('/shopper/getproduct', _authMiddleware["default"], /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res, next) {
    var mongooseid, productId, product;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          mongooseid = req.query.mongooseid;
          if (!(!mongooseid || !ObjectId.isValid(mongooseid))) {
            _context4.next = 4;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            userMessage: 'Invalid or missing product ID.'
          }));
        case 4:
          productId = new ObjectId(mongooseid);
          _context4.next = 7;
          return _Product["default"].findOne({
            _id: productId
          });
        case 7:
          product = _context4.sent;
          if (product) {
            _context4.next = 10;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            userMessage: 'Product not found.'
          }));
        case 10:
          res.status(200).json({
            message: 'Product found successfully.',
            product: {
              productname: product.name,
              productimg: product.image,
              productMongooseId: product._id,
              productDescription: product.generatedDescription,
              variantCount: product.variantCount,
              metadata: product.metadata
            }
          });
          _context4.next = 16;
          break;
        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](0);
          // Pass the error to the next error-handling middleware
          next(_context4.t0);
        case 16:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 13]]);
  }));
  return function (_x0, _x1, _x10) {
    return _ref4.apply(this, arguments);
  };
}());
shopperRoute.get('/shopper/getoption', _authMiddleware["default"], /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res, next) {
    var mongooseid, objectId, variant;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          mongooseid = req.query.mongooseid;
          objectId = new ObjectId(mongooseid);
          _context5.next = 5;
          return _ProductVariant["default"].findOne({
            _id: objectId
          }).populate({
            path: 'productId',
            select: 'name'
          });
        case 5:
          variant = _context5.sent;
          console.log(variant);
          if (variant) {
            _context5.next = 9;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            userMessage: 'Variant not found'
          }));
        case 9:
          res.status(200).json({
            message: 'Variant found',
            variant: variant
          });
          _context5.next = 15;
          break;
        case 12:
          _context5.prev = 12;
          _context5.t0 = _context5["catch"](0);
          next(_context5.t0);
        case 15:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 12]]);
  }));
  return function (_x11, _x12, _x13) {
    return _ref5.apply(this, arguments);
  };
}());
shopperRoute.get('/shopper/init/checkout', _authMiddleware["default"], /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res, next) {
    var jwt, userId, _yield$Promise$all, _yield$Promise$all2, fee, servicecharge, latestCheckout, phone_number, delivery_address;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          jwt = req.query.jwt;
          userId = req.userId;
          _context6.next = 5;
          return Promise.all([_redisconf.redisClient.hget('admindirective', 'deliveryfee'), _redisconf.redisClient.hget('admindirective', 'servicecharge'), _Checkout["default"].findOne({
            user_id: userId
          }).sort({
            created_at: -1
          }).lean()]);
        case 5:
          _yield$Promise$all = _context6.sent;
          _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 3);
          fee = _yield$Promise$all2[0];
          servicecharge = _yield$Promise$all2[1];
          latestCheckout = _yield$Promise$all2[2];
          phone_number = (latestCheckout === null || latestCheckout === void 0 ? void 0 : latestCheckout.phone_number) || '';
          delivery_address = (latestCheckout === null || latestCheckout === void 0 ? void 0 : latestCheckout.delivery_address) || '';
          res.status(200).json({
            message: 'Checkout data',
            jwt: jwt,
            fee: Number(fee),
            servicecharge: Number(servicecharge),
            phone_number: phone_number,
            delivery_address: delivery_address
          });
          _context6.next = 18;
          break;
        case 15:
          _context6.prev = 15;
          _context6.t0 = _context6["catch"](0);
          next(_context6.t0);
        case 18:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 15]]);
  }));
  return function (_x14, _x15, _x16) {
    return _ref6.apply(this, arguments);
  };
}());
shopperRoute.post('/shopper/update/checkout', _authMiddleware["default"], /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res, next) {
    var _req$query, jwt, checkoutId, checkout, validUser, allowedUpdateFields, updateData, _i, _allowedUpdateFields, key, coupon, updatedCheckout;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _req$query = req.query, jwt = _req$query.jwt, checkoutId = _req$query.checkoutId;
          checkout = req.body.checkout;
          _context7.next = 5;
          return _User["default"].findByToken(jwt);
        case 5:
          validUser = _context7.sent;
          if (validUser) {
            _context7.next = 8;
            break;
          }
          return _context7.abrupt("return", res.status(404).json({
            userMessage: 'invalid user'
          }));
        case 8:
          allowedUpdateFields = ['delivery_address', 'delivery_date', 'delivery_instruction', 'promo_code', 'phone_number'];
          updateData = {};
          for (_i = 0, _allowedUpdateFields = allowedUpdateFields; _i < _allowedUpdateFields.length; _i++) {
            key = _allowedUpdateFields[_i];
            if (checkout.hasOwnProperty(key)) {
              updateData[key] = checkout[key];
            }
          }

          // Handle promo code logic if it's being updated
          if (!(updateData.promo_code && typeof updateData.promo_code === 'string')) {
            _context7.next = 22;
            break;
          }
          _context7.next = 14;
          return _CouponClass["default"].getCoupon(updateData.promo_code);
        case 14:
          coupon = _context7.sent;
          if (!(coupon && coupon.type)) {
            _context7.next = 19;
            break;
          }
          updateData.promo_code_type = coupon.type;
          _context7.next = 20;
          break;
        case 19:
          return _context7.abrupt("return", res.status(400).json({
            userMessage: 'Invalid or expired coupon code'
          }));
        case 20:
          _context7.next = 23;
          break;
        case 22:
          if (updateData.promo_code === "") {
            updateData.promo_code_type = "";
          }
        case 23:
          _context7.next = 25;
          return _Checkout["default"].findOneAndUpdate({
            _id: new ObjectId(checkoutId),
            user_id: new ObjectId(validUser._id)
          }, {
            $set: updateData
          }, {
            "new": true,
            runValidators: true
          });
        case 25:
          updatedCheckout = _context7.sent;
          if (updatedCheckout) {
            _context7.next = 28;
            break;
          }
          return _context7.abrupt("return", res.status(404).json({
            userMessage: 'Checkout not found or you do not have permission to update it.'
          }));
        case 28:
          res.status(200).json({
            message: 'Checkout data updated successfully',
            updatedCheckout: updatedCheckout
          });
          _context7.next = 34;
          break;
        case 31:
          _context7.prev = 31;
          _context7.t0 = _context7["catch"](0);
          next(_context7.t0);
        case 34:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 31]]);
  }));
  return function (_x17, _x18, _x19) {
    return _ref7.apply(this, arguments);
  };
}());
shopperRoute.get('/shopper/paystack/generate-paystack-link', _authMiddleware["default"], /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res, next) {
    var checkout_id, _yield$Checkout$aggre, _yield$Checkout$aggre2, checkoutWithUser, email, user_id, total, params, options, paystackRes;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          checkout_id = req.query.checkout_id;
          if (checkout_id) {
            _context8.next = 3;
            break;
          }
          return _context8.abrupt("return", res.status(400).json({
            error: 'Checkout ID is required'
          }));
        case 3:
          _context8.prev = 3;
          _context8.next = 6;
          return _Checkout["default"].aggregate([{
            $match: {
              _id: new _mongoose["default"].Types.ObjectId(checkout_id)
            }
          }, {
            $lookup: {
              from: 'users',
              localField: 'user_id',
              foreignField: '_id',
              as: 'user'
            }
          }, {
            $unwind: '$user'
          }, {
            $project: {
              delivery_address: 1,
              total: 1,
              user_id: 1,
              email: '$user.email'
            }
          }]);
        case 6:
          _yield$Checkout$aggre = _context8.sent;
          _yield$Checkout$aggre2 = _slicedToArray(_yield$Checkout$aggre, 1);
          checkoutWithUser = _yield$Checkout$aggre2[0];
          if (checkoutWithUser) {
            _context8.next = 11;
            break;
          }
          return _context8.abrupt("return", res.status(400).json({
            error: 'Invalid Checkout ID'
          }));
        case 11:
          email = checkoutWithUser.email, user_id = checkoutWithUser.user_id, total = checkoutWithUser.total; // console.log(checkoutWithUser)
          params = JSON.stringify({
            email: email,
            amount: Math.round(total * 100),
            channels: ['bank_transfer'],
            metadata: {
              userId: user_id,
              checkoutId: checkout_id
            }
          });
          options = {
            hostname: 'api.paystack.co',
            port: 443,
            path: '/transaction/initialize',
            method: 'POST',
            headers: {
              Authorization: "Bearer ".concat(process.env.PAYSTACK_SECRET_KEY),
              'Content-Type': 'application/json'
            }
          };
          _context8.next = 16;
          return new Promise(function (resolve, reject) {
            var req = _https["default"].request(options, function (res) {
              var data = '';
              res.on('data', function (chunk) {
                return data += chunk;
              });
              res.on('end', function () {
                try {
                  resolve(JSON.parse(data));
                } catch (err) {
                  reject(new Error('Failed to parse Paystack response'));
                }
              });
            });
            req.on('error', reject);
            req.write(params);
            req.end();
          });
        case 16:
          paystackRes = _context8.sent;
          if (paystackRes.status) {
            _context8.next = 19;
            break;
          }
          return _context8.abrupt("return", res.status(400).json({
            error: paystackRes.message,
            userMessage: 'Error while generating paystack link. Please try again in a minute'
          }));
        case 19:
          console.log(paystackRes);
          res.status(200).json({
            success: true,
            data: {
              authorizationUrl: paystackRes.data.authorization_url,
              reference: paystackRes.data.reference,
              accessCode: paystackRes.data.access_code
            }
          });
          _context8.next = 27;
          break;
        case 23:
          _context8.prev = 23;
          _context8.t0 = _context8["catch"](3);
          console.log(_context8.t0, 'from paystack');
          next(_context8.t0);
        case 27:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[3, 23]]);
  }));
  return function (_x20, _x21, _x22) {
    return _ref8.apply(this, arguments);
  };
}());
shopperRoute.get('/shopper/user/getorders', _authMiddleware["default"], /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res, next) {
    var userId, userOrders, variantsCollection, productCollection, enrichedOrders, _iterator, _step, _loop;
    return _regeneratorRuntime().wrap(function _callee9$(_context0) {
      while (1) switch (_context0.prev = _context0.next) {
        case 0:
          _context0.prev = 0;
          userId = req.userId;
          _context0.next = 4;
          return _Order["default"].find({
            user_id: userId
          }).populate('checkout_id');
        case 4:
          userOrders = _context0.sent;
          variantsCollection = _payoordb["default"].db.collection('productvariants');
          productCollection = _payoordb["default"].db.collection('newproducts');
          enrichedOrders = [];
          _iterator = _createForOfIteratorHelper(userOrders);
          _context0.prev = 9;
          _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
            var _order$checkout_id$ca, _order$checkout_id$ca2;
            var order, cartItems, variantIds, variants, productIds, products, productMap, _iterator2, _step2, product, enrichedCart;
            return _regeneratorRuntime().wrap(function _loop$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  order = _step.value;
                  cartItems = order.checkout_id.cart_items instanceof Map ? Object.fromEntries(order.checkout_id.cart_items) : ((_order$checkout_id$ca = (_order$checkout_id$ca2 = order.checkout_id.cart_items).toObject) === null || _order$checkout_id$ca === void 0 ? void 0 : _order$checkout_id$ca.call(_order$checkout_id$ca2)) || order.checkout_id.cart_items;
                  variantIds = Object.keys(cartItems || {}).map(function (id) {
                    return new ObjectId(id);
                  });
                  _context9.next = 5;
                  return variantsCollection.find({
                    _id: {
                      $in: variantIds
                    }
                  }).toArray();
                case 5:
                  variants = _context9.sent;
                  productIds = variants.map(function (v) {
                    return v.productId;
                  });
                  _context9.next = 9;
                  return productCollection.find({
                    _id: {
                      $in: productIds
                    }
                  }).toArray();
                case 9:
                  products = _context9.sent;
                  productMap = {};
                  _iterator2 = _createForOfIteratorHelper(products);
                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      product = _step2.value;
                      productMap[product._id.toString()] = product;
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }
                  enrichedCart = variants.map(function (variant) {
                    return _objectSpread(_objectSpread({}, variant), {}, {
                      product: productMap[variant.productId.toString()],
                      quantity: cartItems[variant._id.toString()]
                    });
                  });
                  enrichedOrders.push(_objectSpread(_objectSpread({}, order.toObject()), {}, {
                    cart: enrichedCart
                  }));
                case 15:
                case "end":
                  return _context9.stop();
              }
            }, _loop);
          });
          _iterator.s();
        case 12:
          if ((_step = _iterator.n()).done) {
            _context0.next = 16;
            break;
          }
          return _context0.delegateYield(_loop(), "t0", 14);
        case 14:
          _context0.next = 12;
          break;
        case 16:
          _context0.next = 21;
          break;
        case 18:
          _context0.prev = 18;
          _context0.t1 = _context0["catch"](9);
          _iterator.e(_context0.t1);
        case 21:
          _context0.prev = 21;
          _iterator.f();
          return _context0.finish(21);
        case 24:
          return _context0.abrupt("return", res.status(200).json({
            success: true,
            orders: enrichedOrders
          }));
        case 27:
          _context0.prev = 27;
          _context0.t2 = _context0["catch"](0);
          next(_context0.t2);
        case 30:
        case "end":
          return _context0.stop();
      }
    }, _callee9, null, [[0, 27], [9, 18, 21, 24]]);
  }));
  return function (_x23, _x24, _x25) {
    return _ref9.apply(this, arguments);
  };
}());
shopperRoute.get('/shopper/user/getorder/', _authMiddleware["default"], /*#__PURE__*/function () {
  var _ref0 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee0(req, res, next) {
    var _order$checkout_id$ca3, _order$checkout_id$ca4, userId, orderId, order, cartItems, variantIds, variantsCollection, productCollection, variants, productIds, products, productMap, _iterator3, _step3, product, enrichedCart;
    return _regeneratorRuntime().wrap(function _callee0$(_context1) {
      while (1) switch (_context1.prev = _context1.next) {
        case 0:
          _context1.prev = 0;
          userId = req.userId;
          orderId = req.query.orderId;
          if (ObjectId.isValid(orderId)) {
            _context1.next = 5;
            break;
          }
          return _context1.abrupt("return", res.status(400).json({
            success: false,
            userMessage: 'Invalid order ID'
          }));
        case 5:
          _context1.next = 7;
          return _Order["default"].findOne({
            _id: new ObjectId(orderId),
            user_id: new ObjectId(userId)
          }).populate('checkout_id');
        case 7:
          order = _context1.sent;
          if (order) {
            _context1.next = 10;
            break;
          }
          return _context1.abrupt("return", res.status(404).json({
            success: false,
            userMessage: 'Order not found'
          }));
        case 10:
          cartItems = order.checkout_id.cart_items instanceof Map ? Object.fromEntries(order.checkout_id.cart_items) : ((_order$checkout_id$ca3 = (_order$checkout_id$ca4 = order.checkout_id.cart_items).toObject) === null || _order$checkout_id$ca3 === void 0 ? void 0 : _order$checkout_id$ca3.call(_order$checkout_id$ca4)) || order.checkout_id.cart_items;
          variantIds = Object.keys(cartItems || {}).map(function (id) {
            return new ObjectId(id);
          });
          variantsCollection = _payoordb["default"].db.collection('productvariants');
          productCollection = _payoordb["default"].db.collection('newproducts');
          _context1.next = 16;
          return variantsCollection.find({
            _id: {
              $in: variantIds
            }
          }).toArray();
        case 16:
          variants = _context1.sent;
          productIds = variants.map(function (v) {
            return v.productId;
          });
          _context1.next = 20;
          return productCollection.find({
            _id: {
              $in: productIds
            }
          }).toArray();
        case 20:
          products = _context1.sent;
          productMap = {};
          _iterator3 = _createForOfIteratorHelper(products);
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              product = _step3.value;
              productMap[product._id.toString()] = product;
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
          enrichedCart = variants.map(function (variant) {
            return _objectSpread(_objectSpread({}, variant), {}, {
              product: productMap[variant.productId.toString()],
              quantity: cartItems[variant._id.toString()]
            });
          });
          return _context1.abrupt("return", res.status(200).json({
            success: true,
            order: order.toObject(),
            cart: enrichedCart
          }));
        case 28:
          _context1.prev = 28;
          _context1.t0 = _context1["catch"](0);
          next(_context1.t0);
        case 31:
        case "end":
          return _context1.stop();
      }
    }, _callee0, null, [[0, 28]]);
  }));
  return function (_x26, _x27, _x28) {
    return _ref0.apply(this, arguments);
  };
}());
shopperRoute.get('/shopper/google/search-places', _authMiddleware["default"], _GoogleApiController["default"].searchPlaces);
shopperRoute.get('/shopper/google/use-current-location', _authMiddleware["default"], _GoogleApiController["default"].reverseGeocode);
shopperRoute.post('/shopper/apply-coupon', _authMiddleware["default"], /*#__PURE__*/function () {
  var _ref1 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee1(req, res, next) {
    var coupon_code, userId, key, raw, couponConfig, type, redeemed, typeKey, typeRaw, couponTypeConfig, ttl, createdAt, discount, now, isExpired, usedCodeCheckout, usedCoupon, usedOrder, usedTypeCheckout, _usedOrder, discountKey;
    return _regeneratorRuntime().wrap(function _callee1$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          coupon_code = req.body.coupon_code;
          userId = req.userId;
          if (!(!coupon_code || typeof coupon_code !== 'string')) {
            _context10.next = 5;
            break;
          }
          return _context10.abrupt("return", res.status(401).json({
            success: false,
            userMessage: 'Coupon code is required and must be a string'
          }));
        case 5:
          console.log(coupon_code, 'coupon_code');

          // Get the coupon from Redis
          key = "coupon:code:".concat(coupon_code);
          _context10.next = 9;
          return _redisconf.redisClient.get(key);
        case 9:
          raw = _context10.sent;
          console.log(raw, 'raw here');
          if (raw) {
            _context10.next = 13;
            break;
          }
          return _context10.abrupt("return", res.status(404).json({
            success: false,
            userMessage: 'Coupon code not found or expired'
          }));
        case 13:
          couponConfig = JSON.parse(raw);
          type = couponConfig.type, redeemed = couponConfig.redeemed;
          typeKey = "coupon:type:".concat(type);
          _context10.next = 18;
          return _redisconf.redisClient.get(typeKey);
        case 18:
          typeRaw = _context10.sent;
          if (typeRaw) {
            _context10.next = 21;
            break;
          }
          return _context10.abrupt("return", res.status(404).json({
            success: false,
            userMessage: 'Coupon type not found or expired'
          }));
        case 21:
          couponTypeConfig = JSON.parse(typeRaw);
          ttl = couponTypeConfig.ttl, createdAt = couponTypeConfig.createdAt, discount = couponTypeConfig.discount;
          now = Date.now();
          isExpired = now > createdAt + ttl * 1000;
          if (!isExpired) {
            _context10.next = 27;
            break;
          }
          return _context10.abrupt("return", res.status(410).json({
            success: false,
            userMessage: 'Coupon code has expired'
          }));
        case 27:
          _context10.next = 29;
          return _Checkout["default"].findOne({
            user_id: userId,
            promo_code: coupon_code
          }).select('_id');
        case 29:
          usedCodeCheckout = _context10.sent;
          usedCoupon = false;
          if (!usedCodeCheckout) {
            _context10.next = 36;
            break;
          }
          _context10.next = 34;
          return _Order["default"].findOne({
            checkout_id: usedCodeCheckout._id
          });
        case 34:
          usedOrder = _context10.sent;
          if (usedOrder) usedCoupon = true;
        case 36:
          _context10.next = 38;
          return _Checkout["default"].findOne({
            user_id: userId,
            promo_code_type: type
          }).select('_id');
        case 38:
          usedTypeCheckout = _context10.sent;
          if (!usedTypeCheckout) {
            _context10.next = 44;
            break;
          }
          _context10.next = 42;
          return _Order["default"].findOne({
            checkout_id: usedTypeCheckout._id
          });
        case 42:
          _usedOrder = _context10.sent;
          if (_usedOrder) usedCoupon = true;
        case 44:
          if (!usedCoupon) {
            _context10.next = 46;
            break;
          }
          return _context10.abrupt("return", res.status(409).json({
            success: false,
            userMessage: 'You have already used this coupon code or a coupon of this type'
          }));
        case 46:
          discountKey = "";
          return _context10.abrupt("return", res.status(200).json({
            success: true,
            message: 'Coupon code applied successfully',
            discount: discount || {},
            // could contain flat, percentage, or freeDelivery
            type: type,
            expires_in: Math.floor((createdAt + ttl * 1000 - now) / 1000)
          }));
        case 50:
          _context10.prev = 50;
          _context10.t0 = _context10["catch"](0);
          console.log(_context10.t0);
          next(_context10.t0);
        case 54:
        case "end":
          return _context10.stop();
      }
    }, _callee1, null, [[0, 50]]);
  }));
  return function (_x29, _x30, _x31) {
    return _ref1.apply(this, arguments);
  };
}());
shopperRoute.post('/shopper/cart', _authMiddleware["default"], /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res, next) {
    var userId, items, totalItems, user_cart, total, foundUserCart, mergedTotalItems, existingItems, productId, existingProductId, updatedUserCart, newUserCart;
    return _regeneratorRuntime().wrap(function _callee10$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          userId = req.userId;
          items = req.body.items || {};
          totalItems = req.body.totalItems || [];
          if (userId) {
            _context11.next = 6;
            break;
          }
          return _context11.abrupt("return", res.status(401).json({
            userMessage: 'Authentication required: User ID not found.'
          }));
        case 6:
          total = 0;
          _context11.next = 9;
          return _UserCart["default"].findOne({
            userId: userId
          });
        case 9:
          foundUserCart = _context11.sent;
          if (!foundUserCart) {
            _context11.next = 26;
            break;
          }
          mergedTotalItems = Array.from(new Set(_toConsumableArray(totalItems)));
          existingItems = _objectSpread({}, foundUserCart.items || {});
          for (productId in items) {
            if (items.hasOwnProperty(productId)) {
              existingItems[productId] = items[productId];
            }
          }
          for (existingProductId in existingItems) {
            if (!items.hasOwnProperty(existingProductId)) {
              delete existingItems[existingProductId];
            }
          }
          _context11.next = 17;
          return _UserCart["default"].findOneAndUpdate({
            userId: userId
          }, {
            $set: {
              totalItems: mergedTotalItems,
              items: existingItems
            }
          }, {
            "new": true,
            runValidators: true
          });
        case 17:
          updatedUserCart = _context11.sent;
          if (updatedUserCart) {
            _context11.next = 20;
            break;
          }
          return _context11.abrupt("return", res.status(404).json({
            synced: false,
            user_cart: {}
          }));
        case 20:
          user_cart = updatedUserCart;
          _context11.next = 23;
          return user_cart.calculateTotal();
        case 23:
          total = _context11.sent;
          _context11.next = 35;
          break;
        case 26:
          newUserCart = new _UserCart["default"]({
            userId: userId,
            items: items,
            totalItems: totalItems
          });
          _context11.next = 29;
          return newUserCart.save();
        case 29:
          _context11.next = 31;
          return _UserCart["default"].findOne({
            userId: userId
          });
        case 31:
          user_cart = _context11.sent;
          _context11.next = 34;
          return user_cart.calculateTotal();
        case 34:
          total = _context11.sent;
        case 35:
          return _context11.abrupt("return", res.status(200).json({
            synced: true,
            user_cart: user_cart,
            total: total
          }));
        case 38:
          _context11.prev = 38;
          _context11.t0 = _context11["catch"](0);
          next(_context11.t0);
        case 41:
        case "end":
          return _context11.stop();
      }
    }, _callee10, null, [[0, 38]]);
  }));
  return function (_x32, _x33, _x34) {
    return _ref10.apply(this, arguments);
  };
}());
shopperRoute.post('/shopper/initialize', _authMiddleware["default"], /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res, next) {
    var userId, foundUserCart, total;
    return _regeneratorRuntime().wrap(function _callee11$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          userId = req.userId;
          if (userId) {
            _context12.next = 4;
            break;
          }
          return _context12.abrupt("return", res.status(401).json({
            userMessage: 'Authentication required: User ID not found.'
          }));
        case 4:
          _context12.next = 6;
          return _UserCart["default"].findOne({
            userId: userId
          });
        case 6:
          foundUserCart = _context12.sent;
          if (!foundUserCart) {
            _context12.next = 14;
            break;
          }
          _context12.next = 10;
          return foundUserCart.calculateTotal();
        case 10:
          total = _context12.sent;
          return _context12.abrupt("return", res.status(200).json({
            initialized: true,
            user_cart: {
              items: foundUserCart.items || {},
              totalItems: foundUserCart.totalItems || []
            },
            total: total
          }));
        case 14:
          return _context12.abrupt("return", res.status(200).json({
            initialized: true,
            user_cart: {
              items: {},
              totalItems: []
            },
            total: 0
          }));
        case 15:
          _context12.next = 20;
          break;
        case 17:
          _context12.prev = 17;
          _context12.t0 = _context12["catch"](0);
          next(_context12.t0);
        case 20:
        case "end":
          return _context12.stop();
      }
    }, _callee11, null, [[0, 17]]);
  }));
  return function (_x35, _x36, _x37) {
    return _ref11.apply(this, arguments);
  };
}());
shopperRoute.get('/shopper/bani/getuserdetails', _authMiddleware["default"], /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res, next) {
    var userId, checkout_id, _yield$Checkout$aggre3, _yield$Checkout$aggre4, checkoutWithUser, name, email, phoneNumber, user_id, total, delivery_address;
    return _regeneratorRuntime().wrap(function _callee12$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          userId = req.userId;
          checkout_id = req.query.checkout_id;
          if (checkout_id) {
            _context13.next = 5;
            break;
          }
          return _context13.abrupt("return", res.status(400).json({
            error: 'Checkout ID is required'
          }));
        case 5:
          if (userId) {
            _context13.next = 7;
            break;
          }
          return _context13.abrupt("return", res.status(401).json({
            userMessage: 'Authentication required: User ID not found.'
          }));
        case 7:
          _context13.next = 9;
          return _Checkout["default"].aggregate([{
            $match: {
              _id: new _mongoose["default"].Types.ObjectId(checkout_id)
            }
          }, {
            $lookup: {
              from: 'users',
              localField: 'user_id',
              foreignField: '_id',
              as: 'user'
            }
          }, {
            $unwind: '$user'
          }, {
            $project: {
              delivery_address: 1,
              total: 1,
              user_id: 1,
              name: '$user.name',
              email: '$user.email',
              phoneNumber: '$user.phoneNumber'
            }
          }]);
        case 9:
          _yield$Checkout$aggre3 = _context13.sent;
          _yield$Checkout$aggre4 = _slicedToArray(_yield$Checkout$aggre3, 1);
          checkoutWithUser = _yield$Checkout$aggre4[0];
          if (checkoutWithUser) {
            _context13.next = 14;
            break;
          }
          return _context13.abrupt("return", res.status(400).json({
            error: 'Invalid Checkout ID'
          }));
        case 14:
          name = checkoutWithUser.name, email = checkoutWithUser.email, phoneNumber = checkoutWithUser.phoneNumber, user_id = checkoutWithUser.user_id, total = checkoutWithUser.total, delivery_address = checkoutWithUser.delivery_address;
          res.status(200).json({
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            userId: user_id,
            total: total,
            deliveryAddress: delivery_address
          });
          _context13.next = 21;
          break;
        case 18:
          _context13.prev = 18;
          _context13.t0 = _context13["catch"](0);
          next(_context13.t0);
        case 21:
        case "end":
          return _context13.stop();
      }
    }, _callee12, null, [[0, 18]]);
  }));
  return function (_x38, _x39, _x40) {
    return _ref12.apply(this, arguments);
  };
}());
shopperRoute.post('/shopper/checkout/create', _authMiddleware["default"], /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res, next) {
    var userId, items, productIds, objectIdProductIds, productVariants, subTotal, productPriceMap, _i2, _productIds, productId, quantity, price, _yield$Promise$all3, _yield$Promise$all4, validUser, rawDeliveryFee, rawServiceCharge, latestCheckout, email, phoneNumber, delivery_fee, service_charge, finalTotal, phone_number, delivery_address, deliveryDates, delivery_date, newCheckoutDocument, checkout;
    return _regeneratorRuntime().wrap(function _callee13$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          userId = req.userId;
          if (userId) {
            _context14.next = 4;
            break;
          }
          return _context14.abrupt("return", res.status(401).json({
            userMessage: 'Authentication required: User ID not found.'
          }));
        case 4:
          items = req.body.items;
          if (!(!items || Object.keys(items).length === 0)) {
            _context14.next = 7;
            break;
          }
          return _context14.abrupt("return", res.status(400).json({
            userMessage: 'No items provided in the request body.'
          }));
        case 7:
          productIds = Object.keys(items);
          objectIdProductIds = productIds.map(function (id) {
            return new _mongoose["default"].Types.ObjectId(id);
          });
          _context14.next = 11;
          return _ProductVariant["default"].find({
            _id: {
              $in: objectIdProductIds
            }
          }).select('price');
        case 11:
          productVariants = _context14.sent;
          subTotal = 0;
          productPriceMap = new Map();
          productVariants.forEach(function (variant) {
            productPriceMap.set(variant._id.toString(), variant.price);
          });
          _i2 = 0, _productIds = productIds;
        case 16:
          if (!(_i2 < _productIds.length)) {
            _context14.next = 30;
            break;
          }
          productId = _productIds[_i2];
          quantity = Number(items[productId]);
          if (!(isNaN(quantity) || quantity <= 0)) {
            _context14.next = 21;
            break;
          }
          return _context14.abrupt("return", res.status(400).json({
            userMessage: "Invalid quantity for product ID ".concat(productId, ". Quantity must be a positive number.")
          }));
        case 21:
          price = productPriceMap.get(productId);
          if (!(price !== undefined)) {
            _context14.next = 26;
            break;
          }
          subTotal += Number(price) * quantity;
          _context14.next = 27;
          break;
        case 26:
          return _context14.abrupt("return", res.status(404).json({
            userMessage: "Product with ID ".concat(productId, " not found or invalid.")
          }));
        case 27:
          _i2++;
          _context14.next = 16;
          break;
        case 30:
          subTotal = Number(subTotal);
          _context14.next = 33;
          return Promise.all([_User["default"].findOne({
            _id: new _mongoose["default"].Types.ObjectId(userId)
          }).lean(), _redisconf.redisClient.hget('admindirective', 'deliveryfee'), _redisconf.redisClient.hget('admindirective', 'servicecharge'), _Checkout["default"].findOne({
            user_id: userId
          }).sort({
            created_at: -1
          }).lean()]);
        case 33:
          _yield$Promise$all3 = _context14.sent;
          _yield$Promise$all4 = _slicedToArray(_yield$Promise$all3, 4);
          validUser = _yield$Promise$all4[0];
          rawDeliveryFee = _yield$Promise$all4[1];
          rawServiceCharge = _yield$Promise$all4[2];
          latestCheckout = _yield$Promise$all4[3];
          if (validUser) {
            _context14.next = 41;
            break;
          }
          return _context14.abrupt("return", res.status(404).json({
            userMessage: 'User not found.'
          }));
        case 41:
          email = validUser.email, phoneNumber = validUser.phoneNumber;
          delivery_fee = parseFloat(rawDeliveryFee) || 0;
          service_charge = parseFloat(rawServiceCharge) || 0;
          finalTotal = delivery_fee + service_charge + subTotal;
          phone_number = (latestCheckout === null || latestCheckout === void 0 ? void 0 : latestCheckout.phone_number) || phoneNumber || '';
          delivery_address = (latestCheckout === null || latestCheckout === void 0 ? void 0 : latestCheckout.delivery_address) || '';
          deliveryDates = getNext7Days(); // Generate delivery dates
          delivery_date = deliveryDates[2]; // Select the 3rd day (index 2)
          newCheckoutDocument = new _Checkout["default"]({
            // Renamed for clarity
            user_id: new _mongoose["default"].Types.ObjectId(userId),
            delivery_address: delivery_address,
            delivery_fee: delivery_fee,
            service_charge: service_charge,
            phone_number: phone_number,
            subtotal: subTotal,
            delivery_date: delivery_date,
            total: finalTotal,
            cart_items: items
          });
          _context14.next = 52;
          return newCheckoutDocument.save();
        case 52:
          // Convert Mongoose document to a plain JavaScript object
          checkout = newCheckoutDocument.toObject();
          console.log('Checkout successfully created:');
          console.log('Subtotal:', subTotal);
          console.log('Delivery Fee:', delivery_fee);
          console.log('Service Charge:', service_charge);
          console.log('Final Total:', finalTotal);
          console.log('New Checkout Document (Mongoose):', newCheckoutDocument); // Mongoose object
          console.log('Checkout Object (Plain JS):', checkout); // Plain JS object

          res.status(201).json({
            message: 'Checkout successfully created.',
            checkout: _objectSpread(_objectSpread({}, checkout), {}, {
              deliveryDates: deliveryDates
            }) // Spread checkout object and add deliveryDates
          });
          _context14.next = 67;
          break;
        case 63:
          _context14.prev = 63;
          _context14.t0 = _context14["catch"](0);
          console.error('Error during checkout creation:', _context14.t0);
          next(_context14.t0);
        case 67:
        case "end":
          return _context14.stop();
      }
    }, _callee13, null, [[0, 63]]);
  }));
  return function (_x41, _x42, _x43) {
    return _ref13.apply(this, arguments);
  };
}());
shopperRoute.get('/shopper/checkout/get', _authMiddleware["default"], /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res, next) {
    var checkout_id, checkOutData, deliveryDates, checkout;
    return _regeneratorRuntime().wrap(function _callee14$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          checkout_id = req.query.checkout_id;
          if (checkout_id) {
            _context15.next = 4;
            break;
          }
          return _context15.abrupt("return", res.status(400).json({
            userMessage: 'Checkout ID is required.'
          }));
        case 4:
          if (_mongoose["default"].Types.ObjectId.isValid(checkout_id)) {
            _context15.next = 6;
            break;
          }
          return _context15.abrupt("return", res.status(400).json({
            userMessage: 'Invalid Checkout ID format.'
          }));
        case 6:
          _context15.next = 8;
          return _Checkout["default"].findOne({
            _id: new _mongoose["default"].Types.ObjectId(checkout_id)
          }).lean();
        case 8:
          checkOutData = _context15.sent;
          if (checkOutData) {
            _context15.next = 11;
            break;
          }
          return _context15.abrupt("return", res.status(404).json({
            userMessage: 'Checkout not found.'
          }));
        case 11:
          console.log('Retrieved Checkout Data (Plain JS):', checkOutData);
          deliveryDates = getNext7Days();
          checkout = checkOutData;
          res.status(200).json({
            message: 'Checkout data retrieved successfully.',
            checkout: _objectSpread(_objectSpread({}, checkout), {}, {
              deliveryDates: deliveryDates
            })
          });
          _context15.next = 21;
          break;
        case 17:
          _context15.prev = 17;
          _context15.t0 = _context15["catch"](0);
          console.error('Error retrieving checkout data:', _context15.t0);
          next(_context15.t0);
        case 21:
        case "end":
          return _context15.stop();
      }
    }, _callee14, null, [[0, 17]]);
  }));
  return function (_x44, _x45, _x46) {
    return _ref14.apply(this, arguments);
  };
}());
function getNext7Days() {
  var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var result = [];
  var now = new Date();
  var startOffset = now.getHours() >= 17 ? 1 : 0;
  for (var i = 0; i < 7; i++) {
    var currentDate = new Date();
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
var _default = exports["default"] = shopperRoute; //https://chatgpt.com/c/6819039c-9ad4-8005-8400-d2567db4dc3c