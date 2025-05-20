const TelegramBot = require('node-telegram-bot-api')
import { redisClient } from '../redisconf'

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
      const telegramid = msg.chat.id.toString()
      const messageText = msg.text.toLowerCase().trim()
      const parts = messageText.split(' ')
      const directive = parts[1]?.toLowerCase().trim()

      try {
        // 🔐 Register as admin using code
        if (messageText === this.admin_code.toLowerCase().trim()) {
          await this.redisClient.sAdd(this.admin_list_key, telegramid)
          await this.bot.sendMessage(
            telegramid,
            `✅ Admin access granted.
        
        📋 *Available Commands*:
        /setdeliveryfee <amount> – Set delivery fee (e.g. 1500)
        /setservicecharge <percent> – Set service charge (1-100)
        /getdeliveryfee – View current delivery fee
        /getservicecharge – View current service charge
        
        🔐 *Super Admin Only*:
        /listadmins – List all registered admins
        /removeadmin <chat_id> – Remove an admin by ID
        
        *Note:* Only valid numbers are accepted for amounts and percentages.
        
        Welcome aboard! 🚀`
          )
          return
        }

        // 🧾 Super Admin: List all admins
        if (messageText.startsWith('/listadmins')) {
          const isSuperAdmin = telegramid === this.super_admin_id
          if (!isSuperAdmin) {
            await this.bot.sendMessage(
              telegramid,
              '🚫 You are not authorized to view the admin list.'
            )
            return
          }

          const adminIds = await this.redisClient.sMembers(this.admin_list_key)
          if (adminIds.length === 0) {
            await this.bot.sendMessage(
              telegramid,
              '👤 No admins have been registered yet.'
            )
          } else {
            const adminList = adminIds
              .map((id, idx) => `${idx + 1}. ${id}`)
              .join('\n')
            await this.bot.sendMessage(
              telegramid,
              `👥 Registered Admins:\n${adminList}`
            )
          }
          return
        }

        // 🗑 Super Admin: Remove an admin
        if (messageText.startsWith('/removeadmin')) {
          const isSuperAdmin = telegramid === this.super_admin_id
          if (!isSuperAdmin) {
            await this.bot.sendMessage(
              telegramid,
              '🚫 Only the super admin can remove admins.'
            )
            return
          }

          const targetId = parts[1]?.trim()
          if (!targetId) {
            await this.bot.sendMessage(
              telegramid,
              '⚠️ Usage: /removeadmin <chat_id>'
            )
            return
          }

          const removed = await this.redisClient.sRem(
            this.admin_list_key,
            targetId
          )
          if (removed) {
            await this.bot.sendMessage(
              telegramid,
              `🗑️ Removed admin with ID: ${targetId}`
            )
          } else {
            await this.bot.sendMessage(
              telegramid,
              `❌ Admin ID ${targetId} was not found.`
            )
          }

          return
        }

        // 📦 Set delivery fee
        if (messageText.startsWith('/setdeliveryfee')) {
          await this.redisClient.hSet(
            'admindirective',
            'deliveryfee',
            directive
          )
          this.callBot(`🚚 Delivery fee set to ${directive}`)
        }

        // 💼 Set service charge
        if (messageText.startsWith('/setservicecharge')) {
          const directiveNumber = Number(directive)
          if (
            !isNaN(directiveNumber) &&
            directiveNumber >= 1 &&
            directiveNumber <= 100
          ) {
            await this.redisClient.hSet(
              'admindirective',
              'servicecharge',
              directiveNumber
            )
            this.callBot(`💼 Service charge set to ${directiveNumber}%`)
          } else {
            this.callBot(
              '❗ Invalid directive. Enter a number between 1 and 100.'
            )
          }
        }

        // 📦 Get delivery fee
        if (messageText.startsWith('/getdeliveryfee')) {
          const fee = await this.redisClient.hGet(
            'admindirective',
            'deliveryfee'
          )
          this.callBot(`🚚 Current delivery fee: ${fee}`)
        }

        // 💼 Get service charge
        if (messageText.startsWith('/getservicecharge')) {
          const value = await this.redisClient.hGet(
            'admindirective',
            'servicecharge'
          )
          if (value !== null) {
            this.callBot(`💼 Current service charge is ${value}%`)
          } else {
            this.callBot('❗ No service charge has been set.')
          }
        }
      } catch (error) {
        console.error('Telegram bot error:', error)
        await this.bot.sendMessage(
          telegramid,
          '❗ An error occurred. Please try again later.'
        )
      }
    })
  }

  async callBot (message) {
    if (!message?.length) return

    try {
      const adminIds = await this.redisClient.sMembers(this.admin_list_key)
      if (!adminIds.length) return

      for (const chatId of adminIds) {
        try {
          await this.bot.sendMessage(chatId, message)
        } catch (err) {
          console.error(`❌ Failed to send message to ${chatId}:`, err)
        }
      }
    } catch (err) {
      console.error('❌ Failed to retrieve admin chat IDs:', err)
    }
  }
}

const telegramBot = new TelegramBotClass(redisClient)
telegramBot.startBot()

export default telegramBot
