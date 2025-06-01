"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _crypto = _interopRequireDefault(require("crypto"));
var _redisconf = require("../redisconf");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var CouponClass = /*#__PURE__*/function () {
  function CouponClass() {
    _classCallCheck(this, CouponClass);
  }
  return _createClass(CouponClass, null, [{
    key: "createCouponType",
    value: function () {
      var _createCouponType = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(type, ttlInSeconds) {
        var discount,
          key,
          exists,
          config,
          _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              discount = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
              if (!(!type || typeof type !== 'string')) {
                _context.next = 3;
                break;
              }
              throw new Error('Coupon type must be a non-empty string');
            case 3:
              if (!(!ttlInSeconds || typeof ttlInSeconds !== 'number' || ttlInSeconds <= 0)) {
                _context.next = 5;
                break;
              }
              throw new Error('TTL must be a positive number in seconds');
            case 5:
              if (!(_typeof(discount) !== 'object' || !discount.percentage && !discount.flat && !discount.freeDelivery)) {
                _context.next = 7;
                break;
              }
              throw new Error('At least one discount type must be specified');
            case 7:
              if (!(discount.percentage && (typeof discount.percentage !== 'number' || discount.percentage <= 0 || discount.percentage > 100))) {
                _context.next = 9;
                break;
              }
              throw new Error('Percentage discount must be a number between 1 and 100');
            case 9:
              if (!(discount.flat && (typeof discount.flat !== 'number' || discount.flat <= 0))) {
                _context.next = 11;
                break;
              }
              throw new Error('Flat discount must be a positive number');
            case 11:
              if (!(discount.freeDelivery && typeof discount.freeDelivery !== 'boolean')) {
                _context.next = 13;
                break;
              }
              throw new Error('freeDelivery must be a boolean value');
            case 13:
              key = "coupon:type:".concat(type);
              _context.next = 16;
              return _redisconf.redisClient.exists(key);
            case 16:
              exists = _context.sent;
              if (!exists) {
                _context.next = 19;
                break;
              }
              throw new Error('Coupon type already exists');
            case 19:
              config = {
                ttl: ttlInSeconds,
                createdAt: Date.now(),
                discount: {
                  percentage: discount.percentage || null,
                  flat: discount.flat || null,
                  freeDelivery: discount.freeDelivery || false
                }
              }; // Save the type config
              _context.next = 22;
              return _redisconf.redisClient.set(key, JSON.stringify(config));
            case 22:
              _context.next = 24;
              return _redisconf.redisClient.sadd('coupon:types', type);
            case 24:
              return _context.abrupt("return", {
                success: true,
                message: "Coupon type '".concat(type, "' created."),
                config: config
              });
            case 25:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function createCouponType(_x, _x2) {
        return _createCouponType.apply(this, arguments);
      }
      return createCouponType;
    }()
    /**
     * Generate a coupon under a specific type.
     * TTL is fetched from the type configuration.
     */
  }, {
    key: "createCoupon",
    value: (function () {
      var _createCoupon = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(type) {
        var typeKey, typeData, _JSON$parse, ttl, code, couponKey, metadata;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(!type || typeof type !== 'string')) {
                _context2.next = 2;
                break;
              }
              throw new Error('Coupon type is required and must be a string');
            case 2:
              typeKey = "coupon:type:".concat(type);
              _context2.next = 5;
              return _redisconf.redisClient.get(typeKey);
            case 5:
              typeData = _context2.sent;
              if (typeData) {
                _context2.next = 8;
                break;
              }
              throw new Error('Coupon type does not exist');
            case 8:
              _JSON$parse = JSON.parse(typeData), ttl = _JSON$parse.ttl;
              code = CouponClass._generateCode();
              couponKey = "coupon:code:".concat(code);
              metadata = {
                type: type,
                createdAt: Date.now(),
                redeemed: false
              };
              _context2.next = 14;
              return _redisconf.redisClient.set(couponKey, JSON.stringify(metadata), 'EX', ttl);
            case 14:
              _context2.next = 16;
              return _redisconf.redisClient.sadd("coupon:type:".concat(type, ":codes"), code);
            case 16:
              return _context2.abrupt("return", {
                code: code,
                type: type,
                expiresIn: ttl
              });
            case 17:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function createCoupon(_x3) {
        return _createCoupon.apply(this, arguments);
      }
      return createCoupon;
    }())
  }, {
    key: "getCoupon",
    value: function () {
      var _getCoupon = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(code) {
        var couponKey, raw;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              couponKey = "coupon:code:".concat(code);
              _context3.next = 3;
              return _redisconf.redisClient.get(couponKey);
            case 3:
              raw = _context3.sent;
              if (raw) {
                _context3.next = 6;
                break;
              }
              return _context3.abrupt("return", null);
            case 6:
              return _context3.abrupt("return", JSON.parse(raw));
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function getCoupon(_x4) {
        return _getCoupon.apply(this, arguments);
      }
      return getCoupon;
    }()
  }, {
    key: "redeemCoupon",
    value: function () {
      var _redeemCoupon = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(code) {
        var couponKey, raw, coupon;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              couponKey = "coupon:code:".concat(code);
              _context4.next = 3;
              return _redisconf.redisClient.get(couponKey);
            case 3:
              raw = _context4.sent;
              if (raw) {
                _context4.next = 6;
                break;
              }
              throw new Error('Invalid or expired coupon code');
            case 6:
              coupon = JSON.parse(raw);
              if (!coupon.redeemed) {
                _context4.next = 9;
                break;
              }
              throw new Error('Coupon already redeemed');
            case 9:
              coupon.redeemed = true;
              coupon.redeemedAt = Date.now();
              _context4.next = 13;
              return _redisconf.redisClient.set(couponKey, JSON.stringify(coupon), {
                KEEPTTL: true
              });
            case 13:
              return _context4.abrupt("return", {
                success: true,
                message: 'Coupon redeemed',
                coupon: coupon
              });
            case 14:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function redeemCoupon(_x5) {
        return _redeemCoupon.apply(this, arguments);
      }
      return redeemCoupon;
    }()
  }, {
    key: "listCoupons",
    value: function () {
      var _listCoupons = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(type) {
        var codes;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _redisconf.redisClient.smembers("coupon:type:".concat(type, ":codes"));
            case 2:
              codes = _context5.sent;
              return _context5.abrupt("return", codes);
            case 4:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function listCoupons(_x6) {
        return _listCoupons.apply(this, arguments);
      }
      return listCoupons;
    }()
  }, {
    key: "getCouponTypeConfig",
    value: function () {
      var _getCouponTypeConfig = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(type) {
        var typeKey, raw;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              typeKey = "coupon:type:".concat(type);
              _context6.next = 3;
              return _redisconf.redisClient.get(typeKey);
            case 3:
              raw = _context6.sent;
              return _context6.abrupt("return", raw ? JSON.parse(raw) : null);
            case 5:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      function getCouponTypeConfig(_x7) {
        return _getCouponTypeConfig.apply(this, arguments);
      }
      return getCouponTypeConfig;
    }()
  }, {
    key: "_generateCode",
    value: function _generateCode() {
      return _crypto["default"].randomBytes(5).toString('hex').toUpperCase();
    }
  }]);
}();
var _default = exports["default"] = CouponClass;