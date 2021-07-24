const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ItemSchema = new Schema({
  slug: String,
  name: String,
  image: String,
  price: String,
  quantity: {
    total: Number,
    remaining: Number
  }
})

module.exports = mongoose.model('Item', ItemSchema)
