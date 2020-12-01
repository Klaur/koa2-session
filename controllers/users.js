const { check } = require('../middlewares/checkUser')
const Users = require('../models/users')
module.exports = {
  async login(ctx, next) {
    ctx.verifyParams({
      username: { type: 'string', required: true },
      password: { type: 'string', required: true }
    })
    const user = await Users.findOne(ctx.request.body)
    if (user) {
      ctx.session._id = user._id
      ctx.session.username = user.username
      console.log(ctx.session)
      ctx.body = {
        status: 200,
        data: true,
        message: '登录成功！'
      }
    } else {
      ctx.throw(401, '用户名或密码不正确')
    }
  },
  async logout(ctx, next) {
    ctx.session = null
    ctx.body = {
      status: 200,
      body: true,
      message: '退出成功'
    }
  },
  async checkUserExist(ctx, next) {
    const user = await Users.findById(ctx.params.id)
    if (!user) {
      ctx.throw(404, '用户不存在')
    }
    await next()
  },
  async getUserInfo(ctx, next) {
    ctx.body = {
      status: 200,
      data: {
        userInfo: {
          username: ctx.session.username
        }
      },
      message: ''
    }
  }
}
