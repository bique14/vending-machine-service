const bodyParser = require('koa-bodyparser')
const Koa = require('koa')
const { NODE_PORT } = require('./config')
const { admin, client } = require('./routes')
const { connectDatabase } = require('./services')
const app = new Koa()

connectDatabase()

app.use(bodyParser())
app.use(admin.routes())
app.use(admin.allowedMethods())
app.use(client.routes())
app.use(client.allowedMethods())

console.log(`server start at http://localhost:${NODE_PORT}`)

const server = app.listen(NODE_PORT).on('error', (err) => {
  console.log(err)
})

module.exports = server
