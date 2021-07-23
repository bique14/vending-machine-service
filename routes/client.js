const Router = require('koa-router')
const router = new Router()

router.get('/', (ctx, next) => {
  ctx.status = 200
  ctx.body = { msg: 'Hi user! 🎶' }
})

module.exports = router
