const mongoose = require('mongoose')
const { DB_HOST, DB_PORT, DB_NAME, MONGO_HOST } = require('../config')

const connect = () => {
  mongoose.connect(MONGO_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  mongoose.connection.once('open', () => {
    console.log(`👍 Connected to database ${MONGO_HOST}`)
  })

  mongoose.connection.on('error', console.error)
}

module.exports = { connect, mongoose }
