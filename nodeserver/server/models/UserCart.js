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
});

UserCartSchema.methods.calculateTotal = async function () {
  let total = 0
  const variantPromises = this.totalItems.map(async item_id => {
    const productId = new ObjectId(item_id)
    const variantsCollection =
      payoorDBConnection.db.collection('productvariants')
    const variant = await variantsCollection.findOne({ _id: productId })

    if (!variant) {
      console.warn(`Variant not found for ID: ${item_id}`)
      return 0
    }

    //const value = myMap.get(idToFind)

    const itemTotal = this.items.get(item_id) * variant.price
    console.log(
      typeof variant.price,
      variant.price,
      this.items.get(item_id),
      typeof this.items.get(item_id),
      item_id,
      typeof item_id 
    )
    return itemTotal
  })

  const itemTotals = await Promise.all(variantPromises)
  total = itemTotals.reduce((sum, current) => sum + current, 0)
  return total
}

module.exports = mongoose.model('UserCart', UserCartSchema)
