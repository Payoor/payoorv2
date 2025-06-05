const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    lowercase: true
  }, 
  email: {
    type: String, 
    trim: true,
    lowercase: true,
    unique: true,
    sparse: true,
    validate: {
      validator: function (v) {
        return !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
      },
      message: props => `${props.value} is not a valid email!`
    }
  },
  phoneNumber: {
    type: String,
    trim: true,
    unique: true,
    sparse: true,
    /*validate: {
      validator: function (v) {
        return !v || /^\+?[1-9]\d{1,14}$/.test(v)
      },
      message: props => `${props.value} is not a valid phone number!`
    }*/
  },
  tokens: [
    {
      access: {
        type: String,
        required: true
      },
      token: {
        type: String,
        required: true
      }
    }
  ],
  googleId: {
    type: String,
    unique: true,
    sparse: true
  },
  authMethods: {
    type: [String],
    default: ['otp']
  },
  profilePicture: {
    type: String,
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

UserSchema.methods.generateAuthToken = function () {
  let user = this
  let access = 'auth'
  let token = jwt
    .sign({ _id: user._id.toHexString(), access }, process.env.JWT_SECRET)
    .toString()

  user.tokens.push({ access, token })

  return user.save().then(() => {
    return token
  })
}

UserSchema.methods.removeToken = function (token) {
  let user = this

  //console.log(user, 'test for user')

  return user.updateOne({
    $pull: {
      tokens: { token } 
    }
  })
}

UserSchema.statics.findByToken = function (token) {
  let User = this
  let decoded

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET)
  } catch (e) {
    return Promise.reject()
  }

  return User.findOne({
    _id: decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth'
  })
}

UserSchema.statics.findByIdentifier = function (identifier) {
  const User = this
  return User.findOne({
    $or: [
      { email: identifier.toLowerCase().trim() },
      { phoneNumber: identifier.trim() }
    ]
  })
}

const User = mongoose.model('User', UserSchema)

module.exports = User
