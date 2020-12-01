const router = require('koa-router')()
const { check } = require('../middlewares/checkUser.js')
const { getUserInfo, login, logout } = require('../controllers/users')
router.prefix('/users')

router.post('/login', login)

router.post('/logout', logout)

router.get('/user-info', check, getUserInfo)

module.exports = router
