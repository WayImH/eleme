var Router = require("koa-router")
var goods = require("../model/goods")
var foodslist = new Router
foodslist.get("/",async (ctx,next)=>{
	var res =await goods.find({})
	ctx.body = res
})
foodslist.delete("/",async (ctx,next)=>{
	var _id = ctx.query.foodid
	var res = await goods.remove({_id})
	ctx.body="删除成功"
})

module.exports=foodslist