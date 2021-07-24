const mongoose = require('mongoose')
const { DB_HOST, DB_PORT, DB_NAME } = require('../config')

const init = () => {
  mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`)
  mongoose.connection.once('open', () => {
    console.log('👍 Connected to database')
  })

  mongoose.connection.on('error', console.error)
}

module.exports = init
