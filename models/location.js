const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LocationSchema = new Schema({
  slug: String,
  items: [
    {
      slug: String,
      name: String,
      image: String,
      price: String,
      quantity: {
        total: Number,
        remaining: Number
      }
    }
  ]
})

module.exports = mongoose.model('Location', LocationSchema)
