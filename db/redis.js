const session = require('koa-generic-session')
const redisStore = require('koa-redis')
module.exports = {
  init(app) {
    app.keys = ['keys', 'keykeys#59533']
    app.use(
      session({
        //redis配置
        store: redisStore({
          all: '127.0.0.1:6379'
        }),
        //cookie配置
        cookie: {
          path: '/',
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000
        }
      })
    )
  }
}
