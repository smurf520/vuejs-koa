const mongodb = require('./config.js')
const Schema = mongodb.Schema

// 文章项
let articleItem = {
  time: { type: Date, default: Date.now },
  title: String,
  abstract: String,
  author: String,
  tag: [
    {
      tagId: { type: Number, default: 0 },
      tagName: String
    }
  ],
  content: String,
  show: { type: Number, default: 0 }
}

let articleSchema = new Schema(articleItem)
let articleModel = mongodb.model('articleModel', articleSchema)
exports.articleAPI = articleModel
