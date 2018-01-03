const jwt = require('jsonwebtoken')
const secret = 'mynameisVictoria'

const db = require('../db/model.js')
const UserModel = db.userAPI
const LogModel = db.logAPI

var resObj = (code, msg, token, resData) => {
  return {
    status: code,
    msg: msg,
    token: token,
    data: resData
  }
}

var logObj = (user, ip, msg) => {
  return {
    user: user,
    ip: ip,
    massage: msg
  }
}
/**
 *  用户信息
 */
exports.USER_REGISTER_API = async(ctx, next) => {
  var addInfo = ctx.request.query
  if (!addInfo.user || !addInfo.password) {
    ctx.status = 200
    ctx.body = resObj(-1, '参数不全')
    return
  }
  let userObj = {}
  userObj.user = addInfo.user
  let userIp = ctx.request.ip.match(/\d+.\d+.\d+.\d+/)[0]
  let logInfo = logObj(addInfo.user, userIp, '注册账号')
  try {
    await UserModel.find(userObj).exec()
      .then((data) => {
        if (data.length !== 0) {
          ctx.body = resObj(2, '用户名已存在')
        } else {
          addInfo.token = jwt.sign({
            user_id: addInfo.user
          }, secret, {
            expiresIn: '12h'
          })
          let addUser = new UserModel(addInfo)
          addUser.save()
          // 日志服务
          let logRegister = new LogModel(logInfo)
          logRegister.save()
          ctx.status = 200
          ctx.body = resObj(1, '注册成功')
        }
      })
      .catch((e) => {
        ctx.body = resObj(0, '发生错误', e.toString())
      })
  } catch (e) {
    ctx.body = resObj(0, '数据库错误', e.toString())
  }
}
// login
exports.USER_LOGIN_API = async(ctx, next) => {
  let Info = ctx.request.query
  console.log(Info)
  if (!Info.user || !Info.password) {
    ctx.status = 200
    ctx.body = resObj(-1, '参数不全')
    return
  }
  let userObj = {}
  userObj.user = Info.user
  let userIp = ctx.request.ip.match(/\d+.\d+.\d+.\d+/)[0]
  let logInfo = logObj(Info.user, userIp, '登录系统')
  try {
    await UserModel.find(userObj).exec()
      .then((data) => {
        if (data.length === 1) {
          if (data[0].password === Info.password) {
            // 日志服务
            let logRegister = new LogModel(logInfo)
            logRegister.save()
            const token = jwt.sign({
              user_id: data[0]._id
            }, secret, {
              expiresIn: '12h'
            })
            userObj.password = Info.password
            UserModel.findOneAndUpdate(userObj, {token: token}).exec()
            ctx.body = resObj(1, '登录成功', token)
          } else {
            ctx.body = resObj(2, '密码错误')
          }
        } else {
          ctx.body = resObj(2, '不存在用户名')
        }
      })
      .catch((e) => {
        ctx.body = resObj(0, '发生错误', e.toString())
      })
  } catch (e) {
    ctx.body = resObj(0, '数据库错误', e.toString())
  }
}
