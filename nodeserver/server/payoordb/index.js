import mongoose from 'mongoose'

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const connection_string = process.env.PAYOOR_DB;

const payoorDBConnection = mongoose.createConnection(
  `${connection_string}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true 
  }
);

payoorDBConnection.on('connected', () => {
  console.log('Successfully connected to payoordb')
})

payoorDBConnection.on('error', err => {
  console.error('Error connecting to payoordb:', err)
})

payoorDBConnection.on('disconnected', () => {
  console.log('Disconnected from payoordb')
})

export default payoorDBConnection
