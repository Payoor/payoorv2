"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _AuthClass = _interopRequireDefault(require("../controllers/AuthClass"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
var authRoute = (0, _express["default"])();
authRoute.post('/shopper/auth/mail', _AuthClass["default"].sendEmailOtp);
authRoute.post('/shopper/auth/verifyotp', _AuthClass["default"].verifyOtp);
authRoute.post('/shopper/auth/google', _AuthClass["default"].googleAuth);
var _default = exports["default"] = authRoute;