const mongoose = require('mongoose')

const ObjectId = mongoose.Types.ObjectId

import payoorDBConnection from '../payoordb'

const UserCartSchema = new mongoose.Schema({
  items: {
    type: Map,
    of: Number
  },
  totalItems: [],
  userId: mongoose.Schema.Types.ObjectId
})

UserCartSchema.methods.calculateTotal = function () {
  let total = 0

  this.totalItems.map(async item_id => {
    const productId = new ObjectId(item_id)

    const variantsCollection =
      payoorDBConnection.db.collection('productvariants')

    const variant = await variantsCollection.findOne({ _id: productId })
    const itemTotal = this.items[item_id] * variant.price;

    console.log(variant.price)
  })

  return total
}

module.exports = mongoose.model('UserCart', UserCartSchema)
