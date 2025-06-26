const path = require('path');
const axios = require('axios');

const telegbotUrl = 'http://telegbot:3001/errorlog';

const errorLogPath = path.join(__dirname, 'error.log');

async function telegramBotErrorLogger (errorMessage) {
  try {
    const response = await axios.post(telegbotUrl, errorMessage, {
      headers: {
        'Content-Type': 'text/plain',
        'X-Error-Timestamp': timestamp
      }
    })

    if (response.status >= 200 && response.status < 300) {
      console.log('Error message sent to telegbot successfully!')
    } else {
      console.error(
        `Failed to send error message to telegbot. Status: ${response.status}, Body: ${response.data}`
      )

      fs.appendFile(errorLogPath, errorMessage, fileErr => {
        if (fileErr) {
          console.error('Failed to write error to fallback log file:', fileErr)
        } else {
          console.log(
            `Error successfully logged to fallback file: ${errorLogPath}`
          )
        }
      })
    }
  } catch (error) {
    //we'll only save to a file if this fails here
    //res.status(500).json({ message: 'Internal server error' })
    console.log(error)
  }
}

export default telegramBotErrorLogger
