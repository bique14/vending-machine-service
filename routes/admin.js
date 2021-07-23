const Router = require('koa-router')
const router = new Router({ prefix: '/admin' })

router.get('/', (ctx, next) => {
  ctx.status = 200
  ctx.body = { msg: 'Hi Admin! 🇹🇭' }
})

module.exports = router
