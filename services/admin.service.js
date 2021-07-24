const { mongoose } = require('./database')
const { Location, Item } = require('../models')

const db = mongoose.connection

const getAllLocationAndItem = async () => {
  return Location.find({}, (error, result) => {
    if (error) return console.error(error)
    return result
  })
}

const getItemsByLocation = async (locationSlug) => {
  return Location.find({ slug: locationSlug }, (error, result) => {
    if (error) return console.error(error)
    return result
  })
}

const createLocation = async (data) => {
  const { body } = data.request
  const query = { slug: body.slug }
  const options = { upsert: true, new: true, setDefaultsOnInsert: true }

  return Location.findOneAndUpdate(query, body, options, (error, result) => {
    if (error) return console.error(error)
    console.log(`✅ Location: "${body.name}" created!!`)
    return result
  })
}

const addItemInLocation = async (data) => {
  const { body } = data.request

  return Location.findOneAndUpdate(
    { slug: body.location, 'items.slug': { $ne: body.item.slug } },
    { $addToSet: { items: body.item } },
    (error, result) => {
      if (error) return console.error(error)
      return result
    }
  )
}

module.exports = {
  getAllLocationAndItem,
  getItemsByLocation,
  createLocation,
  addItemInLocation
}
