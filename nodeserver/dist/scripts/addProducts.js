"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _mongoose = _interopRequireDefault(require("mongoose"));
var _Product = _interopRequireDefault(require("./models/Product.js"));
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
//const fs = require('fs')
//const axios = require('axios')

// getProducts.js
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
var MONGO_URL = process.env.MONGO_URL;
var ELASTICSEARCHURL = process.env.ELASTICSEARCHURL;
var INDEX_NAME = 'products';
if (!MONGO_URL) {
  console.error('❌ Missing MONGO_URL in environment');
  process.exit(1);
}
if (!ELASTICSEARCHURL) {
  console.error('❌ Missing ELASTICSEARCHURL in environment');
  process.exit(1);
}
var getAllProducts = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var products;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _Product["default"].find().lean();
        case 3:
          products = _context.sent;
          return _context.abrupt("return", products);
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error('Error fetching products:', _context.t0);
          throw _context.t0;
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function getAllProducts() {
    return _ref.apply(this, arguments);
  };
}();
var createProductsIndexIfMissing = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var baseUrl, existsResponse, response;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          baseUrl = ELASTICSEARCHURL.replace(/\/+$/, '');
          _context2.next = 4;
          return _axios["default"].head("".concat(baseUrl, "/").concat(INDEX_NAME))["catch"](function (err) {
            var _err$response;
            if (((_err$response = err.response) === null || _err$response === void 0 ? void 0 : _err$response.status) === 404) return null;
            throw err;
          });
        case 4:
          existsResponse = _context2.sent;
          if (!existsResponse) {
            _context2.next = 8;
            break;
          }
          console.log("\u2139\uFE0F Index \"".concat(INDEX_NAME, "\" already exists"));
          return _context2.abrupt("return");
        case 8:
          _context2.next = 10;
          return _axios["default"].put("".concat(baseUrl, "/").concat(INDEX_NAME), {
            mappings: {
              properties: {
                _mongooseid: {
                  type: 'keyword'
                },
                image: {
                  type: 'keyword'
                },
                name: {
                  type: 'text',
                  analyzer: 'standard',
                  fields: {
                    keyword: {
                      type: 'keyword'
                    }
                  }
                },
                generatedDescription: {
                  type: 'text',
                  analyzer: 'standard'
                },
                generatedCategories: {
                  type: 'keyword'
                },
                createdAt: {
                  type: 'date'
                },
                updatedAt: {
                  type: 'date'
                },
                variantCount: {
                  type: 'integer'
                },
                metadata: {
                  type: 'text',
                  analyzer: 'standard'
                },
                description: {
                  type: 'text',
                  analyzer: 'standard'
                }
              }
            }
          }, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
        case 10:
          response = _context2.sent;
          console.log("\u2705 Created index \"".concat(INDEX_NAME, "\""), response.data);
          _context2.next = 18;
          break;
        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](0);
          console.error('❌ Error creating index:', _context2.t0.response ? _context2.t0.response.data : _context2.t0.message);
          throw _context2.t0;
        case 18:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 14]]);
  }));
  return function createProductsIndexIfMissing() {
    return _ref2.apply(this, arguments);
  };
}();
var normalizeProductForElastic = function normalizeProductForElastic(product) {
  var _product$_id;
  return {
    _mongooseid: (_product$_id = product._id) === null || _product$_id === void 0 ? void 0 : _product$_id.toString(),
    image: product.image || '',
    name: product.name || '',
    generatedDescription: product.generatedDescription || '',
    generatedCategories: Array.isArray(product.generatedCategories) ? product.generatedCategories : [],
    createdAt: product.createdAt || null,
    updatedAt: product.updatedAt || null,
    variantCount: typeof product.variantCount === 'number' ? product.variantCount : 0,
    metadata: product.metadata || '',
    description: product.description || ''
  };
};
var bulkIndexProducts = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(products) {
    var baseUrl, bulkLines, _iterator, _step, product, doc, bulkBody, response, failedItems;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          if (products.length) {
            _context3.next = 3;
            break;
          }
          console.log('ℹ️ No products found to index');
          return _context3.abrupt("return");
        case 3:
          baseUrl = ELASTICSEARCHURL.replace(/\/+$/, '');
          bulkLines = [];
          _iterator = _createForOfIteratorHelper(products);
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              product = _step.value;
              doc = normalizeProductForElastic(product);
              bulkLines.push(JSON.stringify({
                index: {
                  _index: INDEX_NAME,
                  _id: doc._mongooseid
                }
              }));
              bulkLines.push(JSON.stringify(doc));
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          bulkBody = "".concat(bulkLines.join('\n'), "\n");
          _context3.prev = 8;
          _context3.next = 11;
          return _axios["default"].post("".concat(baseUrl, "/_bulk"), bulkBody, {
            headers: {
              'Content-Type': 'application/x-ndjson'
            },
            maxBodyLength: Infinity
          });
        case 11:
          response = _context3.sent;
          if (response.data.errors) {
            failedItems = response.data.items.filter(function (item) {
              var _item$index;
              return (_item$index = item.index) === null || _item$index === void 0 ? void 0 : _item$index.error;
            });
            console.error("\u26A0\uFE0F Bulk indexing completed with ".concat(failedItems.length, " failed items"));
            console.dir(failedItems.slice(0, 10), {
              depth: null
            });
          } else {
            console.log("\u2705 Successfully indexed ".concat(products.length, " products into \"").concat(INDEX_NAME, "\""));
          }
          _context3.next = 15;
          return _axios["default"].post("".concat(baseUrl, "/").concat(INDEX_NAME, "/_refresh"));
        case 15:
          console.log("\u2705 Refreshed \"".concat(INDEX_NAME, "\" index"));
          _context3.next = 22;
          break;
        case 18:
          _context3.prev = 18;
          _context3.t0 = _context3["catch"](8);
          console.error('❌ Error bulk indexing products:', _context3.t0.response ? _context3.t0.response.data : _context3.t0.message);
          throw _context3.t0;
        case 22:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[8, 18]]);
  }));
  return function bulkIndexProducts(_x) {
    return _ref3.apply(this, arguments);
  };
}();
var run = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var products;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _mongoose["default"].connect(MONGO_URL);
        case 3:
          console.log('✅ MongoDB connected');
          _context4.next = 6;
          return createProductsIndexIfMissing();
        case 6:
          _context4.next = 8;
          return getAllProducts();
        case 8:
          products = _context4.sent;
          console.log("\uD83D\uDCE6 Found ".concat(products.length, " products"));
          _context4.next = 12;
          return bulkIndexProducts(products);
        case 12:
          _context4.next = 18;
          break;
        case 14:
          _context4.prev = 14;
          _context4.t0 = _context4["catch"](0);
          console.error('❌ Script failed:', _context4.t0);
          process.exitCode = 1;
        case 18:
          _context4.prev = 18;
          _context4.prev = 19;
          _context4.next = 22;
          return _mongoose["default"].connection.close();
        case 22:
          console.log('✅ MongoDB connection closed');
          _context4.next = 28;
          break;
        case 25:
          _context4.prev = 25;
          _context4.t1 = _context4["catch"](19);
          console.error('⚠️ Error closing MongoDB connection:', _context4.t1);
        case 28:
          return _context4.finish(18);
        case 29:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 14, 18, 29], [19, 25]]);
  }));
  return function run() {
    return _ref4.apply(this, arguments);
  };
}();
run();

/*if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }

const filePath = __dirname + '/updated_products.json';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    /*
        If you run the bulk insert again with the same _id, the behavior depends on the operation:

        If using { "index": { ... } }, it replaces the document (overwrites it).

        If using { "create": { ... } }, it will fail if the ID already exists.

        If using { "update": { ... } }, it will update only the specified fields.

    

    try {
        const products = JSON.parse(data);
        
        let bulkPayload = '';

        products.forEach(product => {
            const {_id, __v, ...removeIdField} = product;

            product = {_mongooseid: _id, ...removeIdField}
            bulkPayload += JSON.stringify({ index: { _id: product._mongooseid } }) + '\n';
            bulkPayload += JSON.stringify(product) + '\n';
        });

        axios.post('http://payoorv2-elasticsearch-1:9200/products/_bulk?refresh', bulkPayload, {
            headers: { 'Content-Type': 'application/x-ndjson' }
        })
        .then(response => {
            console.log('Bulk insert response:', response.data);
            response.data.items.forEach((item, idx) => {
                console.log(item)
            });
        })
        .catch(error => {
            console.error('Error in bulk insert:', error.response ? error.response.data : error.message);
        });

    } catch (parseErr) {
        console.error('Error parsing JSON:', parseErr);
    }
});

*/