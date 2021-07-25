const { connect } = require('../services')
const { Location } = require('../models')
const locations = require('./data')

connect()

const options = { upsert: true, new: true, setDefaultsOnInsert: true }

locations.forEach((location) => {
  const query = { slug: location.slug }
  Location.findOneAndUpdate(query, location, options, (error, result) => {
    if (error) return console.error(error)
    console.log(`✅ Location: "${location.name}" created!!`)
    return result
  })
})
