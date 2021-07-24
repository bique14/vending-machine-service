/**
 * @API
 *
 * 🌙 Client side
 * [] show items by location
 * method: GET
 * @param {string} locationSlug
 *
 * [] buy item
 * method: POST
 * @param {string} locationId
 * @param {string} itemId
 *
 * 🌞 Admin side
 * [] show all vending machine location
 * [] show all items
 * method: GET
 * @param {} /
 *
 * [] add new item
 * method: PUT
 * @param {string} locationId
 * @param {object} item
 *
 * [] add new location
 * method: PUT
 * @param {string} locationId
 * @param {string} locationSlug
 * @param {object} item
 *
 * [] restock item
 * method: PUT
 * @param {string} locationId
 * @param {string} itemId
 * @param {number} amount
 *
 * [] check each item is less than 10 (for notification)
 * method: GET
 * @param {} /
 *
 */

const admin = require('./admin')
const client = require('./client')

module.exports = { admin, client }
