const mongoose = require('mongoose')
const Item = require('./item')
const Schema = mongoose.Schema

const LocationSchema = new Schema({
  slug: String,
  name: String,
  items: { type: [], ref: 'Item' }
})

module.exports = mongoose.model('Location', LocationSchema)
