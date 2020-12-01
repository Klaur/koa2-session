const router = require('koa-router')()
const { check } = require('../middlewares/checkUser')
router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})
router.get('/session-test', check, async (ctx, next) => {
  if (ctx.session.viewCount == null) {
    ctx.session.viewCount = 0
  } else {
    ctx.session.viewCount++
  }
  ctx.body = {
    viewCount: ctx.session.viewCount
  }
})

module.exports = router
