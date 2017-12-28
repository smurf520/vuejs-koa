
const db = require('../db/model.js')
const ArticleModel = db.articleAPI
// const mongoose = require('mongoose')

/**
 * 返回值
 * @param code 返回码
 * @param msg 返回信息
 * @param data 返回数据
 * @return
 */

var resObj = (code, msg, data) => {
  return {
    status: code,
    msg: msg,
    data: data
  }
}

/**
 * 文章信息
 */
// add
exports.ADD_ARTICLE_INFO_API = async(ctx, next) => {
  try {
    let addInfo = ctx.request.body
    let addData = new ArticleModel(addInfo.data)
    var data = await addData.save()
    ctx.body = resObj(1, '保存成功', data)
  } catch (e) {
    ctx.body = resObj(0, '保存出错', e.toString())
  }
}
