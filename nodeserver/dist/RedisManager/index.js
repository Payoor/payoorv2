"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ioredis = _interopRequireDefault(require("ioredis"));
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
var RedisManager = /*#__PURE__*/function () {
  function RedisManager() {
    _classCallCheck(this, RedisManager);
    if (RedisManager.instance) {
      return RedisManager.instance;
    }
    this.redisClient = null;
    RedisManager.instance = this;
  }
  return _createClass(RedisManager, [{
    key: "connectRedis",
    value: function () {
      var _connectRedis = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this = this;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(this.redisClient && (this.redisClient.status === 'connecting' || this.redisClient.status === 'ready'))) {
                _context.next = 3;
                break;
              }
              console.warn('Redis client is already connecting or connected. Skipping new connection.');
              return _context.abrupt("return");
            case 3:
              _context.prev = 3;
              this.redisClient = new _ioredis["default"]({
                port: 6379,
                host: 'redisdb',
                db: 0
              });
              this.redisClient.on('connect', function () {
                console.log('✅ Redis client connected (TCP)');
              });
              this.redisClient.on('ready', function () {
                console.log('✅ Redis client is ready (fully operational)');
              });
              this.redisClient.on('reconnecting', function () {
                console.log('🔄 Redis client reconnecting...');
              });
              this.redisClient.on('error', function (err) {
                console.error('❌ Redis Client Error:', err);
              });
              _context.next = 11;
              return new Promise(function (resolve, reject) {
                var handleReady = function handleReady() {
                  _this.redisClient.off('error', handleError);
                  resolve();
                };
                var handleError = function handleError(err) {
                  _this.redisClient.off('ready', handleReady);
                  reject(err);
                };
                _this.redisClient.on('ready', handleReady);
                _this.redisClient.on('error', handleError);
              });
            case 11:
              console.log('Redis connection fully established and ready.');
              _context.next = 19;
              break;
            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](3);
              console.error('❌ Failed to connect to Redis:', _context.t0);
              if (this.redisClient) {
                this.redisClient.disconnect();
                this.redisClient = null;
              }
              throw _context.t0;
            case 19:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[3, 14]]);
      }));
      function connectRedis() {
        return _connectRedis.apply(this, arguments);
      }
      return connectRedis;
    }()
  }, {
    key: "exists",
    value: function () {
      var _exists = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(key) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(!this.redisClient || this.redisClient.status !== 'ready')) {
                _context2.next = 2;
                break;
              }
              throw new Error('Redis client not connected or ready. Cannot check key existence.');
            case 2:
              _context2.prev = 2;
              _context2.next = 5;
              return this.redisClient.exists(key);
            case 5:
              return _context2.abrupt("return", _context2.sent);
            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](2);
              console.error("\u274C Error checking existence for key '".concat(key, "':"), _context2.t0);
              throw _context2.t0;
            case 12:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[2, 8]]);
      }));
      function exists(_x) {
        return _exists.apply(this, arguments);
      }
      return exists;
    }()
  }, {
    key: "setJSON",
    value: function () {
      var _setJSON = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(key, item) {
        var expirationSeconds,
          keepTTL,
          stringifiedItem,
          _args3 = arguments;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              expirationSeconds = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : null;
              keepTTL = _args3.length > 3 && _args3[3] !== undefined ? _args3[3] : false;
              if (!(!this.redisClient || this.redisClient.status !== 'ready')) {
                _context3.next = 4;
                break;
              }
              throw new Error('Redis client not connected or ready. Cannot set item.');
            case 4:
              _context3.prev = 4;
              stringifiedItem = _typeof(item) === 'object' && item !== null ? JSON.stringify(item) : String(item);
              if (!keepTTL) {
                _context3.next = 12;
                break;
              }
              _context3.next = 9;
              return this.redisClient.set(key, stringifiedItem, 'KEEPTTL');
            case 9:
              console.log("\u2705 Set item: '".concat(key, "' with KEEPTTL"));
              _context3.next = 21;
              break;
            case 12:
              if (!(expirationSeconds !== undefined && expirationSeconds !== null)) {
                _context3.next = 18;
                break;
              }
              _context3.next = 15;
              return this.redisClient.set(key, stringifiedItem, 'EX', expirationSeconds);
            case 15:
              console.log("\u2705 Set item: '".concat(key, "' with expiration ").concat(expirationSeconds, "s"));
              _context3.next = 21;
              break;
            case 18:
              _context3.next = 20;
              return this.redisClient.set(key, stringifiedItem);
            case 20:
              console.log("\u2705 Set item: '".concat(key, "' (no expiration)"));
            case 21:
              return _context3.abrupt("return", true);
            case 24:
              _context3.prev = 24;
              _context3.t0 = _context3["catch"](4);
              console.error("\u274C Error setting item for key '".concat(key, "':"), _context3.t0);
              throw _context3.t0;
            case 28:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[4, 24]]);
      }));
      function setJSON(_x2, _x3) {
        return _setJSON.apply(this, arguments);
      }
      return setJSON;
    }()
  }, {
    key: "sadd",
    value: function () {
      var _sadd = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(key) {
        var _len,
          members,
          _key,
          _this$redisClient,
          addedCount,
          _args4 = arguments;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!(!this.redisClient || this.redisClient.status !== 'ready')) {
                _context4.next = 2;
                break;
              }
              throw new Error('Redis client not connected or ready. Cannot add to set.');
            case 2:
              for (_len = _args4.length, members = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                members[_key - 1] = _args4[_key];
              }
              if (!(members.length === 0)) {
                _context4.next = 6;
                break;
              }
              console.warn("No members provided for SADD to key '".concat(key, "'."));
              return _context4.abrupt("return", 0);
            case 6:
              _context4.prev = 6;
              _context4.next = 9;
              return (_this$redisClient = this.redisClient).sadd.apply(_this$redisClient, [key].concat(members));
            case 9:
              addedCount = _context4.sent;
              console.log("\u2705 Added ".concat(addedCount, " member(s) to set '").concat(key, "'."));
              return _context4.abrupt("return", addedCount);
            case 14:
              _context4.prev = 14;
              _context4.t0 = _context4["catch"](6);
              console.error("\u274C Error adding to set '".concat(key, "':"), _context4.t0);
              throw _context4.t0;
            case 18:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this, [[6, 14]]);
      }));
      function sadd(_x4) {
        return _sadd.apply(this, arguments);
      }
      return sadd;
    }()
  }, {
    key: "smembers",
    value: function () {
      var _smembers = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(key) {
        var _members;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (!(!this.redisClient || this.redisClient.status !== 'ready')) {
                _context5.next = 2;
                break;
              }
              throw new Error('Redis client not connected or ready. Cannot get set members.');
            case 2:
              _context5.prev = 2;
              _context5.next = 5;
              return this.redisClient.smembers(key);
            case 5:
              _members = _context5.sent;
              console.log("\uD83D\uDD0E Retrieved ".concat(_members.length, " member(s) from set '").concat(key, "'."));
              return _context5.abrupt("return", _members);
            case 10:
              _context5.prev = 10;
              _context5.t0 = _context5["catch"](2);
              console.error("\u274C Error getting members from set '".concat(key, "':"), _context5.t0);
              throw _context5.t0;
            case 14:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this, [[2, 10]]);
      }));
      function smembers(_x5) {
        return _smembers.apply(this, arguments);
      }
      return smembers;
    }()
  }, {
    key: "sismember",
    value: function () {
      var _sismember = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(key, member) {
        var isMember;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (!(!this.redisClient || this.redisClient.status !== 'ready')) {
                _context6.next = 2;
                break;
              }
              throw new Error('Redis client not connected or ready. Cannot check set member existence.');
            case 2:
              _context6.prev = 2;
              _context6.next = 5;
              return this.redisClient.sismember(key, member);
            case 5:
              isMember = _context6.sent;
              console.log("\uD83D\uDD0E Checked if '".concat(member, "' is a member of set '").concat(key, "': ").concat(isMember ? 'Yes' : 'No', "."));
              return _context6.abrupt("return", isMember === 1);
            case 10:
              _context6.prev = 10;
              _context6.t0 = _context6["catch"](2);
              console.error("\u274C Error checking sismember for key '".concat(key, "' and member '").concat(member, "':"), _context6.t0);
              throw _context6.t0;
            case 14:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this, [[2, 10]]);
      }));
      function sismember(_x6, _x7) {
        return _sismember.apply(this, arguments);
      }
      return sismember;
    }()
  }, {
    key: "hset",
    value: function () {
      var _hset = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(key, field, value) {
        var result;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              if (!(!this.redisClient || this.redisClient.status !== 'ready')) {
                _context7.next = 2;
                break;
              }
              throw new Error('Redis client not connected or ready. Cannot set hash field.');
            case 2:
              _context7.prev = 2;
              _context7.next = 5;
              return this.redisClient.hset(key, field, value);
            case 5:
              result = _context7.sent;
              console.log("\u2705 Set hash field '".concat(field, "' in key '").concat(key, "'. Result: ").concat(result));
              return _context7.abrupt("return", result);
            case 10:
              _context7.prev = 10;
              _context7.t0 = _context7["catch"](2);
              console.error("\u274C Error setting hash field '".concat(field, "' in key '").concat(key, "':"), _context7.t0);
              throw _context7.t0;
            case 14:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this, [[2, 10]]);
      }));
      function hset(_x8, _x9, _x0) {
        return _hset.apply(this, arguments);
      }
      return hset;
    }()
  }, {
    key: "hgetall",
    value: function () {
      var _hgetall = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(key) {
        var result;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              if (!(!this.redisClient || this.redisClient.status !== 'ready')) {
                _context8.next = 2;
                break;
              }
              throw new Error('Redis client not connected or ready. Cannot get all hash fields.');
            case 2:
              _context8.prev = 2;
              _context8.next = 5;
              return this.redisClient.hgetall(key);
            case 5:
              result = _context8.sent;
              console.log("\uD83D\uDD0E Retrieved all fields from hash '".concat(key, "'. Found ").concat(Object.keys(result).length, " fields."));
              return _context8.abrupt("return", result);
            case 10:
              _context8.prev = 10;
              _context8.t0 = _context8["catch"](2);
              console.error("\u274C Error getting all hash fields from key '".concat(key, "':"), _context8.t0);
              throw _context8.t0;
            case 14:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this, [[2, 10]]);
      }));
      function hgetall(_x1) {
        return _hgetall.apply(this, arguments);
      }
      return hgetall;
    }()
  }, {
    key: "hget",
    value: function () {
      var _hget = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(key, field) {
        var result;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              if (!(!this.redisClient || this.redisClient.status !== 'ready')) {
                _context9.next = 2;
                break;
              }
              throw new Error('Redis client not connected or ready. Cannot get hash field.');
            case 2:
              _context9.prev = 2;
              _context9.next = 5;
              return this.redisClient.hget(key, field);
            case 5:
              result = _context9.sent;
              if (result === null) {
                console.log("\uD83D\uDD0E Hash field '".concat(field, "' not found in key '").concat(key, "'."));
              } else {
                console.log("\uD83D\uDD0E Retrieved hash field '".concat(field, "' from key '").concat(key, "'."));
              }
              return _context9.abrupt("return", result);
            case 10:
              _context9.prev = 10;
              _context9.t0 = _context9["catch"](2);
              console.error("\u274C Error getting hash field '".concat(field, "' from key '").concat(key, "':"), _context9.t0);
              throw _context9.t0;
            case 14:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this, [[2, 10]]);
      }));
      function hget(_x10, _x11) {
        return _hget.apply(this, arguments);
      }
      return hget;
    }()
  }, {
    key: "getJSON",
    value: function () {
      var _getJSON = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee0(key) {
        var result, parsed;
        return _regeneratorRuntime().wrap(function _callee0$(_context0) {
          while (1) switch (_context0.prev = _context0.next) {
            case 0:
              if (!(!this.redisClient || this.redisClient.status !== 'ready')) {
                _context0.next = 2;
                break;
              }
              throw new Error('Redis client not connected or ready. Cannot get item.');
            case 2:
              _context0.prev = 2;
              _context0.next = 5;
              return this.redisClient.get(key);
            case 5:
              result = _context0.sent;
              if (!(result === null)) {
                _context0.next = 9;
                break;
              }
              console.log("\uD83D\uDD0E Item '".concat(key, "' not found in Redis."));
              return _context0.abrupt("return", null);
            case 9:
              _context0.prev = 9;
              parsed = JSON.parse(result);
              console.log("\uD83D\uDD0E Got item: '".concat(key, "' (parsed JSON)"));
              return _context0.abrupt("return", parsed);
            case 15:
              _context0.prev = 15;
              _context0.t0 = _context0["catch"](9);
              console.log("\uD83D\uDD0E Got item: '".concat(key, "' (string, JSON parse failed)"));
              return _context0.abrupt("return", result);
            case 19:
              _context0.next = 25;
              break;
            case 21:
              _context0.prev = 21;
              _context0.t1 = _context0["catch"](2);
              console.error("\u274C Error getting item for key '".concat(key, "':"), _context0.t1);
              throw _context0.t1;
            case 25:
            case "end":
              return _context0.stop();
          }
        }, _callee0, this, [[2, 21], [9, 15]]);
      }));
      function getJSON(_x12) {
        return _getJSON.apply(this, arguments);
      }
      return getJSON;
    }()
  }, {
    key: "setItem",
    value: function () {
      var _setItem = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee1(_ref) {
        var key, item, expiration, errorMessage, stringifiedItem, _errorMessage;
        return _regeneratorRuntime().wrap(function _callee1$(_context1) {
          while (1) switch (_context1.prev = _context1.next) {
            case 0:
              key = _ref.key, item = _ref.item, expiration = _ref.expiration;
              if (!(!this.redisClient || this.redisClient.status !== 'ready')) {
                _context1.next = 5;
                break;
              }
              errorMessage = 'Redis client not connected or ready. Cannot set item.';
              console.error(errorMessage);
              throw new Error(errorMessage);
            case 5:
              _context1.prev = 5;
              stringifiedItem = _typeof(item) === 'object' && item !== null ? JSON.stringify(item) : String(item);
              if (!(expiration !== undefined && expiration !== null)) {
                _context1.next = 13;
                break;
              }
              _context1.next = 10;
              return this.redisClient.set(key, stringifiedItem, 'EX', expiration);
            case 10:
              console.log("\u2705 Set item: '".concat(key, "' with expiration ").concat(expiration, "s"));
              _context1.next = 16;
              break;
            case 13:
              _context1.next = 15;
              return this.redisClient.set(key, stringifiedItem);
            case 15:
              console.log("\u2705 Set item: '".concat(key, "' (no expiration)"));
            case 16:
              return _context1.abrupt("return", true);
            case 19:
              _context1.prev = 19;
              _context1.t0 = _context1["catch"](5);
              _errorMessage = "\u274C Error setting item for key '".concat(key, "': ").concat(_context1.t0.message);
              console.error(_errorMessage, _context1.t0);
              throw _context1.t0;
            case 24:
            case "end":
              return _context1.stop();
          }
        }, _callee1, this, [[5, 19]]);
      }));
      function setItem(_x13) {
        return _setItem.apply(this, arguments);
      }
      return setItem;
    }()
  }, {
    key: "getItem",
    value: function () {
      var _getItem = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(key) {
        var result, parsed;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              if (!(!this.redisClient || this.redisClient.status !== 'ready')) {
                _context10.next = 2;
                break;
              }
              throw new Error('Redis client not connected or ready. Cannot get item.');
            case 2:
              _context10.prev = 2;
              _context10.next = 5;
              return this.redisClient.get(key);
            case 5:
              result = _context10.sent;
              if (!(result === null)) {
                _context10.next = 9;
                break;
              }
              console.log("\uD83D\uDD0E Item '".concat(key, "' not found in Redis."));
              return _context10.abrupt("return", null);
            case 9:
              _context10.prev = 9;
              parsed = JSON.parse(result);
              console.log("\uD83D\uDD0E Got item: '".concat(key, "' (parsed JSON)"));
              return _context10.abrupt("return", parsed);
            case 15:
              _context10.prev = 15;
              _context10.t0 = _context10["catch"](9);
              console.log("\uD83D\uDD0E Got item: '".concat(key, "' (string)"));
              return _context10.abrupt("return", result);
            case 19:
              _context10.next = 25;
              break;
            case 21:
              _context10.prev = 21;
              _context10.t1 = _context10["catch"](2);
              console.error("\u274C Error getting item for key '".concat(key, "':"), _context10.t1);
              throw _context10.t1;
            case 25:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this, [[2, 21], [9, 15]]);
      }));
      function getItem(_x14) {
        return _getItem.apply(this, arguments);
      }
      return getItem;
    }()
  }, {
    key: "deleteItem",
    value: function () {
      var _deleteItem = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
        var _len2,
          keys,
          _key2,
          _this$redisClient2,
          deletedCount,
          _args11 = arguments;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              if (!(!this.redisClient || this.redisClient.status !== 'ready')) {
                _context11.next = 2;
                break;
              }
              throw new Error('Redis client not connected or ready. Cannot delete item(s).');
            case 2:
              for (_len2 = _args11.length, keys = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                keys[_key2] = _args11[_key2];
              }
              if (!(keys.length === 0)) {
                _context11.next = 6;
                break;
              }
              console.warn('No keys provided for deletion.');
              return _context11.abrupt("return", 0);
            case 6:
              _context11.prev = 6;
              _context11.next = 9;
              return (_this$redisClient2 = this.redisClient).del.apply(_this$redisClient2, keys);
            case 9:
              deletedCount = _context11.sent;
              console.log("\uD83D\uDDD1\uFE0F Deleted ".concat(deletedCount, " item(s) from Redis: ").concat(keys.join(', ')));
              return _context11.abrupt("return", deletedCount);
            case 14:
              _context11.prev = 14;
              _context11.t0 = _context11["catch"](6);
              console.error("\u274C Error deleting item(s) for keys '".concat(keys.join(', '), "':"), _context11.t0);
              throw _context11.t0;
            case 18:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this, [[6, 14]]);
      }));
      function deleteItem() {
        return _deleteItem.apply(this, arguments);
      }
      return deleteItem;
    }()
  }, {
    key: "srem",
    value: function () {
      var _srem = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(key) {
        var _len3,
          members,
          _key3,
          _this$redisClient3,
          removedCount,
          _args12 = arguments;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              if (!(!this.redisClient || this.redisClient.status !== 'ready')) {
                _context12.next = 2;
                break;
              }
              throw new Error('Redis client not connected or ready. Cannot remove from set.');
            case 2:
              for (_len3 = _args12.length, members = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                members[_key3 - 1] = _args12[_key3];
              }
              if (!(members.length === 0)) {
                _context12.next = 6;
                break;
              }
              console.warn("No members provided for SREM from key '".concat(key, "'."));
              return _context12.abrupt("return", 0);
            case 6:
              _context12.prev = 6;
              _context12.next = 9;
              return (_this$redisClient3 = this.redisClient).srem.apply(_this$redisClient3, [key].concat(members));
            case 9:
              removedCount = _context12.sent;
              console.log("\uD83D\uDDD1\uFE0F Removed ".concat(removedCount, " member(s) from set '").concat(key, "'."));
              return _context12.abrupt("return", removedCount);
            case 14:
              _context12.prev = 14;
              _context12.t0 = _context12["catch"](6);
              console.error("\u274C Error removing from set '".concat(key, "':"), _context12.t0);
              throw _context12.t0;
            case 18:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this, [[6, 14]]);
      }));
      function srem(_x15) {
        return _srem.apply(this, arguments);
      }
      return srem;
    }()
  }, {
    key: "disconnectRedis",
    value: function () {
      var _disconnectRedis = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              if (!this.redisClient) {
                _context13.next = 13;
                break;
              }
              _context13.prev = 1;
              _context13.next = 4;
              return this.redisClient.quit();
            case 4:
              console.log('👋 Redis client disconnected.');
              this.redisClient = null;
              _context13.next = 11;
              break;
            case 8:
              _context13.prev = 8;
              _context13.t0 = _context13["catch"](1);
              console.error('❌ Error disconnecting Redis:', _context13.t0);
            case 11:
              _context13.next = 14;
              break;
            case 13:
              console.log('Redis client was not connected.');
            case 14:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this, [[1, 8]]);
      }));
      function disconnectRedis() {
        return _disconnectRedis.apply(this, arguments);
      }
      return disconnectRedis;
    }()
  }]);
}();
var redisManager = new RedisManager();
var _default = exports["default"] = redisManager;