const { connect, mongoose } = require('./database')
const adminService = require('./admin.service')
const clientService = require('./client.service')

module.exports = { connect, mongoose, adminService, clientService }
