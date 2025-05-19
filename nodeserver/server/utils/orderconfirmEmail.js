import { Resend } from 'resend'
import User from '../models/User' // adjust the path to your User model
const resend = new Resend(process.env.RESEND_API_KEY)

async function orderconfirmEmail (user_id, order_link) {
  try {
    const user = await User.findOne({ _id: user_id })
    if (!user || !user.email) {
      throw new Error('User not found or email missing')
    }

    const data = await resend.emails.send({
      from: 'Payoor <confirmation@order.payoor.store>',
      to: [user.email],
      subject: 'Order Confirmation from Payoor',
      html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Order Confirmation</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
          <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; background-color: #f4f4f4; padding: 20px;">
            <tr>
              <td align="center">
                <table role="presentation" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background-color: rgba(36, 155, 72, 1); padding: 30px 0; text-align: center;">
                      <h2 style="color: #ffffff; font-size: 24px;">Order Confirmed</h2>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <p style="margin: 0 0 20px; color: #333333; font-size: 18px;">
                        Your order has been confirmed!
                      </p>
                      <p style="margin: 0 0 20px; color: #666666; font-size: 16px;">
                        You can view the details of your order by clicking the link below:
                      </p>
                      <div style="margin: 30px 0; text-align: center;">
                        <a href="${order_link}" style="display: inline-block; background-color: rgba(36, 155, 72, 1); color: #ffffff; text-decoration: none; padding: 12px 20px; border-radius: 6px; font-size: 16px;">
                          View Your Order
                        </a>
                      </div>
                      <p style="color: #999999; font-size: 14px; text-align: center;">
                        If you did not place this order, please contact us immediately.
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="padding: 20px 30px; background-color: #f8f8f8; text-align: center;">
                      <p style="margin: 0; color: #999999; font-size: 14px;">
                        This is an automated message, please do not reply.
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

    console.log(data, 'email sent')
  } catch (error) {
    console.log(error)
  }
}

export default orderconfirmEmail
