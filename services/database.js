const mongoose = require('mongoose')
const { DB_HOST, DB_PORT, DB_NAME } = require('../config')

const connect = () => {
  mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  mongoose.connection.once('open', () => {
    console.log(`👍 Connected to database ${DB_HOST}:${DB_PORT}/${DB_NAME}`)
  })

  mongoose.connection.on('error', console.error)
}

module.exports = { connect, mongoose }
