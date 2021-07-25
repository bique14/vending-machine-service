/**
 * @API
 *
 * 🌙 Client side
 * [✅] show items by location
 * method: GET
 * @param {string} locationSlug
 *
 * [✅] buy item
 * method: POST
 * @param {string} locationSlug
 * @param {string} itemId
 *
 * 🌞 Admin side
 * [✅] show all vending machine location
 * [✅] show all items
 * method: GET
 * @param {} /
 *
 * [✅] add new item in location
 * method: PUT
 * @param {string} locationSlug
 * @param {object} item
 *
 * [✅] add new location
 * method: POST
 * @param {object} location
 *
 * [✅] restock item
 * method: PUT
 * @param {string} locationSlug
 * @param {string} itemId
 * @param {number} amount
 *
 * [✅] check each item is less than 10 (for notification)
 * method: GET
 * @param {} /
 *
 * [✅] force item to out of stock
 * method: PUT
 * @param {string} locationSlug
 * @param {string} itemSlug
 *
 * [✅] remove item
 * method: DELETE
 * @param {string} locationSlug
 * @param {string} itemSlug
 *
 */

const admin = require('./admin')
const client = require('./client')

module.exports = { admin, client }
