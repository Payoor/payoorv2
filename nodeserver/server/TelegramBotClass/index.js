const TelegramBot = require('node-telegram-bot-api')

export class TelegramBotClass {
  constructor (redisClient) {
    this.redisClient = redisClient
    this.bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true })
  }

  startBot () {
    this.bot.on('message', async msg => {
      const telegramid = msg.chat.id
      const messageText = msg.text.toLowerCase().trim()

      const parts = messageText.split(' ')
      const directive = parts[1]?.toLowerCase().trim()

      try {
        if (messageText.startsWith('/setdeliveryfee')) {
          await this.redisClient.hSet(
            'admindirective',
            'deliveryfee',
            directive
          )

          this.callBot(`delivery fee set to ${directive}`)
        }

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
            this.callBot(`Service charge set to ${directiveNumber}%`)
          } else {
            this.callBot(
              'Invalid directive. Please enter a number between 1 and 100.'
            )
          }
        }

        if (messageText.startsWith('/getdeliveryfee')) {
          const fee = await this.redisClient.hGet(
            'admindirective',
            'deliveryfee'
          )

          this.callBot(`current deliver fee ${fee}`)
        }

        if (messageText.startsWith('/getservicecharge')) {
          const value = await this.redisClient.hGet(
            'admindirective',
            'servicecharge'
          )

          if (value !== null) {
            this.callBot(`Current service charge is ${value}`)
          } else {
            this.callBot('No service charge has been set.')
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
    const chatId = '7941032619'

    try {
      if (message.length) {
        await this.bot.sendMessage(chatId, message)
      }
    } catch (error) {
      console.error('Failed to send message via bot:', error)
    }
  }
}

export default TelegramBotClass
