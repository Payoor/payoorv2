require('dotenv').config()
import { Resend } from 'resend'
import speakeasy from 'speakeasy'
import crypto from 'crypto'

const resend = new Resend(`${process.env.RESEND_API_KEY}`)

import { redisClient } from '../redisconf'

import User from '../models/User'

class AuthClass {
  static async genOtp (identifier) {
    if (!identifier || typeof identifier !== 'string') {
      throw new Error('Identifier is required and must be a string')
    }

    const secret = speakeasy.generateSecret()
    const token = speakeasy.totp({ secret: secret.base32 })

    return token
  }

  static async sendEmailOtp (req, res) {
    try {
      const { identifier } = req.body

      if (!identifier) {
        return res.status(400).json({ error: 'Identifier is required' })
      }

      const otp = await AuthClass.genOtp(identifier)

      await AuthClass.saveOtpToIdentifier(otp, identifier)

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

      console.log(data, 'data')

      res.status(200).json({ message: 'Authentication successful' })
    } catch (error) {
      console.error('Authentication error:', error)
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  static async saveOtpToIdentifier (otp, identifier) {
    try {
      if (!otp || !identifier) {
        throw new Error('OTP and identifier are required')
      }

      const key = `otp:code:${hashOtp(otp)}`
      await redisClient.setEx(key, 600, identifier.toLowerCase().trim())

      console.log(`Mapped hashed OTP to identifier. Key: ${key}`)
      return true
    } catch (error) {
      console.error('Failed to save OTP:', error)
      return false
    }
  }

  static async verifyOtp (req, res) {
    try {
      const { submittedOtp } = req.body

      if (!submittedOtp) {
        return res
          .status(400)
          .json({ success: false, message: 'OTP is required' })
      }

      const hashedKey = `otp:code:${hashOtp(submittedOtp)}`
      const identifier = await redisClient.get(hashedKey)

      if (!identifier) {
        return res
          .status(401)
          .json({ success: false, message: 'OTP expired or invalid' })
      }

      let user = await User.findByIdentifier(identifier)

      if (!user) {
        const identifierValueType = identifierType(identifier)

        if (identifierValueType === 'email') {
          user = await User.create({ email: identifier })
        } else if (identifierValueType === 'phone') {
          user = await User.create({ phoneNumber: identifier })
        } else {
          return res.status(400).json({
            success: false,
            message: 'Identifier is neither a valid email nor phone number'
          })
        }
      }

      const token = await user.generateAuthToken()

      await redisClient.setEx(
        `auth:session:${token}`,
        2592000,
        user._id.toString()
      )

      await redisClient.del(hashedKey)

      return res.status(200).json({
        success: true,
        message: 'OTP verified',
        user: {
          id: user._id,
          email: user.email,
          phoneNumber: user.phoneNumber,
          token
        }
      })
    } catch (error) {
      console.error('OTP verification error:', error)
      return res
        .status(500)
        .json({ success: false, message: 'Internal server error' })
    }
  }

  static async googleAuth (req, res) {
    try {
      const { email } = req.body

      console.log(email)
    } catch (error) {
      console.error('OTP verification error:', error)
      return res
        .status(500)
        .json({ success: false, message: 'Internal server error' })
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
