"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TelegramBotClass = void 0;
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
var _exceljs = _interopRequireDefault(require("exceljs"));
var _redisconf = require("../redisconf");
var _CouponClass = _interopRequireDefault(require("../CouponClass"));
var _Order = _interopRequireDefault(require("../models/Order"));
var _Checkout = _interopRequireDefault(require("../models/Checkout"));
var _User = _interopRequireDefault(require("../models/User"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var TelegramBot = require('node-telegram-bot-api');
function parseTtlToSeconds(input) {
  var match = input.match(/^([0-9]+)([smhdw])$/i);
  if (!match) return null;
  var value = parseInt(match[1]);
  var unit = match[2].toLowerCase();
  switch (unit) {
    case 's':
      return value;
    case 'm':
      return value * 60;
    case 'h':
      return value * 3600;
    case 'd':
      return value * 86400;
    case 'w':
      return value * 604800;
    default:
      return null;
  }
}
var TelegramBotClass = exports.TelegramBotClass = /*#__PURE__*/function () {
  function TelegramBotClass(redisClient) {
    _classCallCheck(this, TelegramBotClass);
    this.redisClient = redisClient;
    this.bot = new TelegramBot(process.env.TELEGRAM_TOKEN, {
      polling: true
    });
    this.admin_code = process.env.ADMIN_CODE;
    this.super_admin_id = process.env.SUPER_ADMIN_ID;
    this.admin_list_key = 'telegram:admin:chat_ids';
  }
  return _createClass(TelegramBotClass, [{
    key: "startBot",
    value: function startBot() {
      var _this = this;
      this.bot.on('message', /*#__PURE__*/function () {
        var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(msg) {
          var _parts$, _args$, _args$2;
          var telegramid, messageText, parts, args, command, arg1, arg2, isAdmin, isSuperAdmin, adminIds, list, checkouts, checkoutIds, usageCount, ttl, discount, i, _args$i$split, _args$i$split2, key, value, result, _yield$CouponClass$cr, code, expiresIn, coupon, codes, _list, types, _list2, _key, removed, _key2, users, workbook, worksheet, headers, filePath;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                telegramid = msg.chat.id.toString();
                messageText = msg.text.toLowerCase().trim();
                parts = messageText.split(' ');
                args = parts.slice(1);
                command = (_parts$ = parts[0]) === null || _parts$ === void 0 ? void 0 : _parts$.toLowerCase();
                arg1 = (_args$ = args[0]) === null || _args$ === void 0 ? void 0 : _args$.trim();
                arg2 = (_args$2 = args[1]) === null || _args$2 === void 0 ? void 0 : _args$2.trim();
                _context.prev = 7;
                if (!(messageText === _this.admin_code.toLowerCase())) {
                  _context.next = 12;
                  break;
                }
                _context.next = 11;
                return _this.redisClient.sadd(_this.admin_list_key, telegramid);
              case 11:
                return _context.abrupt("return", _this.bot.sendMessage(telegramid, '✅ Admin access granted. Use /help to view commands.'));
              case 12:
                _context.next = 14;
                return _this.redisClient.sismember(_this.admin_list_key, telegramid);
              case 14:
                isAdmin = _context.sent;
                isSuperAdmin = telegramid === _this.super_admin_id;
                if (!(!isAdmin && !isSuperAdmin)) {
                  _context.next = 18;
                  break;
                }
                return _context.abrupt("return", _this.bot.sendMessage(telegramid, '🚫 Unauthorized. Send access code to register.'));
              case 18:
                if (!(command === '/help')) {
                  _context.next = 20;
                  break;
                }
                return _context.abrupt("return", _this.bot.sendMessage(telegramid, "\uD83D\uDCD8 *Admin Commands*:\n/createcoupontype <type> <ttl> [flat=500] [percentage=10] [freeDelivery=true]\n/generatecoupon <type>\n/getcoupontype <code>\n/couponusage <code>\n/listcoupons <type>\n/listcoupontypes\n/deletecouponcode <code>\n/deletecoupontype <type>\n\n/setdeliveryfee <amount>\n/setservicecharge <percent>\n/getdeliveryfee\n/getservicecharge\n\n\uD83D\uDD10 *Super Admin*:\n/listadmins\n/removeadmin <chat_id>\n/exportusers"));
              case 20:
                if (!(command === '/listadmins')) {
                  _context.next = 37;
                  break;
                }
                if (isSuperAdmin) {
                  _context.next = 23;
                  break;
                }
                return _context.abrupt("return", _this.bot.sendMessage(telegramid, '🚫 Only Super Admin can list admins.'));
              case 23:
                _context.prev = 23;
                _context.next = 26;
                return _this.redisClient.smembers(_this.admin_list_key);
              case 26:
                adminIds = _context.sent;
                if (adminIds.length) {
                  _context.next = 29;
                  break;
                }
                return _context.abrupt("return", _this.bot.sendMessage(telegramid, '📭 No admins found.'));
              case 29:
                list = adminIds.map(function (id, i) {
                  return "".concat(i + 1, ". ").concat(id);
                }).join('\n');
                return _context.abrupt("return", _this.bot.sendMessage(telegramid, "\uD83E\uDDD1\u200D\uD83D\uDCBC *Registered Admins:*\n".concat(list), {
                  parse_mode: 'Markdown'
                }));
              case 33:
                _context.prev = 33;
                _context.t0 = _context["catch"](23);
                console.error('❌ Error listing admins:', _context.t0);
                return _context.abrupt("return", _this.bot.sendMessage(telegramid, '❗ Failed to fetch admin list. Try again.'));
              case 37:
                if (!(command === '/couponusage')) {
                  _context.next = 50;
                  break;
                }
                if (arg1) {
                  _context.next = 40;
                  break;
                }
                return _context.abrupt("return", _this.bot.sendMessage(telegramid, '⚠️ Usage: /couponusage <code>'));
              case 40:
                _context.next = 42;
                return _Checkout["default"].find({
                  promo_code: "".concat(arg1).toUpperCase()
                }).select('_id');
              case 42:
                checkouts = _context.sent;
                if (checkouts.length) {
                  _context.next = 45;
                  break;
                }
                return _context.abrupt("return", _this.bot.sendMessage(telegramid, "\uD83D\uDCED No checkouts found using code '".concat(arg1, "'.")));
              case 45:
                checkoutIds = checkouts.map(function (c) {
                  return c._id;
                });
                _context.next = 48;
                return _Order["default"].countDocuments({
                  checkout_id: {
                    $in: checkoutIds
                  }
                });
              case 48:
                usageCount = _context.sent;
                return _context.abrupt("return", _this.bot.sendMessage(telegramid, "\uD83D\uDCCA Coupon Code: *".concat(arg1, "*\n\uD83E\uDDFE Used in ").concat(usageCount, " order").concat(usageCount === 1 ? '' : 's', "."), {
                  parse_mode: 'Markdown'
                }));
              case 50:
                if (!(command === '/createcoupontype')) {
                  _context.next = 68;
                  break;
                }
                if (!(!arg1 || !arg2)) {
                  _context.next = 53;
                  break;
                }
                return _context.abrupt("return", _this.bot.sendMessage(telegramid, '⚠️ Usage: /createcoupontype <type> <ttl> [flat=500] [percentage=10] [freeDelivery=true]'));
              case 53:
                ttl = parseTtlToSeconds(arg2);
                if (ttl) {
                  _context.next = 56;
                  break;
                }
                return _context.abrupt("return", _this.bot.sendMessage(telegramid, '❌ Invalid TTL format. Use 30s, 15m, 1h, 2d, 1w'));
              case 56:
                discount = {};
                for (i = 2; i < args.length; i++) {
                  _args$i$split = args[i].split('='), _args$i$split2 = _slicedToArray(_args$i$split, 2), key = _args$i$split2[0], value = _args$i$split2[1];
                  if (key === 'flat') discount.flat = parseInt(value);else if (key === 'percentage') discount.percentage = parseInt(value);else if (key === 'freedelivery') discount.freeDelivery = value === 'true';
                }
                _context.prev = 58;
                _context.next = 61;
                return _CouponClass["default"].createCouponType(arg1, ttl, discount);
              case 61:
                result = _context.sent;
                return _context.abrupt("return", _this.bot.sendMessage(telegramid, "\uD83C\uDF9F\uFE0F Created type '".concat(arg1, "' with TTL ").concat(ttl, "s and config: ").concat(JSON.stringify(result.config.discount))));
              case 65:
                _context.prev = 65;
                _context.t1 = _context["catch"](58);
                return _context.abrupt("return", _this.bot.sendMessage(telegramid, "\u274C Failed to create coupon type: ".concat(_context.t1.message)));
              case 68:
                if (!(command === '/generatecoupon')) {
                  _context.next = 77;
                  break;
                }
                if (arg1) {
                  _context.next = 71;
                  break;
                }
                return _context.abrupt("return", _this.bot.sendMessage(telegramid, '⚠️ Usage: /generatecoupon <type>'));
              case 71:
                _context.next = 73;
                return _CouponClass["default"].createCoupon(arg1);
              case 73:
                _yield$CouponClass$cr = _context.sent;
                code = _yield$CouponClass$cr.code;
                expiresIn = _yield$CouponClass$cr.expiresIn;
                return _context.abrupt("return", _this.bot.sendMessage(telegramid, "\u2705 Coupon Code: ".concat(code, "\n\u23F3 Expires in ").concat(expiresIn, " seconds")));
              case 77:
                if (!(command === '/getcoupontype')) {
                  _context.next = 86;
                  break;
                }
                if (arg1) {
                  _context.next = 80;
                  break;
                }
                return _context.abrupt("return", _this.bot.sendMessage(telegramid, '⚠️ Usage: /getcoupontype <code>'));
              case 80:
                _context.next = 82;
                return _CouponClass["default"].getCoupon(arg1);
              case 82:
                coupon = _context.sent;
                if (coupon) {
                  _context.next = 85;
                  break;
                }
                return _context.abrupt("return", _this.bot.sendMessage(telegramid, '❌ Coupon not found or expired.'));
              case 85:
                return _context.abrupt("return", _this.bot.sendMessage(telegramid, "\uD83C\uDFAB *Coupon Info*:\nType: ".concat(coupon.type, "\nCreated At: ").concat(new Date(coupon.createdAt).toLocaleString(), "\nRedeemed: ").concat(coupon.redeemed ? '✅ Yes' : '❌ No')));
              case 86:
                if (!(command === '/listcoupons')) {
                  _context.next = 96;
                  break;
                }
                if (arg1) {
                  _context.next = 89;
                  break;
                }
                return _context.abrupt("return", _this.bot.sendMessage(telegramid, '⚠️ Usage: /listcoupons <type>'));
              case 89:
                _context.next = 91;
                return _CouponClass["default"].listCoupons(arg1);
              case 91:
                codes = _context.sent;
                if (codes.length) {
                  _context.next = 94;
                  break;
                }
                return _context.abrupt("return", _this.bot.sendMessage(telegramid, '📭 No coupons found under this type.'));
              case 94:
                _list = codes.map(function (code, i) {
                  return "".concat(i + 1, ". ").concat(code);
                }).join('\n');
                return _context.abrupt("return", _this.bot.sendMessage(telegramid, "\uD83D\uDCCB Coupons under '".concat(arg1, "':\n").concat(_list)));
              case 96:
                if (!(command === '/listcoupontypes')) {
                  _context.next = 104;
                  break;
                }
                _context.next = 99;
                return _this.redisClient.smembers('coupon:types');
              case 99:
                types = _context.sent;
                if (types.length) {
                  _context.next = 102;
                  break;
                }
                return _context.abrupt("return", _this.bot.sendMessage(telegramid, '📭 No coupon types found.'));
              case 102:
                _list2 = types.map(function (t, i) {
                  return "".concat(i + 1, ". ").concat(t);
                }).join('\n');
                return _context.abrupt("return", _this.bot.sendMessage(telegramid, "\uD83C\uDF9F\uFE0F Available coupon types:\n".concat(_list2)));
              case 104:
                if (!(command === '/deletecouponcode')) {
                  _context.next = 112;
                  break;
                }
                if (arg1) {
                  _context.next = 107;
                  break;
                }
                return _context.abrupt("return", _this.bot.sendMessage(telegramid, '⚠️ Usage: /deletecouponcode <code>'));
              case 107:
                _key = "coupon:code:".concat(arg1);
                _context.next = 110;
                return _this.redisClient.del(_key);
              case 110:
                removed = _context.sent;
                return _context.abrupt("return", _this.bot.sendMessage(telegramid, removed ? "\uD83D\uDDD1\uFE0F Coupon code '".concat(arg1, "' deleted.") : "\u274C Code '".concat(arg1, "' not found.")));
              case 112:
                if (!(command === '/deletecoupontype')) {
                  _context.next = 121;
                  break;
                }
                if (arg1) {
                  _context.next = 115;
                  break;
                }
                return _context.abrupt("return", _this.bot.sendMessage(telegramid, '⚠️ Usage: /deletecoupontype <type>'));
              case 115:
                _key2 = "coupon:type:".concat(arg1);
                _context.next = 118;
                return _this.redisClient.del(_key2);
              case 118:
                _context.next = 120;
                return _this.redisClient.srem('coupon:types', arg1);
              case 120:
                return _context.abrupt("return", _this.bot.sendMessage(telegramid, "\uD83D\uDDD1\uFE0F Coupon type '".concat(arg1, "' deleted.")));
              case 121:
                if (!(command === '/exportusers')) {
                  _context.next = 145;
                  break;
                }
                _context.prev = 122;
                _context.next = 125;
                return _User["default"].find().lean();
              case 125:
                users = _context.sent;
                if (users.length) {
                  _context.next = 128;
                  break;
                }
                return _context.abrupt("return", _this.bot.sendMessage(telegramid, '📭 No users found.'));
              case 128:
                workbook = new _exceljs["default"].Workbook();
                worksheet = workbook.addWorksheet('Users');
                headers = Object.keys(users[0]).filter(function (key) {
                  return !['password', '__v'].includes(key);
                });
                worksheet.addRow(headers);
                users.forEach(function (user) {
                  var row = headers.map(function (h) {
                    var value = user[h];
                    return _typeof(value) === 'object' && value !== null ? JSON.stringify(value) : value;
                  });
                  worksheet.addRow(row);
                });
                filePath = _path["default"].join('/tmp', "users_".concat(Date.now(), ".xlsx"));
                _context.next = 136;
                return workbook.xlsx.writeFile(filePath);
              case 136:
                _context.next = 138;
                return _this.bot.sendDocument(telegramid, filePath, {}, {
                  filename: 'users_export.xlsx',
                  contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                });
              case 138:
                _fs["default"].unlink(filePath, function () {});
                _context.next = 145;
                break;
              case 141:
                _context.prev = 141;
                _context.t2 = _context["catch"](122);
                console.error('❌ Error exporting users:', _context.t2);
                return _context.abrupt("return", _this.bot.sendMessage(telegramid, '❗ Failed to export users. Try again later.'));
              case 145:
                _context.next = 152;
                break;
              case 147:
                _context.prev = 147;
                _context.t3 = _context["catch"](7);
                console.error('Telegram bot error:', _context.t3);
                _context.next = 152;
                return _this.bot.sendMessage(telegramid, '❗ An error occurred. Please try again.');
              case 152:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[7, 147], [23, 33], [58, 65], [122, 141]]);
        }));
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "callBot",
    value: function () {
      var _callBot = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(message) {
        var adminIds, _iterator, _step, id;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (message !== null && message !== void 0 && message.length) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return");
            case 2:
              _context2.prev = 2;
              _context2.next = 5;
              return this.redisClient.smembers(this.admin_list_key);
            case 5:
              adminIds = _context2.sent;
              _iterator = _createForOfIteratorHelper(adminIds);
              _context2.prev = 7;
              _iterator.s();
            case 9:
              if ((_step = _iterator.n()).done) {
                _context2.next = 21;
                break;
              }
              id = _step.value;
              _context2.prev = 11;
              _context2.next = 14;
              return this.bot.sendMessage(id, message);
            case 14:
              _context2.next = 19;
              break;
            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](11);
              console.error("\u274C Failed to send to ".concat(id, ":"), _context2.t0);
            case 19:
              _context2.next = 9;
              break;
            case 21:
              _context2.next = 26;
              break;
            case 23:
              _context2.prev = 23;
              _context2.t1 = _context2["catch"](7);
              _iterator.e(_context2.t1);
            case 26:
              _context2.prev = 26;
              _iterator.f();
              return _context2.finish(26);
            case 29:
              _context2.next = 34;
              break;
            case 31:
              _context2.prev = 31;
              _context2.t2 = _context2["catch"](2);
              console.error('❌ Error broadcasting to admins:', _context2.t2);
            case 34:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[2, 31], [7, 23, 26, 29], [11, 16]]);
      }));
      function callBot(_x2) {
        return _callBot.apply(this, arguments);
      }
      return callBot;
    }()
  }]);
}();
var telegramBot = new TelegramBotClass(_redisconf.redisClient);
telegramBot.startBot();
var _default = exports["default"] = telegramBot;