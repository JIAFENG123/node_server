/*
 * @Descripttion: 
 * @version: 
 * @Author: 贾峰
 * @Date: 2020-04-22 09:54:00
 * @LastEditors: 贾峰
 * @LastEditTime: 2020-07-23 18:00:42
 */ 
const Service = require('../service')
const insertData = require('../db/handle_query/insertData')
const removeData = require('../db/handle_query/removeData')
module.exports = {
    index: async (ctx, next) => {
        ctx.response.header = {
            "Access-Control-Allow-Origin": "*"
        }
        ctx.response.body = `<h1>index page</h1>`
    },
    home: async (ctx, next) => {
        console.log(ctx.request.query)
        console.log(ctx.request.querystring)
        ctx.response.body = '<h1>HOME page</h1>'
    },
    homeParams: async (ctx, next) => {
        console.log(ctx.params)
        ctx.response.body = '<h1>HOME page /:id/:name</h1>'
    },
    login: async (ctx, next) => {
        ctx.response.body =
            `
        <form action="/user/register" method="post">
          <input name="name" type="text" placeholder="请输入用户名：ikcamp"/> 
          <br/>
          <input name="password" type="text" placeholder="请输入密码：123456"/>
          <br/> 
          <button>GoGoGo</button>
        </form>
      `
    },
    register: async (ctx, next) => {
        let {
            name,
            password
        } = ctx.request.body
        let data = await Service.register(name,password)
        ctx.response.body = data
    },
    removeData: async(ctx,next) => {
        let requestData = ctx.params.id
        let res = await removeData(requestData)
        if(res == 'empty'){
            ctx.response.body = {
                status: '110',
                msg: '数据未找到'
            }
        }
    },
    insertData: async (ctx,next) => {
        ctx.response.header = {
            "Access-Control-Allow-Origin": "*"
        }
        let requestData = ctx.request.body
        let res = await insertData(requestData)
        console.log(res)
        ctx.response.body = {
            status: 200,
            msg: '操作成功'
        }
    }
}