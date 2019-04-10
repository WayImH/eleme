var Router = require("koa-router")
var addshop = require("../model/addshop")
var shoplist = new Router
shoplist.get("/",async (ctx,next)=>{
	var res =await addshop.find({})
	ctx.body = res
})
shoplist.get("/two",async (ctx,next)=>{
	//要把数据库中的表中的数据给前端发送回去
	//要用到shop表
	//那要引入
	var count = ctx.query.count
	var page = ctx.query.page
	var res = await addshop.find({}).limit(4).sort({_id:-1})
	ctx.body = res
})

shoplist.get("/three",async (ctx,next)=>{
	//要把数据库中的表中的数据给前端发送回去
	//要用到shop表
	//那要引入
	var count = ctx.query.count
	var page = ctx.query.page
	var res = await addshop.find({}).skip(page*count).limit(4).sort({_id:-1})
	ctx.body = res
})
shoplist.delete("/",async (ctx,next)=>{
	var _id = ctx.query.shopid
	var res = await addshop.remove({_id})
	ctx.body="删除成功"
})
shoplist.get("/aa",async (ctx,next)=>{
	var str = ctx.query.str;
	var res = await addshop.find({shopname:{$regex:new RegExp(str)}})//正则模糊查询
	/*if(!res.length){
		var res = await goods.find({foodName:{$regex:new RegExp(str)}})
	}
	console.log(res)*/
	ctx.body = res
})

module.exports=shoplist