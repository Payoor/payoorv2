"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
var connection_string = process.env.PAYOOR_DB;
var payoorDBConnection = _mongoose["default"].createConnection("".concat(connection_string), {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
payoorDBConnection.on('connected', function () {
  console.log('Successfully connected to payoordb');
});
payoorDBConnection.on('error', function (err) {
  console.error('Error connecting to payoordb:', err);
});
payoorDBConnection.on('disconnected', function () {
  console.log('Disconnected from payoordb');
});
var _default = exports["default"] = payoorDBConnection;