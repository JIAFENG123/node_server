/*
 * @Descripttion: 
 * @version: 
 * @Author: 贾峰
 * @Date: 2020-07-22 14:09:20
 * @LastEditors: 贾峰
 * @LastEditTime: 2020-07-23 12:47:14
 */ 
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/test",function(err) {
     if(err){
         console.log('连接失败');
     }else{
         console.log("连接成功")
     }
});
