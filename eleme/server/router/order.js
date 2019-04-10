var Order = require("../model/Order")
var Router = require("koa-router")
var order = new Router
order.post("/",async (ctx,next)=>{
	var web = ctx.request.body
	var onedata = new Order(web)
	await onedata.save()
	ctx.body="成功"
})
order.get("/",async (ctx,next)=>{
	var userName = ctx.query.userName
	var res = await Order.find({userName})
	ctx.body=res
})
module.exports= order