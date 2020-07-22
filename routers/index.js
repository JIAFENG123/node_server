/*
 * @Descripttion: 
 * @version: 
 * @Author: 贾峰
 * @Date: 2020-04-22 09:37:12
 * @LastEditors: 贾峰
 * @LastEditTime: 2020-07-22 17:04:37
 */ 
const router = require('koa-router')()
const Homecontroller = require('../controller')
module.exports = app => {
    // 添加路由
    router.get( '/', Homecontroller.index )
    
    router.get('/home', Homecontroller.home)
    
    router.get('/home/:id/:name', Homecontroller.homeParams)
    
    router.get('/user', Homecontroller.login)
    
    router.post('/user/register', Homecontroller.register)

    router.post('/insertData', Homecontroller.insertData)
    // 调用路由中间件
    app.use(router.routes())
}