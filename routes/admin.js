const Router = require('koa-router')
const { adminService } = require('../services')

const router = new Router({ prefix: '/admin' })

router
  .get('/', async (ctx, _) => {
    ctx.body = await adminService.getAllLocationAndItem()
  })
  .get('/:location', async (ctx, _) => {
    const { location } = ctx.params
    ctx.body = await adminService.getItemsByLocation(location)
  })
  .post('/create-location', async (ctx, _) => {
    ctx.body = await adminService.createLocation(ctx)
  })
  .put('/add-item', async (ctx, _) => {
    ctx.body = await adminService.addItemInLocation(ctx)
  })
  .put('/restock', async (ctx, _) => {
    ctx.body = await adminService.restockItem(ctx)
  })

module.exports = router
