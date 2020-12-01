module.exports = {
  async check(ctx, next) {
    if (ctx.session._id) {
      await next()
    } else {
      ctx.throw(401, '暂未登录')
    }
  },
  async userExist(ctx, next) {}
}
