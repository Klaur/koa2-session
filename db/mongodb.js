const mongoose = require('mongoose')
module.exports = {
  init() {
    mongoose.connect('mongodb://localhost:27017/vue-admin', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    let db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection error:'))
    db.once('open', function () {
      console.log('数据库vue-admin连接成功！')
    })
  }
}
