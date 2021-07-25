const bodyParser = require('koa-bodyparser')
const Koa = require('koa')
const cors = require('@koa/cors')

const { NODE_PORT } = require('./config')
const { admin, client } = require('./routes')
const { connect } = require('./services')

const app = new Koa()

connect()

app.use(cors())
app.use(bodyParser())
app.use(admin.routes())
app.use(admin.allowedMethods())
app.use(client.routes())
app.use(client.allowedMethods())

const PORT = process.env.PORT || NODE_PORT

console.log(`server running at port: ${PORT}`)
const server = app.listen(PORT).on('error', (err) => {
  console.log(err)
})

module.exports = server
