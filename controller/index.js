const Service = require('../service')
const {client,assert} = require('../db/index')
const insertDocuments = require('../db/handle_query/insertData')
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
    insertData: async (ctx,next) => {
        ctx.response.header = {
            "Access-Control-Allow-Origin": "*"
        }
        let requestData = ctx.request.body
        console.log(requestData)
        // const dbclient = client.db('test');
        //   insertDocuments(dbclient,assert, function() {
        //     client.close();
        //   });
        ctx.response.body = {
            status: 200,
            msg: 'hhhhhh'
        }
    }
}