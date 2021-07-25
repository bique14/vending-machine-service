const Router = require('koa-router')
const { clientService } = require('../services')

const router = new Router()

router
  .get('/:location', async (ctx, _) => {
    const { location } = ctx.params
    ctx.body = await clientService.getItemsByLocation(location)
  })
  .put('/buy', async (ctx, _) => {
    const buy = await clientService.buyItem(ctx)
    ctx.status = buy.status

    if (buy.status !== 200) {
      ctx.body = {
        location: buy.location,
        item: buy.item,
        message: buy.message
      }
    } else {
      ctx.body = { location: buy.location, item: buy.item }
    }
  })

module.exports = router
