const { connect, mongoose } = require('./database')
const adminService = require('./admin.service')

module.exports = { connect, mongoose, adminService }
