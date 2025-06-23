"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TelegramBotClass = void 0;
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
var fs = require('fs').promises;
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
          var telegramid, messageText, parts, args, command, arg1, arg2, isAdmin, isSuperAdmin, allowedPaymentMethods, paymentMethod, _allowedPaymentMethods, _paymentMethod, paymentMethodsStatus, responseMessage, method, status, amount, percent, deliveryFee, serviceCharge, adminIds, list, page, limit, skip, checkouts, workbook, worksheet, filePath, _checkouts, checkoutIds, usageCount, ttl, discount, i, _args$i$split, _args$i$split2, key, value, result, _yield$CouponClass$cr, code, expiresIn, coupon, codes, _list, types, _list2, _key, removed, _key2, users, _workbook, _worksheet, headers, _filePath, _t, _t2, _t3, _t4, _t5, _t6, _t7, _t8;
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
                return _context.a(2, _this.bot.sendMessage(telegramid, "\uD83D\uDCD8 *Admin Commands*:\n/createcoupontype <type> <ttl> [flat=500] [percentage=10] [freeDelivery=true]\n/generatecoupon <type>\n/getcoupontype <code>\n/couponusage <code>\n/listcoupons <type>\n/listcoupontypes\n/deletecouponcode <code>\n/deletecoupontype <type>\n\n/setdeliveryfee <amount>\n/setservicecharge <percent>\n/getdeliveryfee\n/getservicecharge\n\n\uD83D\uDD10 *Super Admin*:\n/listadmins\n/removeadmin <chat_id>\n/exportusers\n/viewcheckouts\n/disablepaymentmethod eg /disablepaymentmethod banipay or /disablepaymentmethod paystack\n/enablepaymentmethod eg /disablepaymentmethod banipay or /disablepaymentmethod paystack\n/getpaymentmethods\n"));
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
                if (!(command === '/disablepaymentmethod')) {
                  _context.n = 11;
                  break;
                }
                if (arg1) {
                  _context.n = 7;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, "\u26A0\uFE0F Usage: /disablepaymentmethod banipay or /disablepaymentmethod paystack"));
              case 7:
                allowedPaymentMethods = ['banipay', 'paystack'];
                paymentMethod = arg1.toLowerCase(); // Standardize to lowercase
                if (allowedPaymentMethods.includes(paymentMethod)) {
                  _context.n = 8;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, "\u26A0\uFE0F Invalid payment method. Please use 'banipay' or 'paystack'."));
              case 8:
                _context.p = 8;
                _context.n = 9;
                return _this.redisClient.hset('payment_methods_status', paymentMethod, 'disabled');
              case 9:
                return _context.a(2, _this.bot.sendMessage(telegramid, "\u2705 ".concat(arg1, " payment method has been disabled.")));
              case 10:
                _context.p = 10;
                _t = _context.v;
                console.error("Error disabling ".concat(paymentMethod, ":"), _t);
                return _context.a(2, _this.bot.sendMessage(telegramid, "\u274C Failed to disable ".concat(arg1, " payment method. Please try again.")));
              case 11:
                if (!(command === '/enablepaymentmethod')) {
                  _context.n = 16;
                  break;
                }
                if (arg1) {
                  _context.n = 12;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, "\u26A0\uFE0F Usage: /enablepaymentmethod banipay or /enablepaymentmethod paystack"));
              case 12:
                _allowedPaymentMethods = ['banipay', 'paystack'];
                _paymentMethod = arg1.toLowerCase(); // Standardize to lowercase
                if (_allowedPaymentMethods.includes(_paymentMethod)) {
                  _context.n = 13;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, "\u26A0\uFE0F Invalid payment method. Please use 'banipay' or 'paystack'."));
              case 13:
                _context.p = 13;
                _context.n = 14;
                return _this.redisClient.hset('payment_methods_status', _paymentMethod, 'enabled' // Set status to 'enabled'
                );
              case 14:
                return _context.a(2, _this.bot.sendMessage(telegramid, "\u2705 ".concat(arg1, " payment method has been enabled.")));
              case 15:
                _context.p = 15;
                _t2 = _context.v;
                console.error("Error enabling ".concat(_paymentMethod, ":"), _t2);
                return _context.a(2, _this.bot.sendMessage(telegramid, "\u274C Failed to enable ".concat(arg1, " payment method. Please try again.")));
              case 16:
                if (!(command === '/getpaymentmethods')) {
                  _context.n = 21;
                  break;
                }
                _context.p = 17;
                _context.n = 18;
                return _this.redisClient.hgetall('payment_methods_status');
              case 18:
                paymentMethodsStatus = _context.v;
                if (!(!paymentMethodsStatus || Object.keys(paymentMethodsStatus).length === 0)) {
                  _context.n = 19;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, 'ℹ️ No payment methods configured yet.'));
              case 19:
                responseMessage = '💳 *Payment Method Status:*\n\n';
                for (method in paymentMethodsStatus) {
                  status = paymentMethodsStatus[method];
                  responseMessage += "\u2022 ".concat(method, ": ").concat(status.charAt(0).toUpperCase() + status.slice(1), "\n");
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, responseMessage, {
                  parse_mode: 'Markdown'
                }));
              case 20:
                _context.p = 20;
                _t3 = _context.v;
                console.error('Error fetching payment methods status:', _t3);
                return _context.a(2, _this.bot.sendMessage(telegramid, '❌ Failed to retrieve payment methods status. Please try again.'));
              case 21:
                if (!(command === '/setdeliveryfee')) {
                  _context.n = 24;
                  break;
                }
                if (!(!arg1 || isNaN(parseFloat(arg1)))) {
                  _context.n = 22;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, '⚠️ Usage: /setdeliveryfee <amount> (e.g., /setdeliveryfee 1500)'));
              case 22:
                amount = parseFloat(arg1);
                _context.n = 23;
                return _this.redisClient.hset('admindirective', 'deliveryfee', amount.toString());
              case 23:
                return _context.a(2, _this.bot.sendMessage(telegramid, "\u2705 Delivery fee set to: ".concat(amount)));
              case 24:
                if (!(command === '/setservicecharge')) {
                  _context.n = 27;
                  break;
                }
                if (!(!arg1 || isNaN(parseFloat(arg1)))) {
                  _context.n = 25;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, '⚠️ Usage: /setservicecharge <percent> (e.g., /setservicecharge 10)'));
              case 25:
                percent = parseFloat(arg1);
                _context.n = 26;
                return _this.redisClient.hset('admindirective', 'servicecharge', percent.toString());
              case 26:
                return _context.a(2, _this.bot.sendMessage(telegramid, "\u2705 Service charge set to: ".concat(percent, "%")));
              case 27:
                if (!(command === '/getdeliveryfee')) {
                  _context.n = 30;
                  break;
                }
                _context.n = 28;
                return _this.redisClient.hget('admindirective', 'deliveryfee');
              case 28:
                deliveryFee = _context.v;
                if (!deliveryFee) {
                  _context.n = 29;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, "\uD83D\uDE9A Current delivery fee: ".concat(deliveryFee)));
              case 29:
                return _context.a(2, _this.bot.sendMessage(telegramid, 'ℹ️ Delivery fee is not set. Use /setdeliveryfee to set it.'));
              case 30:
                if (!(command === '/getservicecharge')) {
                  _context.n = 33;
                  break;
                }
                _context.n = 31;
                return _this.redisClient.hget('admindirective', 'servicecharge');
              case 31:
                serviceCharge = _context.v;
                if (!serviceCharge) {
                  _context.n = 32;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, "\uD83D\uDCCA Current service charge: ".concat(serviceCharge, "%")));
              case 32:
                return _context.a(2, _this.bot.sendMessage(telegramid, 'ℹ️ Service charge is not set. Use /setservicecharge to set it.'));
              case 33:
                if (!(command === '/listadmins')) {
                  _context.n = 38;
                  break;
                }
                if (isSuperAdmin) {
                  _context.n = 34;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, '🚫 Only Super Admin can list admins.'));
              case 34:
                _context.p = 34;
                _context.n = 35;
                return _this.redisClient.smembers(_this.admin_list_key);
              case 35:
                adminIds = _context.v;
                if (adminIds.length) {
                  _context.n = 36;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, '📭 No admins found.'));
              case 36:
                list = adminIds.map(function (id, i) {
                  return "".concat(i + 1, ". ").concat(id);
                }).join('\n');
                return _context.a(2, _this.bot.sendMessage(telegramid, "\uD83E\uDDD1\u200D\uD83D\uDCBC *Registered Admins:*\n".concat(list), {
                  parse_mode: 'Markdown'
                }));
              case 37:
                _context.p = 37;
                _t4 = _context.v;
                console.error('❌ Error listing admins:', _t4);
                return _context.a(2, _this.bot.sendMessage(telegramid, '❗ Failed to fetch admin list. Try again.'));
              case 38:
                if (!(command === '/viewcheckouts')) {
                  _context.n = 45;
                  break;
                }
                page = parseInt(arg1);
                if (isNaN(page) || page < 1) {
                  page = 1;
                }
                limit = 20;
                skip = (page - 1) * limit;
                _context.p = 39;
                _context.n = 40;
                return _Checkout["default"].find().populate({
                  path: 'user_id',
                  select: 'email phoneNumber'
                }).sort({
                  createdAt: -1
                }).skip(skip).limit(limit).lean();
              case 40:
                checkouts = _context.v;
                if (checkouts.length) {
                  _context.n = 41;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, "\uD83D\uDCED No checkouts found for page ".concat(page, ".")));
              case 41:
                workbook = new _exceljs["default"].Workbook();
                worksheet = workbook.addWorksheet("Page ".concat(page, " Checkouts")); // Define columns (headers) based on your checkout structure
                worksheet.columns = [{
                  header: 'Order ID',
                  key: '_id',
                  width: 25
                }, {
                  header: 'User Email',
                  key: 'userEmail',
                  width: 30
                }, {
                  header: 'User Phone Number',
                  key: 'userPhoneNumber',
                  width: 20
                }, {
                  header: 'Delivery Address',
                  key: 'delivery_address',
                  width: 40
                }, {
                  header: 'Delivery Date',
                  key: 'deliveryDateFormatted',
                  width: 20
                }, {
                  header: 'Delivery Instruction',
                  key: 'delivery_instruction',
                  width: 30
                }, {
                  header: 'Subtotal',
                  key: 'subtotal',
                  width: 15
                }, {
                  header: 'Delivery Fee',
                  key: 'delivery_fee',
                  width: 15
                }, {
                  header: 'Service Charge (%)',
                  key: 'service_charge',
                  width: 20
                }, {
                  header: 'Total Paid',
                  key: 'total',
                  width: 15
                }, {
                  header: 'Promo Code',
                  key: 'promo_code',
                  width: 20
                }, {
                  header: 'Discount Type',
                  key: 'discountType',
                  width: 15
                }, {
                  header: 'Discount Flat Amount',
                  key: 'discountFlat',
                  width: 20
                }, {
                  header: 'Discount Percentage',
                  key: 'discountPercentage',
                  width: 20
                }, {
                  header: 'Free Delivery',
                  key: 'freeDeliveryDiscount',
                  width: 15
                }, {
                  header: 'Cart Items (JSON)',
                  key: 'cart_items',
                  width: 50
                },
                // Stringified
                {
                  header: 'Created At',
                  key: 'created_at',
                  width: 25
                }];

                // Add rows with data mapping
                checkouts.forEach(function (checkout) {
                  var discountApplied = checkout.discount_applied || {};
                  worksheet.addRow({
                    _id: checkout._id.toString(),
                    userEmail: checkout.user_id ? checkout.user_id.email : 'N/A',
                    userPhoneNumber: checkout.user_id ? checkout.user_id.phoneNumber : 'N/A',
                    delivery_address: checkout.delivery_address,
                    deliveryDateFormatted: checkout.delivery_date ? "".concat(checkout.delivery_date.day, ", ").concat(checkout.delivery_date.date, " ").concat(checkout.delivery_date.month) : 'N/A',
                    delivery_instruction: checkout.delivery_instruction || '',
                    subtotal: checkout.subtotal,
                    delivery_fee: checkout.delivery_fee,
                    service_charge: checkout.service_charge,
                    total: checkout.total,
                    promo_code: checkout.promo_code || '',
                    discountType: discountApplied.coupon_type || '',
                    discountFlat: discountApplied.flat !== null ? discountApplied.flat : '',
                    discountPercentage: discountApplied.percentage !== null ? discountApplied.percentage : '',
                    freeDeliveryDiscount: discountApplied.freeDelivery ? 'Yes' : 'No',
                    cart_items: JSON.stringify(checkout.cart_items),
                    created_at: checkout.created_at ? checkout.created_at.toISOString() : ''
                  });
                });
                filePath = _path["default"].join('/tmp', "checkouts_page_".concat(page, "_").concat(Date.now(), ".xlsx"));
                _context.n = 42;
                return workbook.xlsx.writeFile(filePath);
              case 42:
                _context.n = 43;
                return _this.bot.sendDocument(telegramid, filePath, {
                  caption: "Here are the checkouts for page ".concat(page, ".")
                }, {
                  filename: "checkouts_page_".concat(page, ".xlsx"),
                  contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                });
              case 43:
                // Delete the file after sending
                fs.unlink(filePath)["catch"](function (err) {
                  return console.error('Error deleting file:', err);
                });
                _context.n = 45;
                break;
              case 44:
                _context.p = 44;
                _t5 = _context.v;
                console.error('❌ Error exporting checkouts:', _t5);
                return _context.a(2, _this.bot.sendMessage(telegramid, '❗ Failed to export checkouts. Please try again later.'));
              case 45:
                if (!(command === '/couponusage')) {
                  _context.n = 50;
                  break;
                }
                if (arg1) {
                  _context.n = 46;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, '⚠️ Usage: /couponusage <code>'));
              case 46:
                _context.n = 47;
                return _Checkout["default"].find({
                  promo_code: "".concat(arg1).toUpperCase()
                }).select('_id');
              case 47:
                _checkouts = _context.v;
                if (_checkouts.length) {
                  _context.n = 48;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, "\uD83D\uDCED No checkouts found using code '".concat(arg1, "'.")));
              case 48:
                checkoutIds = _checkouts.map(function (c) {
                  return c._id;
                });
                _context.n = 49;
                return _Order["default"].countDocuments({
                  checkout_id: {
                    $in: checkoutIds
                  }
                });
              case 49:
                usageCount = _context.v;
                return _context.a(2, _this.bot.sendMessage(telegramid, "\uD83D\uDCCA Coupon Code: *".concat(arg1, "*\n\uD83E\uDDFE Used in ").concat(usageCount, " order").concat(usageCount === 1 ? '' : 's', "."), {
                  parse_mode: 'Markdown'
                }));
              case 50:
                if (!(command === '/createcoupontype')) {
                  _context.n = 56;
                  break;
                }
                if (!(!arg1 || !arg2)) {
                  _context.n = 51;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, '⚠️ Usage: /createcoupontype <type> <ttl> [flat=500] [percentage=10] [freeDelivery=true]'));
              case 51:
                ttl = parseTtlToSeconds(arg2);
                if (ttl) {
                  _context.n = 52;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, '❌ Invalid TTL format. Use 30s, 15m, 1h, 2d, 1w'));
              case 52:
                discount = {};
                for (i = 2; i < args.length; i++) {
                  _args$i$split = args[i].split('='), _args$i$split2 = _slicedToArray(_args$i$split, 2), key = _args$i$split2[0], value = _args$i$split2[1];
                  if (key === 'flat') discount.flat = parseInt(value);else if (key === 'percentage') discount.percentage = parseInt(value);else if (key === 'freedelivery') discount.freeDelivery = value === 'true';
                }
                _context.p = 53;
                _context.n = 54;
                return _CouponClass["default"].createCouponType(arg1, ttl, discount);
              case 54:
                result = _context.v;
                return _context.a(2, _this.bot.sendMessage(telegramid, "\uD83C\uDF9F\uFE0F Created type '".concat(arg1, "' with TTL ").concat(ttl, "s and config: ").concat(JSON.stringify(result.config.discount))));
              case 55:
                _context.p = 55;
                _t6 = _context.v;
                return _context.a(2, _this.bot.sendMessage(telegramid, "\u274C Failed to create coupon type: ".concat(_t6.message)));
              case 56:
                if (!(command === '/generatecoupon')) {
                  _context.n = 59;
                  break;
                }
                if (arg1) {
                  _context.n = 57;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, '⚠️ Usage: /generatecoupon <type>'));
              case 57:
                _context.n = 58;
                return _CouponClass["default"].createCoupon(arg1);
              case 58:
                _yield$CouponClass$cr = _context.v;
                code = _yield$CouponClass$cr.code;
                expiresIn = _yield$CouponClass$cr.expiresIn;
                return _context.a(2, _this.bot.sendMessage(telegramid, "\u2705 Coupon Code: ".concat(code, "\n\u23F3 Expires in ").concat(expiresIn, " seconds")));
              case 59:
                if (!(command === '/getcoupontype')) {
                  _context.n = 63;
                  break;
                }
                if (arg1) {
                  _context.n = 60;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, '⚠️ Usage: /getcoupontype <code>'));
              case 60:
                _context.n = 61;
                return _CouponClass["default"].getCoupon(arg1);
              case 61:
                coupon = _context.v;
                if (coupon) {
                  _context.n = 62;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, '❌ Coupon not found or expired.'));
              case 62:
                return _context.a(2, _this.bot.sendMessage(telegramid, "\uD83C\uDFAB *Coupon Info*:\nType: ".concat(coupon.type, "\nCreated At: ").concat(new Date(coupon.createdAt).toLocaleString(), "\nRedeemed: ").concat(coupon.redeemed ? '✅ Yes' : '❌ No')));
              case 63:
                if (!(command === '/listcoupons')) {
                  _context.n = 67;
                  break;
                }
                if (arg1) {
                  _context.n = 64;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, '⚠️ Usage: /listcoupons <type>'));
              case 64:
                _context.n = 65;
                return _CouponClass["default"].listCoupons(arg1);
              case 65:
                codes = _context.v;
                if (codes.length) {
                  _context.n = 66;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, '📭 No coupons found under this type.'));
              case 66:
                _list = codes.map(function (code, i) {
                  return "".concat(i + 1, ". ").concat(code);
                }).join('\n');
                return _context.a(2, _this.bot.sendMessage(telegramid, "\uD83D\uDCCB Coupons under '".concat(arg1, "':\n").concat(_list)));
              case 67:
                if (!(command === '/listcoupontypes')) {
                  _context.n = 70;
                  break;
                }
                _context.n = 68;
                return _this.redisClient.smembers('coupon:types');
              case 68:
                types = _context.v;
                if (types.length) {
                  _context.n = 69;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, '📭 No coupon types found.'));
              case 69:
                _list2 = types.map(function (t, i) {
                  return "".concat(i + 1, ". ").concat(t);
                }).join('\n');
                return _context.a(2, _this.bot.sendMessage(telegramid, "\uD83C\uDF9F\uFE0F Available coupon types:\n".concat(_list2)));
              case 70:
                if (!(command === '/deletecouponcode')) {
                  _context.n = 73;
                  break;
                }
                if (arg1) {
                  _context.n = 71;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, '⚠️ Usage: /deletecouponcode <code>'));
              case 71:
                _key = "coupon:code:".concat(arg1);
                _context.n = 72;
                return _this.redisClient.del(_key);
              case 72:
                removed = _context.v;
                return _context.a(2, _this.bot.sendMessage(telegramid, removed ? "\uD83D\uDDD1\uFE0F Coupon code '".concat(arg1, "' deleted.") : "\u274C Code '".concat(arg1, "' not found.")));
              case 73:
                if (!(command === '/deletecoupontype')) {
                  _context.n = 77;
                  break;
                }
                if (arg1) {
                  _context.n = 74;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, '⚠️ Usage: /deletecoupontype <type>'));
              case 74:
                _key2 = "coupon:type:".concat(arg1);
                _context.n = 75;
                return _this.redisClient.del(_key2);
              case 75:
                _context.n = 76;
                return _this.redisClient.srem('coupon:types', arg1);
              case 76:
                return _context.a(2, _this.bot.sendMessage(telegramid, "\uD83D\uDDD1\uFE0F Coupon type '".concat(arg1, "' deleted.")));
              case 77:
                if (!(command === '/exportusers')) {
                  _context.n = 84;
                  break;
                }
                _context.p = 78;
                _context.n = 79;
                return _User["default"].find().lean();
              case 79:
                users = _context.v;
                if (users.length) {
                  _context.n = 80;
                  break;
                }
                return _context.a(2, _this.bot.sendMessage(telegramid, '📭 No users found.'));
              case 80:
                _workbook = new _exceljs["default"].Workbook();
                _worksheet = _workbook.addWorksheet('Users');
                headers = Object.keys(users[0]).filter(function (key) {
                  return !['password', '__v'].includes(key);
                });
                _worksheet.addRow(headers);
                users.forEach(function (user) {
                  var row = headers.map(function (h) {
                    var value = user[h];
                    return _typeof(value) === 'object' && value !== null ? JSON.stringify(value) : value;
                  });
                  _worksheet.addRow(row);
                });
                _filePath = _path["default"].join('/tmp', "users_".concat(Date.now(), ".xlsx"));
                _context.n = 81;
                return _workbook.xlsx.writeFile(_filePath);
              case 81:
                _context.n = 82;
                return _this.bot.sendDocument(telegramid, _filePath, {}, {
                  filename: 'users_export.xlsx',
                  contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                });
              case 82:
                fs.unlink(_filePath, function () {});
                _context.n = 84;
                break;
              case 83:
                _context.p = 83;
                _t7 = _context.v;
                console.error('❌ Error exporting users:', _t7);
                return _context.a(2, _this.bot.sendMessage(telegramid, '❗ Failed to export users. Try again later.'));
              case 84:
                _context.n = 86;
                break;
              case 85:
                _context.p = 85;
                _t8 = _context.v;
                console.error('Telegram bot error:', _t8);
                _context.n = 86;
                return _this.bot.sendMessage(telegramid, '❗ An error occurred. Please try again.');
              case 86:
                return _context.a(2);
            }
          }, _callee, null, [[78, 83], [53, 55], [39, 44], [34, 37], [17, 20], [13, 15], [8, 10], [1, 85]]);
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
        var adminIds, _iterator, _step, id, _t9, _t0, _t1;
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
              _t9 = _context2.v;
              console.error("\u274C Failed to send to ".concat(id, ":"), _t9);
            case 8:
              _context2.n = 4;
              break;
            case 9:
              _context2.n = 11;
              break;
            case 10:
              _context2.p = 10;
              _t0 = _context2.v;
              _iterator.e(_t0);
            case 11:
              _context2.p = 11;
              _iterator.f();
              return _context2.f(11);
            case 12:
              _context2.n = 14;
              break;
            case 13:
              _context2.p = 13;
              _t1 = _context2.v;
              console.error('❌ Error broadcasting to admins:', _t1);
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