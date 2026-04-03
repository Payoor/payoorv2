"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendMessage = exports.default = exports.connectProducer = void 0;
var _kafkaClient = _interopRequireDefault(require("./kafkaClient.js"));
const producer = _kafkaClient.default.producer();
const connectProducer = async () => {
  await producer.connect();
  console.log('Kafka Producer connected');
};
exports.connectProducer = connectProducer;
const sendMessage = async (topic, message) => {
  try {
    await producer.send({
      topic,
      messages: [{
        value: JSON.stringify(message)
      }],
      acks: -1 // wait for all replicas
    });
  } catch (error) {
    console.error('Error sending message:', error);
  }
};
exports.sendMessage = sendMessage;
var _default = exports.default = producer;