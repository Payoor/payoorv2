"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runKafka = void 0;
var _kafkajs = require("kafkajs");
const kafka = new _kafkajs.Kafka({
  clientId: "kafka-service",
  brokers: ["localhost:9094", "localhost:9095", "localhost:9096"]
});
const admin = kafka.admin();
const runKafka = async () => {
  await admin.connect();
  /*await admin.createTopics({
    topics: [
      { topic: "payment-successful" },
      { topic: "order-successful" },
      { topic: "email-successful" },
    ],
  });*/
};
exports.runKafka = runKafka;