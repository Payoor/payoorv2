"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
const adminSchema = new _mongoose.default.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters long']
  }
}, {
  timestamps: true
});

// Hash password before saving
adminSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await _bcrypt.default.genSalt(10);
    this.password = await _bcrypt.default.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// Add method to compare password
adminSchema.methods.comparePassword = function (candidatePassword) {
  return _bcrypt.default.compare(candidatePassword, this.password);
};
const Admin = _mongoose.default.models.Admin || _mongoose.default.model('Admin', adminSchema);
var _default = exports.default = Admin;