"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _AuthClass = _interopRequireDefault(require("../controllers/AuthClass"));
var _authMiddleware = _interopRequireDefault(require("../middleware/authMiddleware"));
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const authRoute = (0, _express.default)();
authRoute.post('/shopper/auth/mail', _AuthClass.default.sendEmailOtp);
authRoute.post('/shopper/auth/verifyotp', _AuthClass.default.verifyOtp);
authRoute.post('/shopper/auth/google/token', _AuthClass.default.authGoogleToken);
authRoute.get('/shopper/auth/google/user', _AuthClass.default.authGoogleUser);
authRoute.get('/shopper/auth/test', async (req, res) => {
  res.send('hello therre');
});
authRoute.get('/shopper/auth/validuser', _AuthClass.default.getValidUser);
authRoute.post('/shopper/auth/updatedetails/phonenumber', _authMiddleware.default, _AuthClass.default.updatePhoneNumber);
authRoute.post('/shopper/auth/updatedetails/name', _authMiddleware.default, _AuthClass.default.updateName);
authRoute.post('/shopper/auth/updatedetails', _authMiddleware.default, _AuthClass.default.updateDetails);
authRoute.post('/shopper/auth/signout', _AuthClass.default.signOut);
var _default = exports.default = authRoute;