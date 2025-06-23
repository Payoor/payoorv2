"use strict";

var _TelegramBotClass = _interopRequireDefault(require("./TelegramBotClass"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var express = require('express');
var app = express();
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
var _require = require('./redisconf'),
  redisClient = _require.redisClient,
  connectRedis = _require.connectRedis;
require('./db');
var port = process.env.PORT;
app.use(express.json());
app.use(express.text({
  type: 'text/plain'
}));
app.get('/health', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          console.log('✅ GET / hit');
          res.status(200).json({
            message: 'server is up and running here now'
          });
        case 1:
          return _context.a(2);
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.post('/errorlog', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var receivedErrorMessage, timestamp, message, _t;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          _context2.p = 0;
          receivedErrorMessage = req.body;
          console.log('\n--- Received Error Log from Client ---');
          console.log(receivedErrorMessage);
          console.log('--- End of Received Error Log ---\n');
          timestamp = req.header('X-Error-Timestamp');
          if (!timestamp) {
            _context2.n = 1;
            break;
          }
          console.log("Received at: ".concat(timestamp));
          message = receivedErrorMessage;
          _context2.n = 1;
          return _TelegramBotClass["default"].callBot("".concat(message, " ==> ").concat(timestamp));
        case 1:
          res.status(200).json({
            message: 'Error log received and processed by bot.'
          });
          _context2.n = 3;
          break;
        case 2:
          _context2.p = 2;
          _t = _context2.v;
          console.error('❌ Error in telegbot /errorlog route:', _t);
          // Ensure you send a 500 status back to the client if there's an issue processing
          res.status(500).json({
            message: 'Internal server error on bot side.'
          });
        case 3:
          return _context2.a(2);
      }
    }, _callee2, null, [[0, 2]]);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
app.post('/neworder', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
    var orderId, message, _t2;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          _context3.p = 0;
          orderId = req.body.orderId;
          if (orderId) {
            _context3.n = 1;
            break;
          }
          return _context3.a(2, res.status(400).json({
            message: 'Missing orderId in request body'
          }));
        case 1:
          message = "\uD83D\uDED2 New order received: ".concat(process.env.PAYOOR_URL, "/admin/order?reference=").concat(orderId);
          _context3.n = 2;
          return _TelegramBotClass["default"].callBot(message);
        case 2:
          res.status(200).json({
            message: 'Notification sent to Telegram bot.'
          });
          _context3.n = 4;
          break;
        case 3:
          _context3.p = 3;
          _t2 = _context3.v;
          console.error('❌ Error notifying bot:', _t2);
          res.status(500).json({
            message: 'Internal server error'
          });
        case 4:
          return _context3.a(2);
      }
    }, _callee3, null, [[0, 3]]);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
app.post('/send/message/simple', /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
    var simplemessage, _t3;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          _context4.p = 0;
          simplemessage = req.body.simplemessage;
          if (simplemessage) {
            _context4.n = 1;
            break;
          }
          return _context4.a(2, res.status(400).json({
            message: 'Missing simplemessage in request body'
          }));
        case 1:
          _context4.n = 2;
          return _TelegramBotClass["default"].callBot(simplemessage);
        case 2:
          res.status(200).json({
            message: 'Notification sent to Telegram bot.'
          });
          _context4.n = 4;
          break;
        case 3:
          _context4.p = 3;
          _t3 = _context4.v;
          console.error('❌ Error notifying bot:', err);
          res.status(500).json({
            message: 'Internal server error'
          });
        case 4:
          return _context4.a(2);
      }
    }, _callee4, null, [[0, 3]]);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
function startServer() {
  return _startServer.apply(this, arguments);
}
function _startServer() {
  _startServer = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          try {
            //await connectRedis();
            console.log('🚀 Connected to Redis');
            app.listen(port, function () {
              console.log("\u2705 Server is running on port ".concat(port));
            });
          } catch (error) {
            console.error('❌ Failed to connect to Redis:', error);
            process.exit(1);
          }
        case 1:
          return _context5.a(2);
      }
    }, _callee5);
  }));
  return _startServer.apply(this, arguments);
}
startServer();