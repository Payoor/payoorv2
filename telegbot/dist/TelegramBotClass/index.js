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
var _Product = _interopRequireDefault(require("../models/Product"));
var _ProductVariant = _interopRequireDefault(require("../models/ProductVariant"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
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
var BOT_USERNAME = "alertpabot";
var PAYOOR_URL = process.env.PAYOOR_URL;
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
        var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(msg) {
          var _parts$, _args$, _args$2;
          var telegramid, messageText, parts, args, command, arg1, arg2, isAdmin, isSuperAdmin, amount, percent, deliveryFee, serviceCharge, adminIds, list, checkouts, checkoutDetailsList, _checkouts, checkoutIds, usageCount, ttl, discount, i, _args$i$split, _args$i$split2, key, value, result, _yield$CouponClass$cr, code, expiresIn, coupon, codes, _list, types, _list2, _key, removed, _key2, users, workbook, worksheet, headers, filePath, _t, _t2, _t3, _t4;
          return _regenerator().w(function (_context) {
            while (1) switch (_context.n) {
              case 0:
                // console.log(msg, 'test message here')
                telegramid = msg.chat.id.toString();
                messageText = msg.text.toLowerCase().trim();
                parts = messageText.split(' ');
                args = parts.slice(1);
                command = (_parts$ = parts[0]) === null || _parts$ === void 0 ? void 0 : _parts$.toLowerCase();
                arg1 = (_args$ = args[0]) === null || _args$ === void 0 ? void 0 : _args$.trim();
                arg2 = (_args$2 = args[1]) === null || _args$2 === void 0 ? void 0 : _args$2.trim();
                _context.p = 1;
                if (!(messageText === _this.admin_code.toLowerCase())) {
                  _context.n = 3;
                  break;
                }
                _context.n = 2;
                return _this.redisClient.sadd(_this.admin_list_key, telegramid);
              case 2:
                return _context.a(2, _this.bot.sendMessage(telegramid, '✅ Admin access granted. Use /help to view commands.'));
              case 3:
                _context.n = 4;
                return _this.redisClient.sismember(_this.admin_list_key, telegramid);
              case 4:
                isAdmin = _context.v;
                isSuperAdmin = telegramid === _this.super_admin_id;
                if (!(!isAdmin && !isSuperAdmin)) {
                  _context.n = 5;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, '🚫 Unauthorized. Send access code to register.'));
              case 5:
                if (!(command === '/help')) {
                  _context.n = 6;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, "\uD83D\uDCD8 *Admin Commands*:\n/createcoupontype <type> <ttl> [flat=500] [percentage=10] [freeDelivery=true]\n/generatecoupon <type>\n/getcoupontype <code>\n/couponusage <code>\n/listcoupons <type>\n/listcoupontypes\n/deletecouponcode <code>\n/deletecoupontype <type>\n\n/setdeliveryfee <amount>\n/setservicecharge <percent>\n/getdeliveryfee\n/getservicecharge\n\n\uD83D\uDD10 *Super Admin*:\n/listadmins\n/removeadmin <chat_id>\n/exportusers\n/viewcheckouts"));
              case 6:
                if (command === '/start') {
                  //console.log(command, 'this is a start')
                  //console.log(arg1)
                  /*if (arg1.startsWith('checkout_')) {
                    const id_substring = arg1.substring('checkout_'.length)
                    const checkout_item = await Checkout.findOne({ _id: id_substring })
                     const idAsString = checkout_item._id.toString();
                     console.log(idAsString)
                    console.log(`${PAYOOR_URL}/admin/checkout?checkout=${idAsString}`)
                  }*/
                }
                if (!(command === '/setdeliveryfee')) {
                  _context.n = 9;
                  break;
                }
                if (!(!arg1 || isNaN(parseFloat(arg1)))) {
                  _context.n = 7;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, '⚠️ Usage: /setdeliveryfee <amount> (e.g., /setdeliveryfee 1500)'));
              case 7:
                amount = parseFloat(arg1);
                _context.n = 8;
                return _this.redisClient.hset('admindirective', 'deliveryfee', amount.toString());
              case 8:
                return _context.a(2, _this.bot.sendMessage(telegramid, "\u2705 Delivery fee set to: ".concat(amount)));
              case 9:
                if (!(command === '/setservicecharge')) {
                  _context.n = 12;
                  break;
                }
                if (!(!arg1 || isNaN(parseFloat(arg1)))) {
                  _context.n = 10;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, '⚠️ Usage: /setservicecharge <percent> (e.g., /setservicecharge 10)'));
              case 10:
                percent = parseFloat(arg1);
                _context.n = 11;
                return _this.redisClient.hset('admindirective', 'servicecharge', percent.toString());
              case 11:
                return _context.a(2, _this.bot.sendMessage(telegramid, "\u2705 Service charge set to: ".concat(percent, "%")));
              case 12:
                if (!(command === '/getdeliveryfee')) {
                  _context.n = 15;
                  break;
                }
                _context.n = 13;
                return _this.redisClient.hget('admindirective', 'deliveryfee');
              case 13:
                deliveryFee = _context.v;
                if (!deliveryFee) {
                  _context.n = 14;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, "\uD83D\uDE9A Current delivery fee: ".concat(deliveryFee)));
              case 14:
                return _context.a(2, _this.bot.sendMessage(telegramid, 'ℹ️ Delivery fee is not set. Use /setdeliveryfee to set it.'));
              case 15:
                if (!(command === '/getservicecharge')) {
                  _context.n = 18;
                  break;
                }
                _context.n = 16;
                return _this.redisClient.hget('admindirective', 'servicecharge');
              case 16:
                serviceCharge = _context.v;
                if (!serviceCharge) {
                  _context.n = 17;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, "\uD83D\uDCCA Current service charge: ".concat(serviceCharge, "%")));
              case 17:
                return _context.a(2, _this.bot.sendMessage(telegramid, 'ℹ️ Service charge is not set. Use /setservicecharge to set it.'));
              case 18:
                if (!(command === '/listadmins')) {
                  _context.n = 23;
                  break;
                }
                if (isSuperAdmin) {
                  _context.n = 19;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, '🚫 Only Super Admin can list admins.'));
              case 19:
                _context.p = 19;
                _context.n = 20;
                return _this.redisClient.smembers(_this.admin_list_key);
              case 20:
                adminIds = _context.v;
                if (adminIds.length) {
                  _context.n = 21;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, '📭 No admins found.'));
              case 21:
                list = adminIds.map(function (id, i) {
                  return "".concat(i + 1, ". ").concat(id);
                }).join('\n');
                return _context.a(2, _this.bot.sendMessage(telegramid, "\uD83E\uDDD1\u200D\uD83D\uDCBC *Registered Admins:*\n".concat(list), {
                  parse_mode: 'Markdown'
                }));
              case 22:
                _context.p = 22;
                _t = _context.v;
                console.error('❌ Error listing admins:', _t);
                return _context.a(2, _this.bot.sendMessage(telegramid, '❗ Failed to fetch admin list. Try again.'));
              case 23:
                if (!(command === '/viewcheckouts')) {
                  _context.n = 25;
                  break;
                }
                _context.n = 24;
                return _Checkout["default"].find().populate({
                  path: 'user_id',
                  select: 'email phoneNumber'
                });
              case 24:
                checkouts = _context.v;
                //console.log(checkouts)
                checkoutDetailsList = checkouts.map(function (_ref2) {
                  var delivery_address = _ref2.delivery_address,
                    _id = _ref2._id,
                    user_id = _ref2.user_id,
                    delivery_date = _ref2.delivery_date,
                    delivery_instruction = _ref2.delivery_instruction,
                    phone_number = _ref2.phone_number,
                    cart_items = _ref2.cart_items;
                  var email = user_id ? user_id.email : 'N/A';
                  var userPhoneNumber = user_id ? user_id.phoneNumber : 'N/A';
                  return "\n                    User Email:\n                    ".concat(email, "\n                    User Phone Number:\n                    ").concat(userPhoneNumber, "  \n                    Delivery Address:\n                    ").concat(delivery_address, "\n\n                    <a href=\"https://shop.payoor.store/admin/checkout?checkout=").concat(_id.toString(), "\">View Order Details on Website</a> \n                    ---------------------------------------\n                ");
                }).join(''); //Cart Items: ${JSON.stringify(cart_items, null, 2)}
                console.log(checkoutDetailsList);
                _this.bot.sendMessage(telegramid, checkoutDetailsList, {
                  parse_mode: 'HTML'
                });
              case 25:
                if (!(command === '/couponusage')) {
                  _context.n = 30;
                  break;
                }
                if (arg1) {
                  _context.n = 26;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, '⚠️ Usage: /couponusage <code>'));
              case 26:
                _context.n = 27;
                return _Checkout["default"].find({
                  promo_code: "".concat(arg1).toUpperCase()
                }).select('_id');
              case 27:
                _checkouts = _context.v;
                if (_checkouts.length) {
                  _context.n = 28;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, "\uD83D\uDCED No checkouts found using code '".concat(arg1, "'.")));
              case 28:
                checkoutIds = _checkouts.map(function (c) {
                  return c._id;
                });
                _context.n = 29;
                return _Order["default"].countDocuments({
                  checkout_id: {
                    $in: checkoutIds
                  }
                });
              case 29:
                usageCount = _context.v;
                return _context.a(2, _this.bot.sendMessage(telegramid, "\uD83D\uDCCA Coupon Code: *".concat(arg1, "*\n\uD83E\uDDFE Used in ").concat(usageCount, " order").concat(usageCount === 1 ? '' : 's', "."), {
                  parse_mode: 'Markdown'
                }));
              case 30:
                if (!(command === '/createcoupontype')) {
                  _context.n = 36;
                  break;
                }
                if (!(!arg1 || !arg2)) {
                  _context.n = 31;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, '⚠️ Usage: /createcoupontype <type> <ttl> [flat=500] [percentage=10] [freeDelivery=true]'));
              case 31:
                ttl = parseTtlToSeconds(arg2);
                if (ttl) {
                  _context.n = 32;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, '❌ Invalid TTL format. Use 30s, 15m, 1h, 2d, 1w'));
              case 32:
                discount = {};
                for (i = 2; i < args.length; i++) {
                  _args$i$split = args[i].split('='), _args$i$split2 = _slicedToArray(_args$i$split, 2), key = _args$i$split2[0], value = _args$i$split2[1];
                  if (key === 'flat') discount.flat = parseInt(value);else if (key === 'percentage') discount.percentage = parseInt(value);else if (key === 'freedelivery') discount.freeDelivery = value === 'true';
                }
                _context.p = 33;
                _context.n = 34;
                return _CouponClass["default"].createCouponType(arg1, ttl, discount);
              case 34:
                result = _context.v;
                return _context.a(2, _this.bot.sendMessage(telegramid, "\uD83C\uDF9F\uFE0F Created type '".concat(arg1, "' with TTL ").concat(ttl, "s and config: ").concat(JSON.stringify(result.config.discount))));
              case 35:
                _context.p = 35;
                _t2 = _context.v;
                return _context.a(2, _this.bot.sendMessage(telegramid, "\u274C Failed to create coupon type: ".concat(_t2.message)));
              case 36:
                if (!(command === '/generatecoupon')) {
                  _context.n = 39;
                  break;
                }
                if (arg1) {
                  _context.n = 37;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, '⚠️ Usage: /generatecoupon <type>'));
              case 37:
                _context.n = 38;
                return _CouponClass["default"].createCoupon(arg1);
              case 38:
                _yield$CouponClass$cr = _context.v;
                code = _yield$CouponClass$cr.code;
                expiresIn = _yield$CouponClass$cr.expiresIn;
                return _context.a(2, _this.bot.sendMessage(telegramid, "\u2705 Coupon Code: ".concat(code, "\n\u23F3 Expires in ").concat(expiresIn, " seconds")));
              case 39:
                if (!(command === '/getcoupontype')) {
                  _context.n = 43;
                  break;
                }
                if (arg1) {
                  _context.n = 40;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, '⚠️ Usage: /getcoupontype <code>'));
              case 40:
                _context.n = 41;
                return _CouponClass["default"].getCoupon(arg1);
              case 41:
                coupon = _context.v;
                if (coupon) {
                  _context.n = 42;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, '❌ Coupon not found or expired.'));
              case 42:
                return _context.a(2, _this.bot.sendMessage(telegramid, "\uD83C\uDFAB *Coupon Info*:\nType: ".concat(coupon.type, "\nCreated At: ").concat(new Date(coupon.createdAt).toLocaleString(), "\nRedeemed: ").concat(coupon.redeemed ? '✅ Yes' : '❌ No')));
              case 43:
                if (!(command === '/listcoupons')) {
                  _context.n = 47;
                  break;
                }
                if (arg1) {
                  _context.n = 44;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, '⚠️ Usage: /listcoupons <type>'));
              case 44:
                _context.n = 45;
                return _CouponClass["default"].listCoupons(arg1);
              case 45:
                codes = _context.v;
                if (codes.length) {
                  _context.n = 46;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, '📭 No coupons found under this type.'));
              case 46:
                _list = codes.map(function (code, i) {
                  return "".concat(i + 1, ". ").concat(code);
                }).join('\n');
                return _context.a(2, _this.bot.sendMessage(telegramid, "\uD83D\uDCCB Coupons under '".concat(arg1, "':\n").concat(_list)));
              case 47:
                if (!(command === '/listcoupontypes')) {
                  _context.n = 50;
                  break;
                }
                _context.n = 48;
                return _this.redisClient.smembers('coupon:types');
              case 48:
                types = _context.v;
                if (types.length) {
                  _context.n = 49;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, '📭 No coupon types found.'));
              case 49:
                _list2 = types.map(function (t, i) {
                  return "".concat(i + 1, ". ").concat(t);
                }).join('\n');
                return _context.a(2, _this.bot.sendMessage(telegramid, "\uD83C\uDF9F\uFE0F Available coupon types:\n".concat(_list2)));
              case 50:
                if (!(command === '/deletecouponcode')) {
                  _context.n = 53;
                  break;
                }
                if (arg1) {
                  _context.n = 51;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, '⚠️ Usage: /deletecouponcode <code>'));
              case 51:
                _key = "coupon:code:".concat(arg1);
                _context.n = 52;
                return _this.redisClient.del(_key);
              case 52:
                removed = _context.v;
                return _context.a(2, _this.bot.sendMessage(telegramid, removed ? "\uD83D\uDDD1\uFE0F Coupon code '".concat(arg1, "' deleted.") : "\u274C Code '".concat(arg1, "' not found.")));
              case 53:
                if (!(command === '/deletecoupontype')) {
                  _context.n = 57;
                  break;
                }
                if (arg1) {
                  _context.n = 54;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, '⚠️ Usage: /deletecoupontype <type>'));
              case 54:
                _key2 = "coupon:type:".concat(arg1);
                _context.n = 55;
                return _this.redisClient.del(_key2);
              case 55:
                _context.n = 56;
                return _this.redisClient.srem('coupon:types', arg1);
              case 56:
                return _context.a(2, _this.bot.sendMessage(telegramid, "\uD83D\uDDD1\uFE0F Coupon type '".concat(arg1, "' deleted.")));
              case 57:
                if (!(command === '/exportusers')) {
                  _context.n = 64;
                  break;
                }
                _context.p = 58;
                _context.n = 59;
                return _User["default"].find().lean();
              case 59:
                users = _context.v;
                if (users.length) {
                  _context.n = 60;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, '📭 No users found.'));
              case 60:
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
                _context.n = 61;
                return workbook.xlsx.writeFile(filePath);
              case 61:
                _context.n = 62;
                return _this.bot.sendDocument(telegramid, filePath, {}, {
                  filename: 'users_export.xlsx',
                  contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                });
              case 62:
                _fs["default"].unlink(filePath, function () {});
                _context.n = 64;
                break;
              case 63:
                _context.p = 63;
                _t3 = _context.v;
                console.error('❌ Error exporting users:', _t3);
                return _context.a(2, _this.bot.sendMessage(telegramid, '❗ Failed to export users. Try again later.'));
              case 64:
                _context.n = 66;
                break;
              case 65:
                _context.p = 65;
                _t4 = _context.v;
                console.error('Telegram bot error:', _t4);
                _context.n = 66;
                return _this.bot.sendMessage(telegramid, '❗ An error occurred. Please try again.');
              case 66:
                return _context.a(2);
            }
          }, _callee, null, [[58, 63], [33, 35], [19, 22], [1, 65]]);
        }));
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "callBot",
    value: function () {
      var _callBot = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(message) {
        var adminIds, _iterator, _step, id, _t5, _t6, _t7;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              if (message !== null && message !== void 0 && message.length) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2);
            case 1:
              _context2.p = 1;
              _context2.n = 2;
              return this.redisClient.smembers(this.admin_list_key);
            case 2:
              adminIds = _context2.v;
              _iterator = _createForOfIteratorHelper(adminIds);
              _context2.p = 3;
              _iterator.s();
            case 4:
              if ((_step = _iterator.n()).done) {
                _context2.n = 9;
                break;
              }
              id = _step.value;
              _context2.p = 5;
              _context2.n = 6;
              return this.bot.sendMessage(id, message);
            case 6:
              _context2.n = 8;
              break;
            case 7:
              _context2.p = 7;
              _t5 = _context2.v;
              console.error("\u274C Failed to send to ".concat(id, ":"), _t5);
            case 8:
              _context2.n = 4;
              break;
            case 9:
              _context2.n = 11;
              break;
            case 10:
              _context2.p = 10;
              _t6 = _context2.v;
              _iterator.e(_t6);
            case 11:
              _context2.p = 11;
              _iterator.f();
              return _context2.f(11);
            case 12:
              _context2.n = 14;
              break;
            case 13:
              _context2.p = 13;
              _t7 = _context2.v;
              console.error('❌ Error broadcasting to admins:', _t7);
            case 14:
              return _context2.a(2);
          }
        }, _callee2, this, [[5, 7], [3, 10, 11, 12], [1, 13]]);
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