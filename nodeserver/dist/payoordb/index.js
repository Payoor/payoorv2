"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const connection_string = process.env.PAYOOR_DB;
const payoorDBConnection = _mongoose.default.createConnection(`${connection_string}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
payoorDBConnection.on('connected', () => {
  console.log('Successfully connected to payoordb');
});
payoorDBConnection.on('error', err => {
  console.error('Error connecting to payoordb:', err);
});
payoorDBConnection.on('disconnected', () => {
  console.log('Disconnected from payoordb');
});
var _default = exports.default = payoorDBConnection;