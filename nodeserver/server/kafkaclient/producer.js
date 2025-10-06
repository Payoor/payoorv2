import kafka from './kafkaClient.js'

const producer = kafka.producer()

export const connectProducer = async () => {
  await producer.connect()
  console.log('Kafka Producer connected')
}

export const sendMessage = async (topic, message) => {
  try {
    await producer.send({
      topic,
      messages: [{ value: JSON.stringify(message) }],
      acks: -1 // wait for all replicas
    })
  } catch (error) {
    console.error('Error sending message:', error)
  }
}

export default producer
