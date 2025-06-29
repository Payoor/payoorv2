"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _resend = require("resend");
var _speakeasy = _interopRequireDefault(require("speakeasy"));
var _crypto = _interopRequireDefault(require("crypto"));
var _RedisManager = _interopRequireDefault(require("../RedisManager"));
var _User = _interopRequireDefault(require("../models/User"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
require('dotenv').config();
var resend = new _resend.Resend("".concat(process.env.RESEND_API_KEY));
var AuthClass = /*#__PURE__*/function () {
  function AuthClass() {
    _classCallCheck(this, AuthClass);
  }
  return _createClass(AuthClass, null, [{
    key: "genOtp",
    value: function () {
      var _genOtp = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(identifier) {
        var secret, token;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(!identifier || typeof identifier !== 'string')) {
                _context.next = 2;
                break;
              }
              throw new Error('Identifier is required and must be a string');
            case 2:
              secret = _speakeasy["default"].generateSecret();
              token = _speakeasy["default"].totp({
                secret: secret.base32
              });
              return _context.abrupt("return", token);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function genOtp(_x) {
        return _genOtp.apply(this, arguments);
      }
      return genOtp;
    }()
  }, {
    key: "sendEmailOtp",
    value: function () {
      var _sendEmailOtp = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res, next) {
        var identifier, otp, data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              identifier = req.body.identifier;
              console.log('Received identifier:', identifier);
              if (identifier) {
                _context2.next = 5;
                break;
              }
              return _context2.abrupt("return", res.status(400).json({
                userMessage: 'Identifier is required'
              }));
            case 5:
              _context2.next = 7;
              return AuthClass.genOtp(identifier);
            case 7:
              otp = _context2.sent;
              _context2.next = 10;
              return AuthClass.saveOtpToIdentifier(otp, identifier, next);
            case 10:
              _context2.next = 12;
              return resend.emails.send({
                from: 'Payoor <hello@otp.payoor.store>',
                to: ["".concat(identifier)],
                subject: 'Otp from Payoor',
                html: "\n      <!DOCTYPE html>\n      <html>\n        <head>\n          <meta charset=\"UTF-8\">\n          <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n          <title>Your Verification Code</title>\n        </head>\n        <body style=\"margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;\">\n          <table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" style=\"width: 100%; background-color: #f4f4f4; padding: 20px;\">\n            <tr>\n              <td align=\"center\">\n                <table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" style=\"max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);\">\n                  <!-- Header -->\n                  <tr>\n                    <td style=\"background-color: rgba(36, 155, 72, 1); padding: 30px 0; text-align: center;\">\n                      \n                    </td>\n                  </tr>\n                  \n                  <!-- Content -->\n                  <tr>\n                    <td style=\"padding: 40px 30px;\">\n                      <h1 style=\"margin: 0 0 20px; color: #333333; font-size: 24px; font-weight: bold;\">\n                        Verification Code\n                      </h1>\n                      <p style=\"margin: 0 0 30px; color: #666666; font-size: 16px; line-height: 24px;\">\n                        To complete your verification, please use the following code:\n                      </p>\n                      <div style=\"background-color: #f8f8f8; border-radius: 6px; padding: 20px; text-align: center; margin-bottom: 30px;\">\n                        <span style=\"font-family: monospace; font-size: 32px; font-weight: bold; letter-spacing: 4px; color: rgba(36, 155, 72, 1);\">\n                          ".concat(otp, "\n                        </span>\n                      </div>\n                      <p style=\"margin: 0 0 30px; color: #666666; font-size: 16px; line-height: 24px;\">\n                        This code will expire in 10 minutes for security purposes. If you didn't request this code, please ignore this email.\n                      </p>\n                      <p style=\"margin: 0; color: #666666; font-size: 14px; line-height: 20px;\">\n                        For security reasons, please do not share this code with anyone.\n                      </p>\n                    </td>\n                  </tr>\n                  \n                  <!-- Footer -->\n                  <tr>\n                    <td style=\"padding: 20px 30px; background-color: #f8f8f8; text-align: center;\">\n                      <p style=\"margin: 0; color: #999999; font-size: 14px;\">\n                        This is an automated message, please do not reply to this email.\n                      </p>\n                      <p style=\"margin: 10px 0 0; color: #999999; font-size: 14px;\">\n                        \xA9 2025 Payoor. All rights reserved.\n                      </p>\n                    </td>\n                  </tr>\n                </table>\n              </td>\n            </tr>\n          </table>\n        </body>\n      </html>\n    ")
              });
            case 12:
              data = _context2.sent;
              console.log(data, 'email send data');
              res.status(200).json({
                message: 'Authentication successful'
              });
              _context2.next = 20;
              break;
            case 17:
              _context2.prev = 17;
              _context2.t0 = _context2["catch"](0);
              next(_context2.t0);
            case 20:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 17]]);
      }));
      function sendEmailOtp(_x2, _x3, _x4) {
        return _sendEmailOtp.apply(this, arguments);
      }
      return sendEmailOtp;
    }()
  }, {
    key: "saveOtpToIdentifier",
    value: function () {
      var _saveOtpToIdentifier = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(otp, identifier, next) {
        var key, expirationSeconds;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              if (!(!otp || !identifier)) {
                _context3.next = 3;
                break;
              }
              throw new Error('OTP and identifier are required');
            case 3:
              key = "otp:code:".concat(hashOtp(otp));
              expirationSeconds = 600;
              _context3.next = 7;
              return _RedisManager["default"].setItem({
                key: key,
                item: identifier.toLowerCase().trim(),
                expiration: expirationSeconds
              });
            case 7:
              console.log("Mapped hashed OTP to identifier. Key: ".concat(key));
              return _context3.abrupt("return", true);
            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](0);
              console.error('[saveOtpToIdentifier] Error:', _context3.t0);
              next(_context3.t0);
            case 15:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 11]]);
      }));
      function saveOtpToIdentifier(_x5, _x6, _x7) {
        return _saveOtpToIdentifier.apply(this, arguments);
      }
      return saveOtpToIdentifier;
    }()
  }, {
    key: "verifyOtp",
    value: function () {
      var _verifyOtp = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res, next) {
        var submittedOtp, hashedKey, identifier, user, type, token;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              submittedOtp = req.body.submittedOtp;
              if (submittedOtp) {
                _context4.next = 4;
                break;
              }
              return _context4.abrupt("return", res.status(400).json({
                success: false,
                userMessage: 'OTP is required'
              }));
            case 4:
              hashedKey = "otp:code:".concat(hashOtp(submittedOtp));
              _context4.prev = 5;
              console.time('[verifyOtp] Redis GET');
              _context4.next = 9;
              return _RedisManager["default"].getItem(hashedKey);
            case 9:
              identifier = _context4.sent;
              console.timeEnd('[verifyOtp] Redis GET');
              _context4.next = 17;
              break;
            case 13:
              _context4.prev = 13;
              _context4.t0 = _context4["catch"](5);
              console.error('[verifyOtp] Redis GET failed:', _context4.t0);
              return _context4.abrupt("return", next(_context4.t0));
            case 17:
              if (identifier) {
                _context4.next = 19;
                break;
              }
              return _context4.abrupt("return", res.status(401).json({
                success: false,
                userMessage: 'OTP expired or invalid'
              }));
            case 19:
              _context4.prev = 19;
              console.time('[verifyOtp] Mongo FIND');
              _context4.next = 23;
              return _User["default"].findByIdentifier(identifier);
            case 23:
              user = _context4.sent;
              console.timeEnd('[verifyOtp] Mongo FIND');
              _context4.next = 31;
              break;
            case 27:
              _context4.prev = 27;
              _context4.t1 = _context4["catch"](19);
              console.error('[verifyOtp] MongoDB query failed:', _context4.t1);
              return _context4.abrupt("return", next(_context4.t1));
            case 31:
              if (user) {
                _context4.next = 54;
                break;
              }
              type = identifierType(identifier);
              console.log('[verifyOtp] Creating new user of type:', type);
              _context4.prev = 34;
              if (!(type === 'email')) {
                _context4.next = 41;
                break;
              }
              _context4.next = 38;
              return _User["default"].create({
                email: identifier
              });
            case 38:
              user = _context4.sent;
              _context4.next = 48;
              break;
            case 41:
              if (!(type === 'phone')) {
                _context4.next = 47;
                break;
              }
              _context4.next = 44;
              return _User["default"].create({
                phoneNumber: identifier
              });
            case 44:
              user = _context4.sent;
              _context4.next = 48;
              break;
            case 47:
              return _context4.abrupt("return", res.status(400).json({
                success: false,
                userMessage: 'Identifier is neither email nor phone number'
              }));
            case 48:
              _context4.next = 54;
              break;
            case 50:
              _context4.prev = 50;
              _context4.t2 = _context4["catch"](34);
              console.error('[verifyOtp] User creation failed:', _context4.t2);
              return _context4.abrupt("return", next(_context4.t2));
            case 54:
              _context4.prev = 54;
              console.time('[verifyOtp] Generate Token');
              _context4.next = 58;
              return user.generateAuthToken();
            case 58:
              token = _context4.sent;
              console.timeEnd('[verifyOtp] Generate Token');
              _context4.next = 65;
              break;
            case 62:
              _context4.prev = 62;
              _context4.t3 = _context4["catch"](54);
              return _context4.abrupt("return", next(_context4.t3));
            case 65:
              _context4.prev = 65;
              console.time('[verifyOtp] Redis SETEX');
              _context4.next = 69;
              return _RedisManager["default"].setItem({
                key: "auth:session:".concat(token),
                item: user._id.toString(),
                expiration: 2592000
              });
            case 69:
              console.timeEnd('[verifyOtp] Redis SETEX');
              console.log('[verifyOtp] Cleaning up OTP key');
              _context4.next = 73;
              return _RedisManager["default"].deleteItem(hashedKey);
            case 73:
              _context4.next = 79;
              break;
            case 75:
              _context4.prev = 75;
              _context4.t4 = _context4["catch"](65);
              console.error('[verifyOtp] Redis SETEX/DEL failed:', _context4.t4);
              return _context4.abrupt("return", next(_context4.t4));
            case 79:
              return _context4.abrupt("return", res.status(200).json({
                success: true,
                userMessage: 'OTP verified',
                user: {
                  id: user._id,
                  email: user.email,
                  phoneNumber: user.phoneNumber,
                  name: user.name,
                  token: token
                }
              }));
            case 82:
              _context4.prev = 82;
              _context4.t5 = _context4["catch"](0);
              console.error('[verifyOtp] Uncaught error:', _context4.t5);
              return _context4.abrupt("return", next(_context4.t5));
            case 86:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 82], [5, 13], [19, 27], [34, 50], [54, 62], [65, 75]]);
      }));
      function verifyOtp(_x8, _x9, _x0) {
        return _verifyOtp.apply(this, arguments);
      }
      return verifyOtp;
    }()
  }, {
    key: "googleAuth",
    value: function () {
      var _googleAuth = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res, next) {
        var _req$body, email, googleId, picture, user, updated, token;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _req$body = req.body, email = _req$body.email, googleId = _req$body.googleId, picture = _req$body.picture;
              console.log('Google Auth received:', {
                email: email,
                googleId: googleId,
                picture: picture
              });
              console.log('==============================');
              if (!(!email || !googleId)) {
                _context5.next = 6;
                break;
              }
              return _context5.abrupt("return", res.status(400).json({
                success: false,
                userMessage: 'Email and Google ID are required'
              }));
            case 6:
              _context5.next = 8;
              return _User["default"].findOne({
                email: email.toLowerCase().trim()
              });
            case 8:
              user = _context5.sent;
              if (!user) {
                _context5.next = 20;
                break;
              }
              updated = false;
              if (!user.googleId) {
                user.googleId = googleId;
                updated = true;
              }
              if (!user.authMethods) user.authMethods = [];
              if (!user.authMethods.includes('google')) {
                user.authMethods.push('google');
                updated = true;
              }
              if (!user.profilePicture && picture) {
                user.profilePicture = picture;
                updated = true;
              }
              if (!updated) {
                _context5.next = 18;
                break;
              }
              _context5.next = 18;
              return user.save();
            case 18:
              _context5.next = 23;
              break;
            case 20:
              user = new _User["default"]({
                email: email.toLowerCase().trim(),
                googleId: googleId,
                authMethods: ['google'],
                profilePicture: picture
              });
              _context5.next = 23;
              return user.save();
            case 23:
              _context5.next = 25;
              return user.generateAuthToken();
            case 25:
              token = _context5.sent;
              _context5.next = 28;
              return _RedisManager["default"].setItem({
                key: "auth:session:".concat(token),
                item: user._id.toString(),
                expiration: 2592000 // 30 days
              });
            case 28:
              console.log({
                id: user._id,
                email: user.email,
                token: token,
                profilePicture: user.profilePicture
              });
              return _context5.abrupt("return", res.status(200).json({
                success: true,
                userMessage: 'Google authentication successful',
                user: {
                  id: user._id,
                  email: user.email,
                  token: token,
                  profilePicture: user.profilePicture
                }
              }));
            case 32:
              _context5.prev = 32;
              _context5.t0 = _context5["catch"](0);
              console.error('[googleAuth] Error:', _context5.t0);
              next(_context5.t0);
            case 36:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 32]]);
      }));
      function googleAuth(_x1, _x10, _x11) {
        return _googleAuth.apply(this, arguments);
      }
      return googleAuth;
    }()
  }, {
    key: "getValidUser",
    value: function () {
      var _getValidUser = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res, next) {
        var jwttoken, userId, user, name, email, phoneNumber, _user;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              jwttoken = req.query.jwttoken;
              _context6.next = 4;
              return _RedisManager["default"].getItem("auth:session:".concat(jwttoken));
            case 4:
              userId = _context6.sent;
              if (!userId) {
                _context6.next = 16;
                break;
              }
              _context6.next = 8;
              return _User["default"].findByToken(jwttoken);
            case 8:
              user = _context6.sent;
              name = '';
              email = '';
              phoneNumber = '';
              if (user) {
                name = user.name;
                phoneNumber = user.phoneNumber;
                email = user.email;
              }
              return _context6.abrupt("return", res.status(200).json({
                success: true,
                userMessage: 'User found here now',
                user: {
                  name: name,
                  email: email,
                  phoneNumber: phoneNumber,
                  detailsAdded: Boolean(phoneNumber && email),
                  deg: 'debug here'
                }
              }));
            case 16:
              _context6.next = 18;
              return _User["default"].findByToken(jwttoken);
            case 18:
              _user = _context6.sent;
              if (!_user) {
                _context6.next = 22;
                break;
              }
              _context6.next = 22;
              return _user.removeToken(jwttoken);
            case 22:
              return _context6.abrupt("return", res.status(404).json({
                success: false,
                userMessage: 'User not found'
              }));
            case 23:
              _context6.next = 29;
              break;
            case 25:
              _context6.prev = 25;
              _context6.t0 = _context6["catch"](0);
              console.error('[getValidUser] Error:', _context6.t0);
              next(_context6.t0);
            case 29:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[0, 25]]);
      }));
      function getValidUser(_x12, _x13, _x14) {
        return _getValidUser.apply(this, arguments);
      }
      return getValidUser;
    }()
  }, {
    key: "updateDetails",
    value: function () {
      var _updateDetails = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res, next) {
        var _req$body2, phoneNumber, name, userId, updatedUser;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _req$body2 = req.body, phoneNumber = _req$body2.phoneNumber, name = _req$body2.name;
              userId = req.userId;
              if (userId) {
                _context7.next = 5;
                break;
              }
              return _context7.abrupt("return", res.status(401).json({
                success: false,
                userMessage: 'Unauthorized: user ID not found in request'
              }));
            case 5:
              _context7.next = 7;
              return _User["default"].findByIdAndUpdate(userId, {
                name: name,
                phoneNumber: phoneNumber
              }, {
                "new": true
              });
            case 7:
              updatedUser = _context7.sent;
              if (updatedUser) {
                _context7.next = 10;
                break;
              }
              return _context7.abrupt("return", res.status(404).json({
                success: false,
                userMessage: 'User not found'
              }));
            case 10:
              return _context7.abrupt("return", res.status(200).json({
                success: true,
                userMessage: 'User details updated successfully',
                user: {
                  name: updatedUser.name,
                  phoneNumber: updatedUser.phoneNumber
                }
              }));
            case 13:
              _context7.prev = 13;
              _context7.t0 = _context7["catch"](0);
              console.error('[updateDetails] Error:', _context7.t0);
              next(_context7.t0);
            case 17:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[0, 13]]);
      }));
      function updateDetails(_x15, _x16, _x17) {
        return _updateDetails.apply(this, arguments);
      }
      return updateDetails;
    }()
  }, {
    key: "updatePhoneNumber",
    value: function () {
      var _updatePhoneNumber = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res, next) {
        var phoneNumber, userId, updatedUser;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              phoneNumber = req.body.phoneNumber;
              userId = req.userId;
              if (userId) {
                _context8.next = 5;
                break;
              }
              return _context8.abrupt("return", res.status(401).json({
                success: false,
                userMessage: 'Unauthorized: user ID not found in request'
              }));
            case 5:
              _context8.next = 7;
              return _User["default"].findByIdAndUpdate(userId, {
                phoneNumber: phoneNumber
              }, {
                "new": true
              });
            case 7:
              updatedUser = _context8.sent;
              if (updatedUser) {
                _context8.next = 10;
                break;
              }
              return _context8.abrupt("return", res.status(404).json({
                success: false,
                userMessage: 'User not found'
              }));
            case 10:
              return _context8.abrupt("return", res.status(200).json({
                success: true,
                userMessage: 'User details updated successfully',
                user: {
                  name: updatedUser.name,
                  phoneNumber: updatedUser.phoneNumber,
                  email: updatedUser.email
                }
              }));
            case 13:
              _context8.prev = 13;
              _context8.t0 = _context8["catch"](0);
              console.error('[updatePhoneNumber] Error:', _context8.t0);
              next(_context8.t0);
            case 17:
            case "end":
              return _context8.stop();
          }
        }, _callee8, null, [[0, 13]]);
      }));
      function updatePhoneNumber(_x18, _x19, _x20) {
        return _updatePhoneNumber.apply(this, arguments);
      }
      return updatePhoneNumber;
    }()
  }, {
    key: "updateName",
    value: function () {
      var _updateName = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res, next) {
        var name, userId, updatedUser;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              name = req.body.name;
              userId = req.userId;
              if (userId) {
                _context9.next = 5;
                break;
              }
              return _context9.abrupt("return", res.status(401).json({
                success: false,
                userMessage: 'Unauthorized: user ID not found in request'
              }));
            case 5:
              _context9.next = 7;
              return _User["default"].findByIdAndUpdate(userId, {
                name: name
              }, {
                "new": true
              });
            case 7:
              updatedUser = _context9.sent;
              if (updatedUser) {
                _context9.next = 10;
                break;
              }
              return _context9.abrupt("return", res.status(404).json({
                success: false,
                userMessage: 'User not found'
              }));
            case 10:
              return _context9.abrupt("return", res.status(200).json({
                success: true,
                userMessage: 'User details updated successfully',
                user: {
                  name: updatedUser.name,
                  phoneNumber: updatedUser.phoneNumber,
                  email: updatedUser.email
                }
              }));
            case 13:
              _context9.prev = 13;
              _context9.t0 = _context9["catch"](0);
              console.error('[updateName] Error:', _context9.t0);
              next(_context9.t0);
            case 17:
            case "end":
              return _context9.stop();
          }
        }, _callee9, null, [[0, 13]]);
      }));
      function updateName(_x21, _x22, _x23) {
        return _updateName.apply(this, arguments);
      }
      return updateName;
    }()
  }, {
    key: "signOut",
    value: function () {
      var _signOut = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee0(req, res, next) {
        var _req$headers$authoriz, token, user;
        return _regeneratorRuntime().wrap(function _callee0$(_context0) {
          while (1) switch (_context0.prev = _context0.next) {
            case 0:
              _context0.prev = 0;
              token = (_req$headers$authoriz = req.headers.authorization) === null || _req$headers$authoriz === void 0 ? void 0 : _req$headers$authoriz.split(' ')[1];
              if (token) {
                _context0.next = 4;
                break;
              }
              return _context0.abrupt("return", res.status(400).json({
                success: false,
                userMessage: 'Token is required'
              }));
            case 4:
              _context0.next = 6;
              return _User["default"].findByToken(token);
            case 6:
              user = _context0.sent;
              if (user) {
                _context0.next = 12;
                break;
              }
              console.warn("User not found for token: ".concat(token, ", attempting Redis cleanup."));
              _context0.next = 11;
              return _RedisManager["default"].deleteItem("auth:session:".concat(token));
            case 11:
              return _context0.abrupt("return", res.status(404).json({
                success: false,
                userMessage: 'Invalid token or user not found'
              }));
            case 12:
              _context0.next = 14;
              return user.removeToken(token);
            case 14:
              _context0.next = 16;
              return _RedisManager["default"].deleteItem("auth:session:".concat(token));
            case 16:
              return _context0.abrupt("return", res.status(200).json({
                success: true,
                userMessage: 'Signed out successfully'
              }));
            case 19:
              _context0.prev = 19;
              _context0.t0 = _context0["catch"](0);
              console.error('[signOut] Error:', _context0.t0);
              next(_context0.t0);
            case 23:
            case "end":
              return _context0.stop();
          }
        }, _callee0, null, [[0, 19]]);
      }));
      function signOut(_x24, _x25, _x26) {
        return _signOut.apply(this, arguments);
      }
      return signOut;
    }()
  }]);
}();
function hashOtp(otp) {
  return _crypto["default"].createHash('sha256').update(otp).digest('hex');
}
function identifierType(input) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var phoneRegex = /^(\+?[1-9]\d{1,14}|0\d{10})$/;
  if (emailRegex.test(input.trim().toLowerCase())) {
    return 'email';
  } else if (phoneRegex.test(input.trim())) {
    return 'phone';
  } else {
    return 'unknown';
  }
}
var _default = exports["default"] = AuthClass;