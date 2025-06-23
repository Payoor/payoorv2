const TelegramBot = require('node-telegram-bot-api')
import fs from 'fs'
import path from 'path'
import ExcelJS from 'exceljs'
import { redisClient } from '../redisconf'
import CouponClass from '../CouponClass'

import Order from '../models/Order'
import Checkout from '../models/Checkout'
import User from '../models/User'
import Product from '../models/Product'
import ProductVariant from '../models/ProductVariant'

const BOT_USERNAME = `alertpabot`
const PAYOOR_URL = process.env.PAYOOR_URL

function parseTtlToSeconds (input) {
  const match = input.match(/^([0-9]+)([smhdw])$/i)
  if (!match) return null

  const value = parseInt(match[1])
  const unit = match[2].toLowerCase()

  switch (unit) {
    case 's':
      return value
    case 'm':
      return value * 60
    case 'h':
      return value * 3600
    case 'd':
      return value * 86400
    case 'w':
      return value * 604800
    default:
      return null
  }
}

export class TelegramBotClass {
  constructor (redisClient) {
    this.redisClient = redisClient
    this.bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true })
    this.admin_code = process.env.ADMIN_CODE
    this.super_admin_id = process.env.SUPER_ADMIN_ID
    this.admin_list_key = 'telegram:admin:chat_ids'
  }

  startBot () {
    this.bot.on('message', async msg => {
      // console.log(msg, 'test message here')

      const telegramid = msg.chat.id.toString()
      const messageText = msg.text.toLowerCase().trim()
      const parts = messageText.split(' ')
      const args = parts.slice(1)
      const command = parts[0]?.toLowerCase()
      const arg1 = args[0]?.trim()
      const arg2 = args[1]?.trim()

      try {
        if (messageText === this.admin_code.toLowerCase()) {
          await this.redisClient.sadd(this.admin_list_key, telegramid)
          return this.bot.sendMessage(
            telegramid,
            '✅ Admin access granted. Use /help to view commands.'
          )
        }

        const isAdmin = await this.redisClient.sismember(
          this.admin_list_key,
          telegramid
        )
        const isSuperAdmin = telegramid === this.super_admin_id

        if (!isAdmin && !isSuperAdmin) {
          return this.bot.sendMessage(
            telegramid,
            '🚫 Unauthorized. Send access code to register.'
          )
        }

        if (command === '/help') {
          return this.bot.sendMessage(
            telegramid,
            `📘 *Admin Commands*:
/createcoupontype <type> <ttl> [flat=500] [percentage=10] [freeDelivery=true]
/generatecoupon <type>
/getcoupontype <code>
/couponusage <code>
/listcoupons <type>
/listcoupontypes
/deletecouponcode <code>
/deletecoupontype <type>

/setdeliveryfee <amount>
/setservicecharge <percent>
/getdeliveryfee
/getservicecharge

🔐 *Super Admin*:
/listadmins
/removeadmin <chat_id>
/exportusers
/viewcheckouts
/disablepaymentmethod eg /disablepaymentmethod banipay or /disablepaymentmethod paystack
/enablepaymentmethod eg /disablepaymentmethod banipay or /disablepaymentmethod paystack
/getpaymentmethods
`
          )
        }

        if (command === '/start') {
          //console.log(command, 'this is a start')
          //console.log(arg1)
          /*if (arg1.startsWith('checkout_')) {
            const id_substring = arg1.substring('checkout_'.length)
            const checkout_item = await Checkout.findOne({ _id: id_substring })

            const idAsString = checkout_item._id.toString();

            console.log(idAsString)
            console.log(`${PAYOOR_URL}/admin/checkout?checkout=${idAsString}`)
          }*/
        }

        if (command === '/disablepaymentmethod') {
          if (!arg1) {
            return this.bot.sendMessage(
              telegramid,
              `⚠️ Usage: /disablepaymentmethod banipay or /disablepaymentmethod paystack`
            )
          }

          const allowedPaymentMethods = ['banipay', 'paystack']
          const paymentMethod = arg1.toLowerCase() // Standardize to lowercase

          if (!allowedPaymentMethods.includes(paymentMethod)) {
            return this.bot.sendMessage(
              telegramid,
              `⚠️ Invalid payment method. Please use 'banipay' or 'paystack'.`
            )
          }

          try {
            await this.redisClient.hset(
              'payment_methods_status',
              paymentMethod,
              'disabled'
            )
            return this.bot.sendMessage(
              telegramid,
              `✅ ${arg1} payment method has been disabled.`
            )
          } catch (error) {
            console.error(`Error disabling ${paymentMethod}:`, error)
            return this.bot.sendMessage(
              telegramid,
              `❌ Failed to disable ${arg1} payment method. Please try again.`
            )
          }
        }

        if (command === '/enablepaymentmethod') {
          // NEW COMMAND
          if (!arg1) {
            return this.bot.sendMessage(
              telegramid,
              `⚠️ Usage: /enablepaymentmethod banipay or /enablepaymentmethod paystack`
            )
          }

          const allowedPaymentMethods = ['banipay', 'paystack']
          const paymentMethod = arg1.toLowerCase() // Standardize to lowercase

          if (!allowedPaymentMethods.includes(paymentMethod)) {
            return this.bot.sendMessage(
              telegramid,
              `⚠️ Invalid payment method. Please use 'banipay' or 'paystack'.`
            )
          }

          try {
            await this.redisClient.hset(
              'payment_methods_status',
              paymentMethod,
              'enabled' // Set status to 'enabled'
            )
            return this.bot.sendMessage(
              telegramid,
              `✅ ${arg1} payment method has been enabled.`
            )
          } catch (error) {
            console.error(`Error enabling ${paymentMethod}:`, error)
            return this.bot.sendMessage(
              telegramid,
              `❌ Failed to enable ${arg1} payment method. Please try again.`
            )
          }
        }

        if (command === '/getpaymentmethods') {
          try {
            const paymentMethodsStatus = await this.redisClient.hgetall(
              'payment_methods_status'
            )

            if (
              !paymentMethodsStatus ||
              Object.keys(paymentMethodsStatus).length === 0
            ) {
              return this.bot.sendMessage(
                telegramid,
                'ℹ️ No payment methods configured yet.'
              )
            }

            let responseMessage = '💳 *Payment Method Status:*\n\n'
            for (const method in paymentMethodsStatus) {
              const status = paymentMethodsStatus[method]
              responseMessage += `• ${method}: ${
                status.charAt(0).toUpperCase() + status.slice(1)
              }\n`
            }

            return this.bot.sendMessage(telegramid, responseMessage, {
              parse_mode: 'Markdown'
            })
          } catch (error) {
            console.error('Error fetching payment methods status:', error)
            return this.bot.sendMessage(
              telegramid,
              '❌ Failed to retrieve payment methods status. Please try again.'
            )
          }
        }

        if (command === '/setdeliveryfee') {
          if (!arg1 || isNaN(parseFloat(arg1))) {
            return this.bot.sendMessage(
              telegramid,
              '⚠️ Usage: /setdeliveryfee <amount> (e.g., /setdeliveryfee 1500)'
            )
          }
          const amount = parseFloat(arg1)
          await this.redisClient.hset(
            'admindirective',
            'deliveryfee',
            amount.toString()
          )
          return this.bot.sendMessage(
            telegramid,
            `✅ Delivery fee set to: ${amount}`
          )
        }

        if (command === '/setservicecharge') {
          if (!arg1 || isNaN(parseFloat(arg1))) {
            return this.bot.sendMessage(
              telegramid,
              '⚠️ Usage: /setservicecharge <percent> (e.g., /setservicecharge 10)'
            )
          }
          const percent = parseFloat(arg1)
          await this.redisClient.hset(
            'admindirective',
            'servicecharge',
            percent.toString()
          )
          return this.bot.sendMessage(
            telegramid,
            `✅ Service charge set to: ${percent}%`
          )
        }

        if (command === '/getdeliveryfee') {
          const deliveryFee = await this.redisClient.hget(
            'admindirective',
            'deliveryfee'
          )
          if (deliveryFee) {
            return this.bot.sendMessage(
              telegramid,
              `🚚 Current delivery fee: ${deliveryFee}`
            )
          } else {
            return this.bot.sendMessage(
              telegramid,
              'ℹ️ Delivery fee is not set. Use /setdeliveryfee to set it.'
            )
          }
        }

        if (command === '/getservicecharge') {
          const serviceCharge = await this.redisClient.hget(
            'admindirective',
            'servicecharge'
          )
          if (serviceCharge) {
            return this.bot.sendMessage(
              telegramid,
              `📊 Current service charge: ${serviceCharge}%`
            )
          } else {
            return this.bot.sendMessage(
              telegramid,
              'ℹ️ Service charge is not set. Use /setservicecharge to set it.'
            )
          }
        }

        if (command === '/listadmins') {
          if (!isSuperAdmin) {
            return this.bot.sendMessage(
              telegramid,
              '🚫 Only Super Admin can list admins.'
            )
          }

          try {
            const adminIds = await this.redisClient.smembers(
              this.admin_list_key
            )

            if (!adminIds.length) {
              return this.bot.sendMessage(telegramid, '📭 No admins found.')
            }

            const list = adminIds.map((id, i) => `${i + 1}. ${id}`).join('\n')
            return this.bot.sendMessage(
              telegramid,
              `🧑‍💼 *Registered Admins:*\n${list}`,
              { parse_mode: 'Markdown' }
            )
          } catch (err) {
            console.error('❌ Error listing admins:', err)
            return this.bot.sendMessage(
              telegramid,
              '❗ Failed to fetch admin list. Try again.'
            )
          }
        }

        if (command === '/viewcheckouts') {
          const checkouts = await Checkout.find().populate({
            path: 'user_id',
            select: 'email phoneNumber'
          })

          //console.log(checkouts)

          const checkoutDetailsList = checkouts
            .map(
              ({
                delivery_address,
                _id,
                user_id, // This will now be the populated user object
                delivery_date,
                delivery_instruction,
                phone_number,
                cart_items
              }) => {
                const email = user_id ? user_id.email : 'N/A'
                const userPhoneNumber = user_id ? user_id.phoneNumber : 'N/A'

                return `
                    User Email:
                    ${email}
                    User Phone Number:
                    ${userPhoneNumber}  
                    Delivery Address:
                    ${delivery_address}

                    <a href="https://shop.payoor.store/admin/checkout?checkout=${_id.toString()}">View Order Details on Website</a> 
                    ---------------------------------------
                `
              }
            )
            .join('')

          //Cart Items: ${JSON.stringify(cart_items, null, 2)}

          console.log(checkoutDetailsList)

          this.bot.sendMessage(telegramid, checkoutDetailsList, {
            parse_mode: 'HTML'
          })
        }

        if (command === '/couponusage') {
          if (!arg1) {
            return this.bot.sendMessage(
              telegramid,
              '⚠️ Usage: /couponusage <code>'
            )
          }

          const checkouts = await Checkout.find({
            promo_code: `${arg1}`.toUpperCase()
          }).select('_id')

          if (!checkouts.length) {
            return this.bot.sendMessage(
              telegramid,
              `📭 No checkouts found using code '${arg1}'.`
            )
          }

          const checkoutIds = checkouts.map(c => c._id)
          const usageCount = await Order.countDocuments({
            checkout_id: { $in: checkoutIds }
          })

          return this.bot.sendMessage(
            telegramid,
            `📊 Coupon Code: *${arg1}*\n🧾 Used in ${usageCount} order${
              usageCount === 1 ? '' : 's'
            }.`,
            { parse_mode: 'Markdown' }
          )
        }

        if (command === '/createcoupontype') {
          if (!arg1 || !arg2) {
            return this.bot.sendMessage(
              telegramid,
              '⚠️ Usage: /createcoupontype <type> <ttl> [flat=500] [percentage=10] [freeDelivery=true]'
            )
          }

          const ttl = parseTtlToSeconds(arg2)
          if (!ttl) {
            return this.bot.sendMessage(
              telegramid,
              '❌ Invalid TTL format. Use 30s, 15m, 1h, 2d, 1w'
            )
          }

          const discount = {}
          for (let i = 2; i < args.length; i++) {
            const [key, value] = args[i].split('=')
            if (key === 'flat') discount.flat = parseInt(value)
            else if (key === 'percentage') discount.percentage = parseInt(value)
            else if (key === 'freedelivery')
              discount.freeDelivery = value === 'true'
          }

          try {
            const result = await CouponClass.createCouponType(
              arg1,
              ttl,
              discount
            )
            return this.bot.sendMessage(
              telegramid,
              `🎟️ Created type '${arg1}' with TTL ${ttl}s and config: ${JSON.stringify(
                result.config.discount
              )}`
            )
          } catch (err) {
            return this.bot.sendMessage(
              telegramid,
              `❌ Failed to create coupon type: ${err.message}`
            )
          }
        }

        if (command === '/generatecoupon') {
          if (!arg1) {
            return this.bot.sendMessage(
              telegramid,
              '⚠️ Usage: /generatecoupon <type>'
            )
          }

          const { code, expiresIn } = await CouponClass.createCoupon(arg1)
          return this.bot.sendMessage(
            telegramid,
            `✅ Coupon Code: ${code}\n⏳ Expires in ${expiresIn} seconds`
          )
        }

        if (command === '/getcoupontype') {
          if (!arg1) {
            return this.bot.sendMessage(
              telegramid,
              '⚠️ Usage: /getcoupontype <code>'
            )
          }

          const coupon = await CouponClass.getCoupon(arg1)
          if (!coupon) {
            return this.bot.sendMessage(
              telegramid,
              '❌ Coupon not found or expired.'
            )
          }

          return this.bot.sendMessage(
            telegramid,
            `🎫 *Coupon Info*:\nType: ${coupon.type}\nCreated At: ${new Date(
              coupon.createdAt
            ).toLocaleString()}\nRedeemed: ${
              coupon.redeemed ? '✅ Yes' : '❌ No'
            }`
          )
        }

        if (command === '/listcoupons') {
          if (!arg1) {
            return this.bot.sendMessage(
              telegramid,
              '⚠️ Usage: /listcoupons <type>'
            )
          }

          const codes = await CouponClass.listCoupons(arg1)
          if (!codes.length) {
            return this.bot.sendMessage(
              telegramid,
              '📭 No coupons found under this type.'
            )
          }

          const list = codes.map((code, i) => `${i + 1}. ${code}`).join('\n')
          return this.bot.sendMessage(
            telegramid,
            `📋 Coupons under '${arg1}':\n${list}`
          )
        }

        if (command === '/listcoupontypes') {
          const types = await this.redisClient.smembers('coupon:types')
          if (!types.length) {
            return this.bot.sendMessage(telegramid, '📭 No coupon types found.')
          }

          const list = types.map((t, i) => `${i + 1}. ${t}`).join('\n')
          return this.bot.sendMessage(
            telegramid,
            `🎟️ Available coupon types:\n${list}`
          )
        }

        if (command === '/deletecouponcode') {
          if (!arg1) {
            return this.bot.sendMessage(
              telegramid,
              '⚠️ Usage: /deletecouponcode <code>'
            )
          }

          const key = `coupon:code:${arg1}`
          const removed = await this.redisClient.del(key)
          return this.bot.sendMessage(
            telegramid,
            removed
              ? `🗑️ Coupon code '${arg1}' deleted.`
              : `❌ Code '${arg1}' not found.`
          )
        }

        if (command === '/deletecoupontype') {
          if (!arg1) {
            return this.bot.sendMessage(
              telegramid,
              '⚠️ Usage: /deletecoupontype <type>'
            )
          }

          const key = `coupon:type:${arg1}`
          await this.redisClient.del(key)
          await this.redisClient.srem('coupon:types', arg1)
          return this.bot.sendMessage(
            telegramid,
            `🗑️ Coupon type '${arg1}' deleted.`
          )
        }

        if (command === '/exportusers') {
          /*if (!isSuperAdmin) {
            return this.bot.sendMessage(
              telegramid,
              '🚫 Only Super Admin can export users.'
            )
          }*/

          try {
            const users = await User.find().lean()

            //console.log(users, 'users')

            if (!users.length) {
              return this.bot.sendMessage(telegramid, '📭 No users found.')
            }

            const workbook = new ExcelJS.Workbook()
            const worksheet = workbook.addWorksheet('Users')

            const headers = Object.keys(users[0]).filter(
              key => !['password', '__v'].includes(key)
            )
            worksheet.addRow(headers)

            users.forEach(user => {
              const row = headers.map(h => {
                const value = user[h]
                return typeof value === 'object' && value !== null
                  ? JSON.stringify(value)
                  : value
              })
              worksheet.addRow(row)
            })

            const filePath = path.join('/tmp', `users_${Date.now()}.xlsx`)
            await workbook.xlsx.writeFile(filePath)

            await this.bot.sendDocument(
              telegramid,
              filePath,
              {},
              {
                filename: 'users_export.xlsx',
                contentType:
                  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
              }
            )

            fs.unlink(filePath, () => {})
          } catch (err) {
            console.error('❌ Error exporting users:', err)
            return this.bot.sendMessage(
              telegramid,
              '❗ Failed to export users. Try again later.'
            )
          }
        }
      } catch (err) {
        console.error('Telegram bot error:', err)
        await this.bot.sendMessage(
          telegramid,
          '❗ An error occurred. Please try again.'
        )
      }
    })
  }

  async callBot (message) {
    if (!message?.length) return
    try {
      const adminIds = await this.redisClient.smembers(this.admin_list_key)
      for (const id of adminIds) {
        try {
          await this.bot.sendMessage(id, message)
        } catch (err) {
          console.error(`❌ Failed to send to ${id}:`, err)
        }
      }
    } catch (err) {
      console.error('❌ Error broadcasting to admins:', err)
    }
  }
}

const telegramBot = new TelegramBotClass(redisClient)
telegramBot.startBot()

export default telegramBot