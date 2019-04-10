var Router = require("koa-router")
var Multer = require("koa-multer")
var category = require("../model/addfoods")
var addfoods = new Router()
var goods = require("../model/goods")
var pic = Multer({dest:"uploads/"})
addfoods.post("/category",async (ctx,next)=>{
	var web = ctx.request.body;
	var res = await category.findOne({shopid:web.shopid})
	if(res){
		res.categories.push(web.onecategory)
		await category.update({shopid:web.shopid},res)
		ctx.body = "添加成功"
	}else{
		var obj = {
			shopid:web.shopid,
			categories:[web.onecategory]
		}
		var oneData = new category(obj)
		await oneData.save()
		
		ctx.body = "(初)添加成功"
	}
})
addfoods.get("/category",async (ctx,next)=>{
	var shopid=ctx.query.shopid
	var res = await category.findOne({shopid})
	ctx.body = res
})

addfoods.post("/pic",pic.single("file"),(ctx,next)=>{
	ctx.body =ctx.req.file.filename
})
addfoods.post("/",async (ctx,next)=>{
	var web = ctx.request.body;
	var onedata = new goods(web)
	await onedata.save()
	ctx.body="添加成功"
})
addfoods.put("/",async (ctx,next)=>{
	var web = ctx.request.body
	 await goods.update({_id:web._id},web)
	ctx.body="修改成功"
})
addfoods.get("/",async (ctx,next)=>{
	var id = ctx.query.shopid
	if(id !== "undefined"){
		var res = await goods.find({id})
		ctx.body = res
	}else{
		var res = await goods.find({})
		ctx.body = res
	}
})
module.exports=addfoods