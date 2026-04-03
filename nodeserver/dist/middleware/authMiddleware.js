"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    //console.log(token, req.headers)

    if (!token) {
      return res.status(400).json({
        success: false,
        message: 'Token is required'
      });
    }
    const decoded = _jsonwebtoken.default.verify(token, process.env.JWT_SECRET);
    req.userId = decoded._id;
    req.user = decoded;
    req.token = token;
    next();
  } catch (err) {
    next(err);
    console.error('JWT Auth error:', err);
  }
};
var _default = exports.default = authMiddleware;