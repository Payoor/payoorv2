"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ioredis = _interopRequireDefault(require("ioredis"));
class RedisManager {
  constructor() {
    if (RedisManager.instance) {
      return RedisManager.instance;
    }
    this.redisClient = null;
    RedisManager.instance = this;
  }
  async connectRedis() {
    if (this.redisClient && (this.redisClient.status === 'connecting' || this.redisClient.status === 'ready')) {
      console.warn('Redis client is already connecting or connected. Skipping new connection.');
      return;
    }
    try {
      this.redisClient = new _ioredis.default({
        port: 6379,
        host: 'redisdb',
        db: 0
      });
      this.redisClient.on('connect', () => {
        console.log('✅ Redis client connected (TCP)');
      });
      this.redisClient.on('ready', () => {
        console.log('✅ Redis client is ready (fully operational)');
      });
      this.redisClient.on('reconnecting', () => {
        console.log('🔄 Redis client reconnecting...');
      });
      this.redisClient.on('error', err => {
        console.error('❌ Redis Client Error:', err);
      });
      await new Promise((resolve, reject) => {
        const handleReady = () => {
          this.redisClient.off('error', handleError);
          resolve();
        };
        const handleError = err => {
          this.redisClient.off('ready', handleReady);
          reject(err);
        };
        this.redisClient.on('ready', handleReady);
        this.redisClient.on('error', handleError);
      });
      console.log('Redis connection fully established and ready.');
    } catch (error) {
      console.error('❌ Failed to connect to Redis:', error);
      if (this.redisClient) {
        this.redisClient.disconnect();
        this.redisClient = null;
      }
      throw error;
    }
  }
  async exists(key) {
    if (!this.redisClient || this.redisClient.status !== 'ready') {
      throw new Error('Redis client not connected or ready. Cannot check key existence.');
    }
    try {
      return await this.redisClient.exists(key);
    } catch (error) {
      console.error(`❌ Error checking existence for key '${key}':`, error);
      throw error;
    }
  }
  async setJSON(key, item, expirationSeconds = null, keepTTL = false) {
    if (!this.redisClient || this.redisClient.status !== 'ready') {
      throw new Error('Redis client not connected or ready. Cannot set item.');
    }
    try {
      const stringifiedItem = typeof item === 'object' && item !== null ? JSON.stringify(item) : String(item);
      if (keepTTL) {
        await this.redisClient.set(key, stringifiedItem, 'KEEPTTL');
        console.log(`✅ Set item: '${key}' with KEEPTTL`);
      } else if (expirationSeconds !== undefined && expirationSeconds !== null) {
        await this.redisClient.set(key, stringifiedItem, 'EX', expirationSeconds);
        console.log(`✅ Set item: '${key}' with expiration ${expirationSeconds}s`);
      } else {
        await this.redisClient.set(key, stringifiedItem);
        console.log(`✅ Set item: '${key}' (no expiration)`);
      }
      return true;
    } catch (error) {
      console.error(`❌ Error setting item for key '${key}':`, error);
      throw error;
    }
  }
  async sadd(key, ...members) {
    if (!this.redisClient || this.redisClient.status !== 'ready') {
      throw new Error('Redis client not connected or ready. Cannot add to set.');
    }
    if (members.length === 0) {
      console.warn(`No members provided for SADD to key '${key}'.`);
      return 0;
    }
    try {
      const addedCount = await this.redisClient.sadd(key, ...members);
      console.log(`✅ Added ${addedCount} member(s) to set '${key}'.`);
      return addedCount;
    } catch (error) {
      console.error(`❌ Error adding to set '${key}':`, error);
      throw error;
    }
  }
  async smembers(key) {
    if (!this.redisClient || this.redisClient.status !== 'ready') {
      throw new Error('Redis client not connected or ready. Cannot get set members.');
    }
    try {
      const members = await this.redisClient.smembers(key);
      console.log(`🔎 Retrieved ${members.length} member(s) from set '${key}'.`);
      return members;
    } catch (error) {
      console.error(`❌ Error getting members from set '${key}':`, error);
      throw error;
    }
  }
  async sismember(key, member) {
    if (!this.redisClient || this.redisClient.status !== 'ready') {
      throw new Error('Redis client not connected or ready. Cannot check set member existence.');
    }
    try {
      const isMember = await this.redisClient.sismember(key, member);
      console.log(`🔎 Checked if '${member}' is a member of set '${key}': ${isMember ? 'Yes' : 'No'}.`);
      return isMember === 1;
    } catch (error) {
      console.error(`❌ Error checking sismember for key '${key}' and member '${member}':`, error);
      throw error;
    }
  }
  async hset(key, field, value) {
    if (!this.redisClient || this.redisClient.status !== 'ready') {
      throw new Error('Redis client not connected or ready. Cannot set hash field.');
    }
    try {
      const result = await this.redisClient.hset(key, field, value);
      console.log(`✅ Set hash field '${field}' in key '${key}'. Result: ${result}`);
      return result;
    } catch (error) {
      console.error(`❌ Error setting hash field '${field}' in key '${key}':`, error);
      throw error;
    }
  }
  async hgetall(key) {
    if (!this.redisClient || this.redisClient.status !== 'ready') {
      throw new Error('Redis client not connected or ready. Cannot get all hash fields.');
    }
    try {
      const result = await this.redisClient.hgetall(key);
      console.log(`🔎 Retrieved all fields from hash '${key}'. Found ${Object.keys(result).length} fields.`);
      return result;
    } catch (error) {
      console.error(`❌ Error getting all hash fields from key '${key}':`, error);
      throw error;
    }
  }
  async hget(key, field) {
    if (!this.redisClient || this.redisClient.status !== 'ready') {
      throw new Error('Redis client not connected or ready. Cannot get hash field.');
    }
    try {
      const result = await this.redisClient.hget(key, field);
      if (result === null) {
        console.log(`🔎 Hash field '${field}' not found in key '${key}'.`);
      } else {
        console.log(`🔎 Retrieved hash field '${field}' from key '${key}'.`);
      }
      return result;
    } catch (error) {
      console.error(`❌ Error getting hash field '${field}' from key '${key}':`, error);
      throw error;
    }
  }
  async getJSON(key) {
    if (!this.redisClient || this.redisClient.status !== 'ready') {
      throw new Error('Redis client not connected or ready. Cannot get item.');
    }
    try {
      const result = await this.redisClient.get(key);
      if (result === null) {
        console.log(`🔎 Item '${key}' not found in Redis.`);
        return null;
      }
      try {
        const parsed = JSON.parse(result);
        console.log(`🔎 Got item: '${key}' (parsed JSON)`);
        return parsed;
      } catch (e) {
        console.log(`🔎 Got item: '${key}' (string, JSON parse failed)`);
        return result;
      }
    } catch (error) {
      console.error(`❌ Error getting item for key '${key}':`, error);
      throw error;
    }
  }
  async setItem({
    key,
    item,
    expiration
  }) {
    if (!this.redisClient || this.redisClient.status !== 'ready') {
      const errorMessage = 'Redis client not connected or ready. Cannot set item.';
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    try {
      const stringifiedItem = typeof item === 'object' && item !== null ? JSON.stringify(item) : String(item);
      if (expiration !== undefined && expiration !== null) {
        await this.redisClient.set(key, stringifiedItem, 'EX', expiration);
        console.log(`✅ Set item: '${key}' with expiration ${expiration}s`);
      } else {
        await this.redisClient.set(key, stringifiedItem);
        console.log(`✅ Set item: '${key}' (no expiration)`);
      }
      return true;
    } catch (error) {
      const errorMessage = `❌ Error setting item for key '${key}': ${error.message}`;
      console.error(errorMessage, error);
      throw error;
    }
  }
  async getItem(key) {
    if (!this.redisClient || this.redisClient.status !== 'ready') {
      throw new Error('Redis client not connected or ready. Cannot get item.');
    }
    try {
      const result = await this.redisClient.get(key);
      if (result === null) {
        console.log(`🔎 Item '${key}' not found in Redis.`);
        return null;
      }
      try {
        const parsed = JSON.parse(result);
        console.log(`🔎 Got item: '${key}' (parsed JSON)`);
        return parsed;
      } catch (e) {
        console.log(`🔎 Got item: '${key}' (string)`);
        return result;
      }
    } catch (error) {
      console.error(`❌ Error getting item for key '${key}':`, error);
      throw error;
    }
  }
  async deleteItem(...keys) {
    if (!this.redisClient || this.redisClient.status !== 'ready') {
      throw new Error('Redis client not connected or ready. Cannot delete item(s).');
    }
    if (keys.length === 0) {
      console.warn('No keys provided for deletion.');
      return 0;
    }
    try {
      const deletedCount = await this.redisClient.del(...keys);
      console.log(`🗑️ Deleted ${deletedCount} item(s) from Redis: ${keys.join(', ')}`);
      return deletedCount;
    } catch (error) {
      console.error(`❌ Error deleting item(s) for keys '${keys.join(', ')}':`, error);
      throw error;
    }
  }
  async srem(key, ...members) {
    if (!this.redisClient || this.redisClient.status !== 'ready') {
      throw new Error('Redis client not connected or ready. Cannot remove from set.');
    }
    if (members.length === 0) {
      console.warn(`No members provided for SREM from key '${key}'.`);
      return 0;
    }
    try {
      const removedCount = await this.redisClient.srem(key, ...members);
      console.log(`🗑️ Removed ${removedCount} member(s) from set '${key}'.`);
      return removedCount;
    } catch (error) {
      console.error(`❌ Error removing from set '${key}':`, error);
      throw error;
    }
  }
  async exists(key) {
    if (!this.redisClient || this.redisClient.status !== 'ready') {
      throw new Error('Redis client not connected or ready. Cannot check key existence.');
    }
    try {
      return await this.redisClient.exists(key);
    } catch (error) {
      console.error(`❌ Error checking existence for key '${key}':`, error);
      throw error;
    }
  }
  async disconnectRedis() {
    if (this.redisClient) {
      try {
        await this.redisClient.quit();
        console.log('👋 Redis client disconnected.');
        this.redisClient = null;
      } catch (error) {
        console.error('❌ Error disconnecting Redis:', error);
      }
    } else {
      console.log('Redis client was not connected.');
    }
  }
}
const redisManager = new RedisManager();
var _default = exports.default = redisManager;