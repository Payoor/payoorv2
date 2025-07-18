import crypto from 'crypto'

import redisManager from '../RedisManager';

class CouponClass {
  static async createCouponType (type, ttlInSeconds, discount = {}) {
    if (!type || typeof type !== 'string') {
      throw new Error('Coupon type must be a non-empty string')
    }

    if (
      !ttlInSeconds ||
      typeof ttlInSeconds !== 'number' ||
      ttlInSeconds <= 0
    ) {
      throw new Error('TTL must be a positive number in seconds')
    }

    if (
      typeof discount !== 'object' ||
      (!discount.percentage && !discount.flat && !discount.freeDelivery)
    ) {
      throw new Error('At least one discount type must be specified')
    }

    if (
      discount.percentage &&
      (typeof discount.percentage !== 'number' ||
        discount.percentage <= 0 ||
        discount.percentage > 100)
    ) {
      throw new Error('Percentage discount must be a number between 1 and 100')
    }

    if (
      discount.flat &&
      (typeof discount.flat !== 'number' || discount.flat <= 0)
    ) {
      throw new Error('Flat discount must be a positive number')
    }

    if (discount.freeDelivery && typeof discount.freeDelivery !== 'boolean') {
      throw new Error('freeDelivery must be a boolean value')
    }

    const key = `coupon:type:${type}`
    const exists = await redisManager.exists(key)

    if (exists) {
      throw new Error('Coupon type already exists')
    }

    const config = {
      ttl: ttlInSeconds,
      createdAt: Date.now(),
      discount: {
        percentage: discount.percentage || null,
        flat: discount.flat || null,
        freeDelivery: discount.freeDelivery || false
      }
    }

    await redisManager.setJSON(key, config)

    await redisManager.sadd('coupon:types', type)

    return {
      success: true,
      message: `Coupon type '${type}' created.`,
      config
    }
  }

  static async createCoupon (type) {
    if (!type || typeof type !== 'string') {
      throw new Error('Coupon type is required and must be a string')
    }

    const typeKey = `coupon:type:${type}`
    const typeData = await redisManager.getJSON(typeKey)

    if (!typeData) {
      throw new Error('Coupon type does not exist')
    }

    const { ttl } = typeData

    const code = CouponClass._generateCode()
    const couponKey = `coupon:code:${code}`
    const metadata = {
      type,
      createdAt: Date.now(),
      redeemed: false
    }

    await redisManager.setJSON(couponKey, metadata, ttl)
    await redisManager.sadd(`coupon:type:${type}:codes`, code)

    return { code, type, expiresIn: ttl }
  }

  static async getCoupon (code) {
    const couponKey = `coupon:code:${code}`
    const coupon = await redisManager.getJSON(couponKey)

    return coupon
  }

  static async redeemCoupon (code) {
    const couponKey = `coupon:code:${code}`
    const coupon = await redisManager.getJSON(couponKey)

    if (!coupon) throw new Error('Invalid or expired coupon code')

    if (coupon.redeemed) throw new Error('Coupon already redeemed')

    coupon.redeemed = true
    coupon.redeemedAt = Date.now()

    await redisManager.setJSON(couponKey, coupon, null, true)

    return { success: true, message: 'Coupon redeemed', coupon }
  }

  static async listCoupons (type) {
    const codes = await redisManager.smembers(`coupon:type:${type}:codes`)
    return codes
  }

  static async getCouponTypeConfig (type) {
    const typeKey = `coupon:type:${type}`
    const config = await redisManager.getJSON(typeKey)
    return config
  }

  static _generateCode () {
    return crypto.randomBytes(5).toString('hex').toUpperCase()
  }
}

export default CouponClass
