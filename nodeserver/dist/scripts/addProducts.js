"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["_id", "__v"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var fs = require('fs');
var axios = require('axios');
var filePath = __dirname + '/updated_products.json';
fs.readFile(filePath, 'utf8', function (err, data) {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  /*
      If you run the bulk insert again with the same _id, the behavior depends on the operation:
       If using { "index": { ... } }, it replaces the document (overwrites it).
       If using { "create": { ... } }, it will fail if the ID already exists.
       If using { "update": { ... } }, it will update only the specified fields.
   */

  try {
    var products = JSON.parse(data);
    var bulkPayload = '';
    products.forEach(function (product) {
      var _product = product,
        _id = _product._id,
        __v = _product.__v,
        removeIdField = _objectWithoutProperties(_product, _excluded);
      product = _objectSpread({
        _mongooseid: _id
      }, removeIdField);
      bulkPayload += JSON.stringify({
        index: {
          _id: product._mongooseid
        }
      }) + '\n';
      bulkPayload += JSON.stringify(product) + '\n';
    });
    axios.post('http://payoorv2-elasticsearch-1:9200/products/_bulk?refresh', bulkPayload, {
      headers: {
        'Content-Type': 'application/x-ndjson'
      }
    }).then(function (response) {
      console.log('Bulk insert response:', response.data);
      response.data.items.forEach(function (item, idx) {
        console.log(item);
      });
    })["catch"](function (error) {
      console.error('Error in bulk insert:', error.response ? error.response.data : error.message);
    });
  } catch (parseErr) {
    console.error('Error parsing JSON:', parseErr);
  }
});