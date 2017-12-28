const mongodb = require('./config.js')
const Schema = mongodb.Schema

// 文章项
let articleItem = {
  time: { type: Date, default: Date.now },
  title: String,
  content: String
}

let articleSchema = new Schema(articleItem)
let articleModel = mongodb.model('articleModel', articleSchema)
exports.articleAPI = articleModel
