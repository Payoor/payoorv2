"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _kafkajs = require("kafkajs");
var kafka = new _kafkajs.Kafka({
  clientId: 'nodeserver',
  brokers: '192.168.0.196:9092'.split(','),
  logLevel: _kafkajs.logLevel.NOTHING,
  retry: {
    retries: 5
  }
});
var _default = exports["default"] = kafka; //rocess.env.KAFKA_BROKERS
//process.env.KAFKA_CLIENT_ID