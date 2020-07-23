/*
 * @Descripttion: 
 * @version: 
 * @Author: 贾峰
 * @Date: 2020-04-21 14:51:43
 * @LastEditors: 贾峰
 * @LastEditTime: 2020-07-23 11:32:48
 */ 
const Koa = require('koa')
// 注意 require('koa-router') 返回的是函数:
const router = require('./routers')
const bodyParser = require('koa-bodyparser')
require('./db')
const app = new Koa()
app.use(bodyParser())
// db()
router(app)

app.listen(3300, () => {
    console.log('server is running at http://localhost:3300')
})