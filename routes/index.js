/**
 * @API
 *
 * 🌙 Client side
 * [] show items by location
 * [] buy item
 *
 * 🌞 Admin side
 * [] show all vending machine location
 * [] show all items
 * [] add new item
 * [] restock item
 *
 */

const admin = require('./admin')
const client = require('./client')

module.exports = { admin, client }
