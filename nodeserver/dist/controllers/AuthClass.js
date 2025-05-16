"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _resend = require("resend");
var _speakeasy = _interopRequireDefault(require("speakeasy"));
var _crypto = _interopRequireDefault(require("crypto"));
var _redisconf = require("../redisconf");
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
      var _sendEmailOtp = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
        var identifier, otp, data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              identifier = req.body.identifier;
              if (identifier) {
                _context2.next = 4;
                break;
              }
              return _context2.abrupt("return", res.status(400).json({
                error: 'Identifier is required'
              }));
            case 4:
              _context2.next = 6;
              return AuthClass.genOtp(identifier);
            case 6:
              otp = _context2.sent;
              _context2.next = 9;
              return AuthClass.saveOtpToIdentifier(otp, identifier);
            case 9:
              _context2.next = 11;
              return resend.emails.send({
                from: 'Payoor <hello@otp.payoor.store>',
                to: ["".concat(identifier)],
                subject: 'Otp from Payoor',
                html: "\n      <!DOCTYPE html>\n      <html>\n        <head>\n          <meta charset=\"UTF-8\">\n          <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n          <title>Your Verification Code</title>\n        </head>\n        <body style=\"margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;\">\n          <table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" style=\"width: 100%; background-color: #f4f4f4; padding: 20px;\">\n            <tr>\n              <td align=\"center\">\n                <table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" style=\"max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);\">\n                  <!-- Header -->\n                  <tr>\n                    <td style=\"background-color: rgba(36, 155, 72, 1); padding: 30px 0; text-align: center;\">\n                      \n                    </td>\n                  </tr>\n                  \n                  <!-- Content -->\n                  <tr>\n                    <td style=\"padding: 40px 30px;\">\n                      <h1 style=\"margin: 0 0 20px; color: #333333; font-size: 24px; font-weight: bold;\">\n                        Verification Code\n                      </h1>\n                      <p style=\"margin: 0 0 30px; color: #666666; font-size: 16px; line-height: 24px;\">\n                        To complete your verification, please use the following code:\n                      </p>\n                      <div style=\"background-color: #f8f8f8; border-radius: 6px; padding: 20px; text-align: center; margin-bottom: 30px;\">\n                        <span style=\"font-family: monospace; font-size: 32px; font-weight: bold; letter-spacing: 4px; color: rgba(36, 155, 72, 1);\">\n                          ".concat(otp, "\n                        </span>\n                      </div>\n                      <p style=\"margin: 0 0 30px; color: #666666; font-size: 16px; line-height: 24px;\">\n                        This code will expire in 10 minutes for security purposes. If you didn't request this code, please ignore this email.\n                      </p>\n                      <p style=\"margin: 0; color: #666666; font-size: 14px; line-height: 20px;\">\n                        For security reasons, please do not share this code with anyone.\n                      </p>\n                    </td>\n                  </tr>\n                  \n                  <!-- Footer -->\n                  <tr>\n                    <td style=\"padding: 20px 30px; background-color: #f8f8f8; text-align: center;\">\n                      <p style=\"margin: 0; color: #999999; font-size: 14px;\">\n                        This is an automated message, please do not reply to this email.\n                      </p>\n                      <p style=\"margin: 10px 0 0; color: #999999; font-size: 14px;\">\n                        \xA9 2025 Payoor. All rights reserved.\n                      </p>\n                    </td>\n                  </tr>\n                </table>\n              </td>\n            </tr>\n          </table>\n        </body>\n      </html>\n    ")
              });
            case 11:
              data = _context2.sent;
              console.log(data, 'data');
              res.status(200).json({
                message: 'Authentication successful'
              });
              _context2.next = 20;
              break;
            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](0);
              console.error('Authentication error:', _context2.t0);
              res.status(500).json({
                error: 'Internal server error'
              });
            case 20:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 16]]);
      }));
      function sendEmailOtp(_x2, _x3) {
        return _sendEmailOtp.apply(this, arguments);
      }
      return sendEmailOtp;
    }()
  }, {
    key: "saveOtpToIdentifier",
    value: function () {
      var _saveOtpToIdentifier = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(otp, identifier) {
        var key;
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
              _context3.next = 6;
              return _redisconf.redisClient.setEx(key, 600, identifier.toLowerCase().trim());
            case 6:
              console.log("Mapped hashed OTP to identifier. Key: ".concat(key));
              return _context3.abrupt("return", true);
            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](0);
              console.error('Failed to save OTP:', _context3.t0);
              return _context3.abrupt("return", false);
            case 14:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 10]]);
      }));
      function saveOtpToIdentifier(_x4, _x5) {
        return _saveOtpToIdentifier.apply(this, arguments);
      }
      return saveOtpToIdentifier;
    }()
  }, {
    key: "verifyOtp",
    value: function () {
      var _verifyOtp = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
        var submittedOtp, hashedKey, identifier, user, identifierValueType, token;
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
                message: 'OTP is required'
              }));
            case 4:
              hashedKey = "otp:code:".concat(hashOtp(submittedOtp));
              _context4.next = 7;
              return _redisconf.redisClient.get(hashedKey);
            case 7:
              identifier = _context4.sent;
              if (identifier) {
                _context4.next = 10;
                break;
              }
              return _context4.abrupt("return", res.status(401).json({
                success: false,
                message: 'OTP expired or invalid'
              }));
            case 10:
              _context4.next = 12;
              return _User["default"].findByIdentifier(identifier);
            case 12:
              user = _context4.sent;
              if (user) {
                _context4.next = 28;
                break;
              }
              identifierValueType = identifierType(identifier);
              if (!(identifierValueType === 'email')) {
                _context4.next = 21;
                break;
              }
              _context4.next = 18;
              return _User["default"].create({
                email: identifier
              });
            case 18:
              user = _context4.sent;
              _context4.next = 28;
              break;
            case 21:
              if (!(identifierValueType === 'phone')) {
                _context4.next = 27;
                break;
              }
              _context4.next = 24;
              return _User["default"].create({
                phoneNumber: identifier
              });
            case 24:
              user = _context4.sent;
              _context4.next = 28;
              break;
            case 27:
              return _context4.abrupt("return", res.status(400).json({
                success: false,
                message: 'Identifier is neither a valid email nor phone number'
              }));
            case 28:
              _context4.next = 30;
              return user.generateAuthToken();
            case 30:
              token = _context4.sent;
              _context4.next = 33;
              return _redisconf.redisClient.setEx("auth:session:".concat(token), 2592000, user._id.toString());
            case 33:
              _context4.next = 35;
              return _redisconf.redisClient.del(hashedKey);
            case 35:
              return _context4.abrupt("return", res.status(200).json({
                success: true,
                message: 'OTP verified',
                user: {
                  id: user._id,
                  email: user.email,
                  phoneNumber: user.phoneNumber,
                  token: token
                }
              }));
            case 38:
              _context4.prev = 38;
              _context4.t0 = _context4["catch"](0);
              console.error('OTP verification error:', _context4.t0);
              return _context4.abrupt("return", res.status(500).json({
                success: false,
                message: 'Internal server error'
              }));
            case 42:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 38]]);
      }));
      function verifyOtp(_x6, _x7) {
        return _verifyOtp.apply(this, arguments);
      }
      return verifyOtp;
    }()
  }, {
    key: "googleAuth",
    value: function () {
      var _googleAuth = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
        var email;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              email = req.body.email;
              console.log(email);
              _context5.next = 9;
              break;
            case 5:
              _context5.prev = 5;
              _context5.t0 = _context5["catch"](0);
              console.error('OTP verification error:', _context5.t0);
              return _context5.abrupt("return", res.status(500).json({
                success: false,
                message: 'Internal server error'
              }));
            case 9:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 5]]);
      }));
      function googleAuth(_x8, _x9) {
        return _googleAuth.apply(this, arguments);
      }
      return googleAuth;
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