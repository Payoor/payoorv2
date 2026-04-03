"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _telegramBotErrorLogger = _interopRequireDefault(require("../telegramBotErrorLogger"));
var _Product = _interopRequireDefault(require("../models/Product"));
var _ProductVariant = _interopRequireDefault(require("../models/ProductVariant"));
const axios = require('axios');
async function updateProductsVariantCounts(batchSize = 5) {
  const esUrl = process.env.ELASTICSEARCHURL;
  const productIndex = 'products';
  if (!esUrl) {
    const msg = '[updateProductsVariantCounts] Missing ELASTICSEARCHURL env';
    console.error(msg);
    (0, _telegramBotErrorLogger.default)(msg);
    return {
      updated: 0
    };
  }
  try {
    let page = 0;
    let totalUpdated = 0;

    // keep paging until no more products
    while (true) {
      // Fetch minimal fields to keep memory low
      const products = await _Product.default.find({}, {
        _id: 1
      }).skip(page * batchSize).limit(batchSize).lean();
      if (!products.length) break;
      const productIds = products.map(p => p._id);
      const countsAgg = await _ProductVariant.default.aggregate([{
        $match: {
          productId: {
            $in: productIds
          }
        }
      }, {
        $group: {
          _id: '$productId',
          count: {
            $sum: 1
          }
        }
      }]);
      const countsMap = new Map(countsAgg.map(c => [String(c._id), c.count]));
      for (const id of productIds) {
        const key = String(id);
        if (!countsMap.has(key)) countsMap.set(key, 0);
      }
      const countsParam = Object.fromEntries(countsMap.entries());
      const mongooseIds = productIds.map(id => String(id));
      console.log(mongooseIds, countsParam, 'countsParam');

      //totalUpdated += resp.body?.updated ?? resp.updated ?? 0

      page += 1;
    }
    return {
      updated: totalUpdated
    };
  } catch (error) {
    const errorMessage = 'error in updateProductsVariantCounts utils function';
    console.error(error);
    (0, _telegramBotErrorLogger.default)(errorMessage);
    throw error;
  }
}
var _default = exports.default = updateProductsVariantCounts;