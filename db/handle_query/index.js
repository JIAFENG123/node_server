/*
 * @Descripttion: 
 * @version: 
 * @Author: 贾峰
 * @Date: 2020-07-23 16:33:52
 * @LastEditors: 贾峰
 * @LastEditTime: 2020-07-23 16:39:17
 */
const mongoose = require("mongoose");
//  let p = new Promise((reslove, reject) => {
//     mongoose.connection.db.listCollections({ name: 'users' })
//       .next( (err, collinfo) => {
//         reslove(collinfo)
//       });
//   })
// //   let collinfo = await p.then()
//   if(collinfo){

//   }
const User = mongoose.model('users', {
    name: String,
    age: Number
})
module.exports =  {
    User
}