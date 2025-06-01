"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var authMiddleware = function authMiddleware(req, res, next) {
  try {
    var _req$headers$authoriz;
    var token = (_req$headers$authoriz = req.headers.authorization) === null || _req$headers$authoriz === void 0 ? void 0 : _req$headers$authoriz.split(' ')[1];
    if (!token) {
      return res.status(400).json({
        success: false,
        message: 'Token is required'
      });
    }
    var decoded = _jsonwebtoken["default"].verify(token, process.env.JWT_SECRET);
    req.userId = decoded._id;
    req.user = decoded;
    req.token = token;
    next();
  } catch (err) {
    console.error('JWT Auth error:', err);
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        message: 'Token expired'
      });
    }
    return res.status(401).json({
      success: false,
      message: 'Invalid token'
    });
  }
};
var _default = exports["default"] = authMiddleware;