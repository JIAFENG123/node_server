/*
 * @Descripttion: 
 * @version: 
 * @Author: 贾峰
 * @Date: 2020-07-22 14:36:05
 * @LastEditors: 贾峰
 * @LastEditTime: 2020-07-23 16:31:42
 */
const {User} = require('../handle_query/index')
module.exports = (data) => {
  const user = new User(data)
  return new Promise((reslove, reject) => {
    user.save().then((result) => {
      reslove(result)
    }, (err) => {
      reject(err)
    })
  })
}