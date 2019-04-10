var admin = require("../model/admin")
var Router = require("koa-router")

var adminlist = new Router

adminlist.get("/",async (ctx,next)=>{
	var pageNumber=Number(ctx.query.pageNumber)
	var res = await admin.find({},{pwd:false}).skip(5*(pageNumber-1)).limit(5).sort({creattime:-1})
	ctx.body = res
})
adminlist.get("/count",async (ctx,next)=>{
	var res = await admin.count({})
	ctx.body = res
})
module.exports = adminlist