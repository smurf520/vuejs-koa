const mongodb = require('./config.js')
const Schema = mongodb.Schema

// 文章项
let articleItem = {
  time: { type: Date, default: Date.now },
  title: String,
  content: String
}
// 用户项
let adminUser = {
  user: String,
  password: String,
  email: String,
  token: String,
  remark: { type: String, default: '暂无' },
  joinTime: { type: Date, default: Date.now }
}
// 登录日志
let loginLogs = {
  user: String,
  ip: String,
  massage: String,
  loginTime: { type: Date, default: Date.now }
}

let articleSchema = new Schema(articleItem)
let userSchema = new Schema(adminUser)
let logSchema = new Schema(loginLogs)

let articleModel = mongodb.model('articleModel', articleSchema)
let userModel = mongodb.model('userModel', userSchema)
let logModel = mongodb.model('logModel', logSchema)

exports.articleAPI = articleModel
exports.userAPI = userModel
exports.logAPI = logModel
