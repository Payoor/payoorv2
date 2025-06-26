"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ioredis = _interopRequireDefault(require("ioredis"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
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
      var _connectRedis = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _this = this;
        var _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              if (!(this.redisClient && (this.redisClient.status === 'connecting' || this.redisClient.status === 'ready'))) {
                _context.n = 1;
                break;
              }
              console.warn('Redis client is already connecting or connected. Skipping new connection.');
              return _context.a(2);
            case 1:
              _context.p = 1;
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
              _context.n = 2;
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
            case 2:
              console.log('Redis connection fully established and ready.');
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              console.error('❌ Failed to connect to Redis:', _t);
              if (this.redisClient) {
                this.redisClient.disconnect();
                this.redisClient = null;
              }
              throw _t;
            case 4:
              return _context.a(2);
          }
        }, _callee, this, [[1, 3]]);
      }));
      function connectRedis() {
        return _connectRedis.apply(this, arguments);
      }
      return connectRedis;
    }()
  }, {
    key: "exists",
    value: function () {
      var _exists = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(key) {
        var _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              if (!(!this.redisClient || this.redisClient.status !== 'ready')) {
                _context2.n = 1;
                break;
              }
              throw new Error('Redis client not connected or ready. Cannot check key existence.');
            case 1:
              _context2.p = 1;
              _context2.n = 2;
              return this.redisClient.exists(key);
            case 2:
              return _context2.a(2, _context2.v);
            case 3:
              _context2.p = 3;
              _t2 = _context2.v;
              console.error("\u274C Error checking existence for key '".concat(key, "':"), _t2);
              throw _t2;
            case 4:
              return _context2.a(2);
          }
        }, _callee2, this, [[1, 3]]);
      }));
      function exists(_x) {
        return _exists.apply(this, arguments);
      }
      return exists;
    }()
  }, {
    key: "setJSON",
    value: function () {
      var _setJSON = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(key, item) {
        var expirationSeconds,
          keepTTL,
          stringifiedItem,
          _args3 = arguments,
          _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              expirationSeconds = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : null;
              keepTTL = _args3.length > 3 && _args3[3] !== undefined ? _args3[3] : false;
              if (!(!this.redisClient || this.redisClient.status !== 'ready')) {
                _context3.n = 1;
                break;
              }
              throw new Error('Redis client not connected or ready. Cannot set item.');
            case 1:
              _context3.p = 1;
              stringifiedItem = _typeof(item) === 'object' && item !== null ? JSON.stringify(item) : String(item);
              if (!keepTTL) {
                _context3.n = 3;
                break;
              }
              _context3.n = 2;
              return this.redisClient.set(key, stringifiedItem, 'KEEPTTL');
            case 2:
              console.log("\u2705 Set item: '".concat(key, "' with KEEPTTL"));
              _context3.n = 7;
              break;
            case 3:
              if (!(expirationSeconds !== undefined && expirationSeconds !== null)) {
                _context3.n = 5;
                break;
              }
              _context3.n = 4;
              return this.redisClient.set(key, stringifiedItem, 'EX', expirationSeconds);
            case 4:
              console.log("\u2705 Set item: '".concat(key, "' with expiration ").concat(expirationSeconds, "s"));
              _context3.n = 7;
              break;
            case 5:
              _context3.n = 6;
              return this.redisClient.set(key, stringifiedItem);
            case 6:
              console.log("\u2705 Set item: '".concat(key, "' (no expiration)"));
            case 7:
              return _context3.a(2, true);
            case 8:
              _context3.p = 8;
              _t3 = _context3.v;
              console.error("\u274C Error setting item for key '".concat(key, "':"), _t3);
              throw _t3;
            case 9:
              return _context3.a(2);
          }
        }, _callee3, this, [[1, 8]]);
      }));
      function setJSON(_x2, _x3) {
        return _setJSON.apply(this, arguments);
      }
      return setJSON;
    }()
  }, {
    key: "sadd",
    value: function () {
      var _sadd = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(key) {
        var _len,
          members,
          _key,
          _this$redisClient,
          addedCount,
          _args4 = arguments,
          _t4;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              if (!(!this.redisClient || this.redisClient.status !== 'ready')) {
                _context4.n = 1;
                break;
              }
              throw new Error('Redis client not connected or ready. Cannot add to set.');
            case 1:
              for (_len = _args4.length, members = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                members[_key - 1] = _args4[_key];
              }
              if (!(members.length === 0)) {
                _context4.n = 2;
                break;
              }
              console.warn("No members provided for SADD to key '".concat(key, "'."));
              return _context4.a(2, 0);
            case 2:
              _context4.p = 2;
              _context4.n = 3;
              return (_this$redisClient = this.redisClient).sadd.apply(_this$redisClient, [key].concat(members));
            case 3:
              addedCount = _context4.v;
              console.log("\u2705 Added ".concat(addedCount, " member(s) to set '").concat(key, "'."));
              return _context4.a(2, addedCount);
            case 4:
              _context4.p = 4;
              _t4 = _context4.v;
              console.error("\u274C Error adding to set '".concat(key, "':"), _t4);
              throw _t4;
            case 5:
              return _context4.a(2);
          }
        }, _callee4, this, [[2, 4]]);
      }));
      function sadd(_x4) {
        return _sadd.apply(this, arguments);
      }
      return sadd;
    }()
  }, {
    key: "smembers",
    value: function () {
      var _smembers = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(key) {
        var _members, _t5;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              if (!(!this.redisClient || this.redisClient.status !== 'ready')) {
                _context5.n = 1;
                break;
              }
              throw new Error('Redis client not connected or ready. Cannot get set members.');
            case 1:
              _context5.p = 1;
              _context5.n = 2;
              return this.redisClient.smembers(key);
            case 2:
              _members = _context5.v;
              console.log("\uD83D\uDD0E Retrieved ".concat(_members.length, " member(s) from set '").concat(key, "'."));
              return _context5.a(2, _members);
            case 3:
              _context5.p = 3;
              _t5 = _context5.v;
              console.error("\u274C Error getting members from set '".concat(key, "':"), _t5);
              throw _t5;
            case 4:
              return _context5.a(2);
          }
        }, _callee5, this, [[1, 3]]);
      }));
      function smembers(_x5) {
        return _smembers.apply(this, arguments);
      }
      return smembers;
    }()
  }, {
    key: "sismember",
    value: function () {
      var _sismember = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(key, member) {
        var isMember, _t6;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              if (!(!this.redisClient || this.redisClient.status !== 'ready')) {
                _context6.n = 1;
                break;
              }
              throw new Error('Redis client not connected or ready. Cannot check set member existence.');
            case 1:
              _context6.p = 1;
              _context6.n = 2;
              return this.redisClient.sismember(key, member);
            case 2:
              isMember = _context6.v;
              console.log("\uD83D\uDD0E Checked if '".concat(member, "' is a member of set '").concat(key, "': ").concat(isMember ? 'Yes' : 'No', "."));
              return _context6.a(2, isMember === 1);
            case 3:
              _context6.p = 3;
              _t6 = _context6.v;
              console.error("\u274C Error checking sismember for key '".concat(key, "' and member '").concat(member, "':"), _t6);
              throw _t6;
            case 4:
              return _context6.a(2);
          }
        }, _callee6, this, [[1, 3]]);
      }));
      function sismember(_x6, _x7) {
        return _sismember.apply(this, arguments);
      }
      return sismember;
    }()
  }, {
    key: "hset",
    value: function () {
      var _hset = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(key, field, value) {
        var result, _t7;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              if (!(!this.redisClient || this.redisClient.status !== 'ready')) {
                _context7.n = 1;
                break;
              }
              throw new Error('Redis client not connected or ready. Cannot set hash field.');
            case 1:
              _context7.p = 1;
              _context7.n = 2;
              return this.redisClient.hset(key, field, value);
            case 2:
              result = _context7.v;
              console.log("\u2705 Set hash field '".concat(field, "' in key '").concat(key, "'. Result: ").concat(result));
              return _context7.a(2, result);
            case 3:
              _context7.p = 3;
              _t7 = _context7.v;
              console.error("\u274C Error setting hash field '".concat(field, "' in key '").concat(key, "':"), _t7);
              throw _t7;
            case 4:
              return _context7.a(2);
          }
        }, _callee7, this, [[1, 3]]);
      }));
      function hset(_x8, _x9, _x0) {
        return _hset.apply(this, arguments);
      }
      return hset;
    }()
  }, {
    key: "hgetall",
    value: function () {
      var _hgetall = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(key) {
        var result, _t8;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.n) {
            case 0:
              if (!(!this.redisClient || this.redisClient.status !== 'ready')) {
                _context8.n = 1;
                break;
              }
              throw new Error('Redis client not connected or ready. Cannot get all hash fields.');
            case 1:
              _context8.p = 1;
              _context8.n = 2;
              return this.redisClient.hgetall(key);
            case 2:
              result = _context8.v;
              console.log("\uD83D\uDD0E Retrieved all fields from hash '".concat(key, "'. Found ").concat(Object.keys(result).length, " fields."));
              return _context8.a(2, result);
            case 3:
              _context8.p = 3;
              _t8 = _context8.v;
              console.error("\u274C Error getting all hash fields from key '".concat(key, "':"), _t8);
              throw _t8;
            case 4:
              return _context8.a(2);
          }
        }, _callee8, this, [[1, 3]]);
      }));
      function hgetall(_x1) {
        return _hgetall.apply(this, arguments);
      }
      return hgetall;
    }()
  }, {
    key: "hget",
    value: function () {
      var _hget = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(key, field) {
        var result, _t9;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.n) {
            case 0:
              if (!(!this.redisClient || this.redisClient.status !== 'ready')) {
                _context9.n = 1;
                break;
              }
              throw new Error('Redis client not connected or ready. Cannot get hash field.');
            case 1:
              _context9.p = 1;
              _context9.n = 2;
              return this.redisClient.hget(key, field);
            case 2:
              result = _context9.v;
              if (result === null) {
                console.log("\uD83D\uDD0E Hash field '".concat(field, "' not found in key '").concat(key, "'."));
              } else {
                console.log("\uD83D\uDD0E Retrieved hash field '".concat(field, "' from key '").concat(key, "'."));
              }
              return _context9.a(2, result);
            case 3:
              _context9.p = 3;
              _t9 = _context9.v;
              console.error("\u274C Error getting hash field '".concat(field, "' from key '").concat(key, "':"), _t9);
              throw _t9;
            case 4:
              return _context9.a(2);
          }
        }, _callee9, this, [[1, 3]]);
      }));
      function hget(_x10, _x11) {
        return _hget.apply(this, arguments);
      }
      return hget;
    }()
  }, {
    key: "getJSON",
    value: function () {
      var _getJSON = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(key) {
        var result, parsed, _t0, _t1;
        return _regenerator().w(function (_context0) {
          while (1) switch (_context0.n) {
            case 0:
              if (!(!this.redisClient || this.redisClient.status !== 'ready')) {
                _context0.n = 1;
                break;
              }
              throw new Error('Redis client not connected or ready. Cannot get item.');
            case 1:
              _context0.p = 1;
              _context0.n = 2;
              return this.redisClient.get(key);
            case 2:
              result = _context0.v;
              if (!(result === null)) {
                _context0.n = 3;
                break;
              }
              console.log("\uD83D\uDD0E Item '".concat(key, "' not found in Redis."));
              return _context0.a(2, null);
            case 3:
              _context0.p = 3;
              parsed = JSON.parse(result);
              console.log("\uD83D\uDD0E Got item: '".concat(key, "' (parsed JSON)"));
              return _context0.a(2, parsed);
            case 4:
              _context0.p = 4;
              _t0 = _context0.v;
              console.log("\uD83D\uDD0E Got item: '".concat(key, "' (string, JSON parse failed)"));
              return _context0.a(2, result);
            case 5:
              _context0.p = 5;
              _t1 = _context0.v;
              console.error("\u274C Error getting item for key '".concat(key, "':"), _t1);
              throw _t1;
            case 6:
              return _context0.a(2);
          }
        }, _callee0, this, [[3, 4], [1, 5]]);
      }));
      function getJSON(_x12) {
        return _getJSON.apply(this, arguments);
      }
      return getJSON;
    }()
  }, {
    key: "setItem",
    value: function () {
      var _setItem = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(_ref) {
        var key, item, expiration, errorMessage, stringifiedItem, _errorMessage, _t10;
        return _regenerator().w(function (_context1) {
          while (1) switch (_context1.n) {
            case 0:
              key = _ref.key, item = _ref.item, expiration = _ref.expiration;
              if (!(!this.redisClient || this.redisClient.status !== 'ready')) {
                _context1.n = 1;
                break;
              }
              errorMessage = 'Redis client not connected or ready. Cannot set item.';
              console.error(errorMessage);
              throw new Error(errorMessage);
            case 1:
              _context1.p = 1;
              stringifiedItem = _typeof(item) === 'object' && item !== null ? JSON.stringify(item) : String(item);
              if (!(expiration !== undefined && expiration !== null)) {
                _context1.n = 3;
                break;
              }
              _context1.n = 2;
              return this.redisClient.set(key, stringifiedItem, 'EX', expiration);
            case 2:
              console.log("\u2705 Set item: '".concat(key, "' with expiration ").concat(expiration, "s"));
              _context1.n = 5;
              break;
            case 3:
              _context1.n = 4;
              return this.redisClient.set(key, stringifiedItem);
            case 4:
              console.log("\u2705 Set item: '".concat(key, "' (no expiration)"));
            case 5:
              return _context1.a(2, true);
            case 6:
              _context1.p = 6;
              _t10 = _context1.v;
              _errorMessage = "\u274C Error setting item for key '".concat(key, "': ").concat(_t10.message);
              console.error(_errorMessage, _t10);
              throw _t10;
            case 7:
              return _context1.a(2);
          }
        }, _callee1, this, [[1, 6]]);
      }));
      function setItem(_x13) {
        return _setItem.apply(this, arguments);
      }
      return setItem;
    }()
  }, {
    key: "getItem",
    value: function () {
      var _getItem = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(key) {
        var result, parsed, _t11, _t12;
        return _regenerator().w(function (_context10) {
          while (1) switch (_context10.n) {
            case 0:
              if (!(!this.redisClient || this.redisClient.status !== 'ready')) {
                _context10.n = 1;
                break;
              }
              throw new Error('Redis client not connected or ready. Cannot get item.');
            case 1:
              _context10.p = 1;
              _context10.n = 2;
              return this.redisClient.get(key);
            case 2:
              result = _context10.v;
              if (!(result === null)) {
                _context10.n = 3;
                break;
              }
              console.log("\uD83D\uDD0E Item '".concat(key, "' not found in Redis."));
              return _context10.a(2, null);
            case 3:
              _context10.p = 3;
              parsed = JSON.parse(result);
              console.log("\uD83D\uDD0E Got item: '".concat(key, "' (parsed JSON)"));
              return _context10.a(2, parsed);
            case 4:
              _context10.p = 4;
              _t11 = _context10.v;
              console.log("\uD83D\uDD0E Got item: '".concat(key, "' (string)"));
              return _context10.a(2, result);
            case 5:
              _context10.p = 5;
              _t12 = _context10.v;
              console.error("\u274C Error getting item for key '".concat(key, "':"), _t12);
              throw _t12;
            case 6:
              return _context10.a(2);
          }
        }, _callee10, this, [[3, 4], [1, 5]]);
      }));
      function getItem(_x14) {
        return _getItem.apply(this, arguments);
      }
      return getItem;
    }()
  }, {
    key: "deleteItem",
    value: function () {
      var _deleteItem = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11() {
        var _len2,
          keys,
          _key2,
          _this$redisClient2,
          deletedCount,
          _args11 = arguments,
          _t13;
        return _regenerator().w(function (_context11) {
          while (1) switch (_context11.n) {
            case 0:
              if (!(!this.redisClient || this.redisClient.status !== 'ready')) {
                _context11.n = 1;
                break;
              }
              throw new Error('Redis client not connected or ready. Cannot delete item(s).');
            case 1:
              for (_len2 = _args11.length, keys = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                keys[_key2] = _args11[_key2];
              }
              if (!(keys.length === 0)) {
                _context11.n = 2;
                break;
              }
              console.warn('No keys provided for deletion.');
              return _context11.a(2, 0);
            case 2:
              _context11.p = 2;
              _context11.n = 3;
              return (_this$redisClient2 = this.redisClient).del.apply(_this$redisClient2, keys);
            case 3:
              deletedCount = _context11.v;
              console.log("\uD83D\uDDD1\uFE0F Deleted ".concat(deletedCount, " item(s) from Redis: ").concat(keys.join(', ')));
              return _context11.a(2, deletedCount);
            case 4:
              _context11.p = 4;
              _t13 = _context11.v;
              console.error("\u274C Error deleting item(s) for keys '".concat(keys.join(', '), "':"), _t13);
              throw _t13;
            case 5:
              return _context11.a(2);
          }
        }, _callee11, this, [[2, 4]]);
      }));
      function deleteItem() {
        return _deleteItem.apply(this, arguments);
      }
      return deleteItem;
    }()
  }, {
    key: "srem",
    value: function () {
      var _srem = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(key) {
        var _len3,
          members,
          _key3,
          _this$redisClient3,
          removedCount,
          _args12 = arguments,
          _t14;
        return _regenerator().w(function (_context12) {
          while (1) switch (_context12.n) {
            case 0:
              if (!(!this.redisClient || this.redisClient.status !== 'ready')) {
                _context12.n = 1;
                break;
              }
              throw new Error('Redis client not connected or ready. Cannot remove from set.');
            case 1:
              for (_len3 = _args12.length, members = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                members[_key3 - 1] = _args12[_key3];
              }
              if (!(members.length === 0)) {
                _context12.n = 2;
                break;
              }
              console.warn("No members provided for SREM from key '".concat(key, "'."));
              return _context12.a(2, 0);
            case 2:
              _context12.p = 2;
              _context12.n = 3;
              return (_this$redisClient3 = this.redisClient).srem.apply(_this$redisClient3, [key].concat(members));
            case 3:
              removedCount = _context12.v;
              console.log("\uD83D\uDDD1\uFE0F Removed ".concat(removedCount, " member(s) from set '").concat(key, "'."));
              return _context12.a(2, removedCount);
            case 4:
              _context12.p = 4;
              _t14 = _context12.v;
              console.error("\u274C Error removing from set '".concat(key, "':"), _t14);
              throw _t14;
            case 5:
              return _context12.a(2);
          }
        }, _callee12, this, [[2, 4]]);
      }));
      function srem(_x15) {
        return _srem.apply(this, arguments);
      }
      return srem;
    }()
  }, {
    key: "disconnectRedis",
    value: function () {
      var _disconnectRedis = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13() {
        var _t15;
        return _regenerator().w(function (_context13) {
          while (1) switch (_context13.n) {
            case 0:
              if (!this.redisClient) {
                _context13.n = 5;
                break;
              }
              _context13.p = 1;
              _context13.n = 2;
              return this.redisClient.quit();
            case 2:
              console.log('👋 Redis client disconnected.');
              this.redisClient = null;
              _context13.n = 4;
              break;
            case 3:
              _context13.p = 3;
              _t15 = _context13.v;
              console.error('❌ Error disconnecting Redis:', _t15);
            case 4:
              _context13.n = 6;
              break;
            case 5:
              console.log('Redis client was not connected.');
            case 6:
              return _context13.a(2);
          }
        }, _callee13, this, [[1, 3]]);
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