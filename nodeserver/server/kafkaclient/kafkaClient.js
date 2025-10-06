import { Kafka, logLevel } from 'kafkajs'

const kafka = new Kafka({
  clientId: 'nodeserver',
  brokers: '192.168.0.196:9092'.split(','),
  logLevel: logLevel.NOTHING,
  retry: { retries: 5 }
})

export default kafka

//rocess.env.KAFKA_BROKERS
//process.env.KAFKA_CLIENT_ID
