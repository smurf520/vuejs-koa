const router = require('koa-router')()
// var Mock = require('mockjs') // 引入mockjs
const articleAPI = require('../api/articleAPI.js')
// const Random = Mock.Random  // 引入mockjs生成随机属性的函数 random具体可以生成
router.prefix('/index')
// admin
const add = articleAPI.ADD_ARTICLE_INFO_API
/**
 *  admin
 */
router.post('/addArticle', add)

// router.post('/string', async (ctx, next) => {
//   const produceNewsData = function () {
//     let articles = []
//     for (let i = 0; i < 50; i++) {
//       let newArticleObject = {
//         title: Random.csentence(5, 30), // Random.csentence( min, max )
//         author: Random.cname()// Random.cname() 随机生成一个常见的中文姓名
//       }
//       articles.push(newArticleObject)
//     }
//     return {
//       articles: articles
//     }
//   }
//   ctx.body = await produceNewsData()
// })

// router.get('/json', async (ctx, next) => {
//   ctx.body = {
//     title: 'koa2 json'
//   }
// })

module.exports = router
