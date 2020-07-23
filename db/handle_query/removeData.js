/*
 * @Descripttion: 
 * @version: 
 * @Author: 贾峰
 * @Date: 2020-07-22 14:36:05
 * @LastEditors: 贾峰
 * @LastEditTime: 2020-07-23 17:58:57
 */
const { User } = require('../handle_query/index')
module.exports = (queryParams) => {
    return new Promise((reslove, reject) => {
        User.count({ _id: queryParams }, (err, count) => {
            if (count) {
                User.findByIdAndRemove(queryParams).then((result) => {
                    reslove(result)
                }, err => reject(err))
            }else{
                reslove('empty')
            }
        })
    })
}