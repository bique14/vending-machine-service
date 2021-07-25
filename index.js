const bodyParser = require('koa-bodyparser')
const Koa = require('koa')
const { NODE_PORT } = require('./config')
const { admin, client } = require('./routes')
const { connect } = require('./services')
const app = new Koa()

connect()

app.use(bodyParser())
app.use(admin.routes())
app.use(admin.allowedMethods())
app.use(client.routes())
app.use(client.allowedMethods())

const server = app.listen(NODE_PORT).on('error', (err) => {
  console.log(err)
})

module.exports = server
