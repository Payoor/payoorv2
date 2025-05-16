"use strict";

var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    sparse: true,
    validate: {
      validator: function validator(v) {
        return !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: function message(props) {
        return "".concat(props.value, " is not a valid email!");
      }
    }
  },
  phoneNumber: {
    type: String,
    trim: true,
    unique: true,
    sparse: true,
    validate: {
      validator: function validator(v) {
        return !v || /^\+?[1-9]\d{1,14}$/.test(v);
      },
      message: function message(props) {
        return "".concat(props.value, " is not a valid phone number!");
      }
    }
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }],
  createdAt: {
    type: Date,
    "default": Date.now
  }
});
UserSchema.methods.generateAuthToken = function () {
  var user = this;
  var access = 'auth';
  var token = jwt.sign({
    _id: user._id.toHexString(),
    access: access
  }, process.env.JWT_SECRET).toString();
  user.tokens.push({
    access: access,
    token: token
  });
  return user.save().then(function () {
    return token;
  });
};
UserSchema.methods.removeToken = function (token) {
  var user = this;
  return user.update({
    $pull: {
      tokens: {
        token: token
      }
    }
  });
};
UserSchema.statics.findByToken = function (token) {
  var User = this;
  var decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (e) {
    return Promise.reject();
  }
  return User.findOne({
    _id: decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth'
  });
};
UserSchema.statics.findByIdentifier = function (identifier) {
  var User = this;
  return User.findOne({
    $or: [{
      email: identifier.toLowerCase().trim()
    }, {
      phoneNumber: identifier.trim()
    }]
  });
};
var User = mongoose.model('User', UserSchema);
module.exports = User;