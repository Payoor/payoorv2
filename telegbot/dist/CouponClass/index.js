"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _crypto = _interopRequireDefault(require("crypto"));
var _redisconf = require("../redisconf");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
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
      var _createCouponType = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(type, ttlInSeconds) {
        var discount,
          key,
          exists,
          config,
          _args = arguments;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              discount = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
              if (!(!type || typeof type !== 'string')) {
                _context.n = 1;
                break;
              }
              throw new Error('Coupon type must be a non-empty string');
            case 1:
              if (!(!ttlInSeconds || typeof ttlInSeconds !== 'number' || ttlInSeconds <= 0)) {
                _context.n = 2;
                break;
              }
              throw new Error('TTL must be a positive number in seconds');
            case 2:
              if (!(_typeof(discount) !== 'object' || !discount.percentage && !discount.flat && !discount.freeDelivery)) {
                _context.n = 3;
                break;
              }
              throw new Error('At least one discount type must be specified');
            case 3:
              if (!(discount.percentage && (typeof discount.percentage !== 'number' || discount.percentage <= 0 || discount.percentage > 100))) {
                _context.n = 4;
                break;
              }
              throw new Error('Percentage discount must be a number between 1 and 100');
            case 4:
              if (!(discount.flat && (typeof discount.flat !== 'number' || discount.flat <= 0))) {
                _context.n = 5;
                break;
              }
              throw new Error('Flat discount must be a positive number');
            case 5:
              if (!(discount.freeDelivery && typeof discount.freeDelivery !== 'boolean')) {
                _context.n = 6;
                break;
              }
              throw new Error('freeDelivery must be a boolean value');
            case 6:
              key = "coupon:type:".concat(type);
              _context.n = 7;
              return _redisconf.redisClient.exists(key);
            case 7:
              exists = _context.v;
              if (!exists) {
                _context.n = 8;
                break;
              }
              throw new Error('Coupon type already exists');
            case 8:
              config = {
                ttl: ttlInSeconds,
                createdAt: Date.now(),
                discount: {
                  percentage: discount.percentage || null,
                  flat: discount.flat || null,
                  freeDelivery: discount.freeDelivery || false
                }
              }; // Save the type config
              _context.n = 9;
              return _redisconf.redisClient.set(key, JSON.stringify(config));
            case 9:
              _context.n = 10;
              return _redisconf.redisClient.sadd('coupon:types', type);
            case 10:
              return _context.a(2, {
                success: true,
                message: "Coupon type '".concat(type, "' created."),
                config: config
              });
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
      var _createCoupon = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(type) {
        var typeKey, typeData, _JSON$parse, ttl, code, couponKey, metadata;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              if (!(!type || typeof type !== 'string')) {
                _context2.n = 1;
                break;
              }
              throw new Error('Coupon type is required and must be a string');
            case 1:
              typeKey = "coupon:type:".concat(type);
              _context2.n = 2;
              return _redisconf.redisClient.get(typeKey);
            case 2:
              typeData = _context2.v;
              if (typeData) {
                _context2.n = 3;
                break;
              }
              throw new Error('Coupon type does not exist');
            case 3:
              _JSON$parse = JSON.parse(typeData), ttl = _JSON$parse.ttl;
              code = CouponClass._generateCode();
              couponKey = "coupon:code:".concat(code);
              metadata = {
                type: type,
                createdAt: Date.now(),
                redeemed: false
              };
              _context2.n = 4;
              return _redisconf.redisClient.set(couponKey, JSON.stringify(metadata), 'EX', ttl);
            case 4:
              _context2.n = 5;
              return _redisconf.redisClient.sadd("coupon:type:".concat(type, ":codes"), code);
            case 5:
              return _context2.a(2, {
                code: code,
                type: type,
                expiresIn: ttl
              });
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
      var _getCoupon = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(code) {
        var couponKey, raw;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              couponKey = "coupon:code:".concat(code);
              _context3.n = 1;
              return _redisconf.redisClient.get(couponKey);
            case 1:
              raw = _context3.v;
              if (raw) {
                _context3.n = 2;
                break;
              }
              return _context3.a(2, null);
            case 2:
              return _context3.a(2, JSON.parse(raw));
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
      var _redeemCoupon = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(code) {
        var couponKey, raw, coupon;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              couponKey = "coupon:code:".concat(code);
              _context4.n = 1;
              return _redisconf.redisClient.get(couponKey);
            case 1:
              raw = _context4.v;
              if (raw) {
                _context4.n = 2;
                break;
              }
              throw new Error('Invalid or expired coupon code');
            case 2:
              coupon = JSON.parse(raw);
              if (!coupon.redeemed) {
                _context4.n = 3;
                break;
              }
              throw new Error('Coupon already redeemed');
            case 3:
              coupon.redeemed = true;
              coupon.redeemedAt = Date.now();
              _context4.n = 4;
              return _redisconf.redisClient.set(couponKey, JSON.stringify(coupon), {
                KEEPTTL: true
              });
            case 4:
              return _context4.a(2, {
                success: true,
                message: 'Coupon redeemed',
                coupon: coupon
              });
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
      var _listCoupons = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(type) {
        var codes;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              _context5.n = 1;
              return _redisconf.redisClient.smembers("coupon:type:".concat(type, ":codes"));
            case 1:
              codes = _context5.v;
              return _context5.a(2, codes);
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
      var _getCouponTypeConfig = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(type) {
        var typeKey, raw;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              typeKey = "coupon:type:".concat(type);
              _context6.n = 1;
              return _redisconf.redisClient.get(typeKey);
            case 1:
              raw = _context6.v;
              return _context6.a(2, raw ? JSON.parse(raw) : null);
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