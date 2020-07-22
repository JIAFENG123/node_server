/*
 * @Descripttion: 
 * @version: 
 * @Author: 贾峰
 * @Date: 2020-04-21 14:51:43
 * @LastEditors: 贾峰
 * @LastEditTime: 2020-07-22 16:32:45
 */ 
const Koa = require('koa')
// 注意 require('koa-router') 返回的是函数:
const router = require('./routers')
const bodyParser = require('koa-bodyparser')
const {db} = require('./db')
const app = new Koa()
app.use(bodyParser())
db()
router(app)

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
})