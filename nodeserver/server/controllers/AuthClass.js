require('dotenv').config()
import { Resend } from 'resend'
import speakeasy from 'speakeasy'
import crypto from 'crypto'

const resend = new Resend(`${process.env.RESEND_API_KEY}`);

import redisManager from '../RedisManager';

import User from '../models/User';

class AuthClass {
  static async genOtp (identifier) {
    if (!identifier || typeof identifier !== 'string') {
      throw new Error('Identifier is required and must be a string')
    }

    const secret = speakeasy.generateSecret()
    const token = speakeasy.totp({ secret: secret.base32 })

    return token
  }

  static async sendEmailOtp (req, res, next) {
    try {
      const { identifier } = req.body

      console.log('Received identifier:', identifier)

      if (!identifier) {
        return res.status(400).json({ userMessage: 'Identifier is required' })
      }

      const otp = await AuthClass.genOtp(identifier)

      await AuthClass.saveOtpToIdentifier(otp, identifier, next)

      const data = await resend.emails.send({
        from: 'Payoor <hello@otp.payoor.store>',
        to: [`${identifier}`],
        subject: 'Otp from Payoor',
        html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Your Verification Code</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
          <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; background-color: #f4f4f4; padding: 20px;">
            <tr>
              <td align="center">
                <table role="presentation" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                  <!-- Header -->
                  <tr>
                    <td style="background-color: rgba(36, 155, 72, 1); padding: 30px 0; text-align: center;">
                      
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <h1 style="margin: 0 0 20px; color: #333333; font-size: 24px; font-weight: bold;">
                        Verification Code
                      </h1>
                      <p style="margin: 0 0 30px; color: #666666; font-size: 16px; line-height: 24px;">
                        To complete your verification, please use the following code:
                      </p>
                      <div style="background-color: #f8f8f8; border-radius: 6px; padding: 20px; text-align: center; margin-bottom: 30px;">
                        <span style="font-family: monospace; font-size: 32px; font-weight: bold; letter-spacing: 4px; color: rgba(36, 155, 72, 1);">
                          ${otp}
                        </span>
                      </div>
                      <p style="margin: 0 0 30px; color: #666666; font-size: 16px; line-height: 24px;">
                        This code will expire in 10 minutes for security purposes. If you didn't request this code, please ignore this email.
                      </p>
                      <p style="margin: 0; color: #666666; font-size: 14px; line-height: 20px;">
                        For security reasons, please do not share this code with anyone.
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="padding: 20px 30px; background-color: #f8f8f8; text-align: center;">
                      <p style="margin: 0; color: #999999; font-size: 14px;">
                        This is an automated message, please do not reply to this email.
                      </p>
                      <p style="margin: 10px 0 0; color: #999999; font-size: 14px;">
                        © 2025 Payoor. All rights reserved.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `
      })

      console.log(data, 'email send data')

      res.status(200).json({ message: 'Authentication successful' })
    } catch (error) {
      next(error)
    }
  }

  static async saveOtpToIdentifier (otp, identifier, next) {
    try {
      if (!otp || !identifier) {
        throw new Error('OTP and identifier are required')
      }

      const key = `otp:code:${hashOtp(otp)}`
      const expirationSeconds = 600;

      await redisManager.setItem({
        key,
        item: identifier.toLowerCase().trim(),
        expiration: expirationSeconds
      })

      console.log(`Mapped hashed OTP to identifier. Key: ${key}`)
      return true
    } catch (error) {
      console.error('[saveOtpToIdentifier] Error:', error);
      next(error)
    }
  }

  static async verifyOtp (req, res, next) {
    try {
      const { submittedOtp } = req.body

      if (!submittedOtp) {
        return res
          .status(400)
          .json({ success: false, userMessage: 'OTP is required' })
      }

      const hashedKey = `otp:code:${hashOtp(submittedOtp)}`

      let identifier
      try {
        console.time('[verifyOtp] Redis GET')
        
        identifier = await redisManager.getItem(hashedKey)
        console.timeEnd('[verifyOtp] Redis GET')
      } catch (redisErr) {
        console.error('[verifyOtp] Redis GET failed:', redisErr)
        return next(redisErr)
      }

      if (!identifier) {
        return res
          .status(401)
          .json({ success: false, userMessage: 'OTP expired or invalid' })
      }

      let user
      try {
        console.time('[verifyOtp] Mongo FIND')
        user = await User.findByIdentifier(identifier)
        console.timeEnd('[verifyOtp] Mongo FIND')
      } catch (mongoErr) {
        console.error('[verifyOtp] MongoDB query failed:', mongoErr)
        return next(mongoErr)
      }

      if (!user) {
        const type = identifierType(identifier)
        console.log('[verifyOtp] Creating new user of type:', type)

        try {
          if (type === 'email') {
            user = await User.create({ email: identifier })
          } else if (type === 'phone') {
            user = await User.create({ phoneNumber: identifier })
          } else {
            return res.status(400).json({
              success: false,
              userMessage: 'Identifier is neither email nor phone number'
            })
          }
        } catch (createErr) {
          console.error('[verifyOtp] User creation failed:', createErr)
          return next(createErr)
        }
      }

      let token
      try {
        console.time('[verifyOtp] Generate Token')
        token = await user.generateAuthToken()
        console.timeEnd('[verifyOtp] Generate Token')
      } catch (tokenErr) {
        return next(tokenErr)
      }

      try {
        console.time('[verifyOtp] Redis SETEX')
       
        await redisManager.setItem({
          key: `auth:session:${token}`,
          item: user._id.toString(),
          expiration: 2592000 
        })
        console.timeEnd('[verifyOtp] Redis SETEX')

        console.log('[verifyOtp] Cleaning up OTP key')
        
        await redisManager.deleteItem(hashedKey)
      } catch (redisWriteErr) {
        console.error('[verifyOtp] Redis SETEX/DEL failed:', redisWriteErr)
        return next(redisWriteErr)
      }

      return res.status(200).json({
        success: true,
        userMessage: 'OTP verified',
        user: {
          id: user._id,
          email: user.email,
          phoneNumber: user.phoneNumber,
          name: user.name,
          token
        }
      })
    } catch (error) {
      console.error('[verifyOtp] Uncaught error:', error)
      return next(error)
    }
  }

  static async googleAuth (req, res, next) {
    try {
      const { email, googleId, picture } = req.body

      console.log('Google Auth received:', { email, googleId, picture })
      console.log('==============================')

      if (!email || !googleId) {
        return res.status(400).json({
          success: false,
          userMessage: 'Email and Google ID are required'
        })
      }

      let user = await User.findOne({ email: email.toLowerCase().trim() })

      if (user) {
        let updated = false

        if (!user.googleId) {
          user.googleId = googleId
          updated = true
        }

        if (!user.authMethods) user.authMethods = []

        if (!user.authMethods.includes('google')) {
          user.authMethods.push('google')
          updated = true
        }

        if (!user.profilePicture && picture) {
          user.profilePicture = picture
          updated = true
        }

        if (updated) await user.save()
      } else {
        user = new User({
          email: email.toLowerCase().trim(),
          googleId,
          authMethods: ['google'],
          profilePicture: picture
        })
        await user.save()
      }

      const token = await user.generateAuthToken()

     
      await redisManager.setItem({
        key: `auth:session:${token}`,
        item: user._id.toString(),
        expiration: 2592000 // 30 days
      })

      console.log({
        id: user._id,
        email: user.email,
        token,
        profilePicture: user.profilePicture
      })

      return res.status(200).json({
        success: true,
        userMessage: 'Google authentication successful',
        user: {
          id: user._id,
          email: user.email,
          token,
          profilePicture: user.profilePicture
        }
      })
    } catch (error) {
      console.error('[googleAuth] Error:', error) 
      next(error)
    }
  }

  static async getValidUser (req, res, next) {
    try {
      const { jwttoken } = req.query

      const userId = await redisManager.getItem(`auth:session:${jwttoken}`);

      if (userId) {
        const user = await User.findByToken(jwttoken)

        let name = ''
        let email = ''
        let phoneNumber = ''

        if (user) {
          name = user.name
          phoneNumber = user.phoneNumber
          email = user.email
        }

        return res.status(200).json({
          success: true,
          userMessage: 'User found here now',
          user: {
            name,
            email,
            phoneNumber,
            detailsAdded: Boolean(phoneNumber && email),
            deg: 'debug here'
          }
        })
      } else {
        const user = await User.findByToken(jwttoken) 

        if (user) {
          await user.removeToken(jwttoken)
        }

        return res.status(404).json({
          success: false,
          userMessage: 'User not found'
        })
      }
    } catch (error) {
      console.error('[getValidUser] Error:', error) 
      next(error)
    }
  }

  static async updateDetails (req, res, next) {
    try {
      const { phoneNumber, name } = req.body
      const userId = req.userId 

      if (!userId) {
        return res.status(401).json({
          success: false,
          userMessage: 'Unauthorized: user ID not found in request'
        })
      }

      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { name, phoneNumber },
        { new: true }
      )

      if (!updatedUser) {
        return res.status(404).json({
          success: false,
          userMessage: 'User not found'
        })
      }

      return res.status(200).json({
        success: true,
        userMessage: 'User details updated successfully',
        user: {
          name: updatedUser.name,
          phoneNumber: updatedUser.phoneNumber
        }
      })
    } catch (error) {
      console.error('[updateDetails] Error:', error)
      next(error)
    }
  }

  static async updatePhoneNumber (req, res, next) {
    try {
      const { phoneNumber } = req.body
      const userId = req.userId 

      if (!userId) {
        return res.status(401).json({
          success: false,
          userMessage: 'Unauthorized: user ID not found in request'
        })
      }

      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { phoneNumber },
        { new: true }
      )

      if (!updatedUser) {
        return res.status(404).json({
          success: false,
          userMessage: 'User not found'
        })
      }

      return res.status(200).json({
        success: true,
        userMessage: 'User details updated successfully',
        user: {
          name: updatedUser.name,
          phoneNumber: updatedUser.phoneNumber,
          email: updatedUser.email
        }
      })
    } catch (error) {
      console.error('[updatePhoneNumber] Error:', error) 
      next(error)
    }
  }

  static async updateName (req, res, next) {
    try {
      const { name } = req.body
      const userId = req.userId 

      if (!userId) {
        return res.status(401).json({
          success: false,
          userMessage: 'Unauthorized: user ID not found in request'
        })
      }

      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { name },
        { new: true }
      )

      if (!updatedUser) {
        return res.status(404).json({
          success: false,
          userMessage: 'User not found'
        })
      }

      return res.status(200).json({
        success: true,
        userMessage: 'User details updated successfully',
        user: {
          name: updatedUser.name,
          phoneNumber: updatedUser.phoneNumber,
          email: updatedUser.email
        }
      })
    } catch (error) {
      console.error('[updateName] Error:', error) 
      next(error)
    }
  }

  static async signOut (req, res, next) {
    try {
      const token = req.headers.authorization?.split(' ')[1]

      if (!token) {
        return res
          .status(400)
          .json({ success: false, userMessage: 'Token is required' })
      }

      const user = await User.findByToken(token)

      if (!user) {
      
        console.warn(
          `User not found for token: ${token}, attempting Redis cleanup.`
        )

        await redisManager.deleteItem(`auth:session:${token}`)
        return res.status(404).json({
          success: false,
          userMessage: 'Invalid token or user not found'
        })
      }

      await user.removeToken(token)
      
      await redisManager.deleteItem(`auth:session:${token}`)

      return res
        .status(200)
        .json({ success: true, userMessage: 'Signed out successfully' })
    } catch (error) {
      console.error('[signOut] Error:', error);
      next(error)
    }
  }
}

function hashOtp (otp) {
  return crypto.createHash('sha256').update(otp).digest('hex')
}

function identifierType (input) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const phoneRegex = /^(\+?[1-9]\d{1,14}|0\d{10})$/ 

  if (emailRegex.test(input.trim().toLowerCase())) {
    return 'email'
  } else if (phoneRegex.test(input.trim())) {
    return 'phone'
  } else {
    return 'unknown'
  }
}

export default AuthClass
