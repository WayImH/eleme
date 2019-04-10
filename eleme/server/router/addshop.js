var Router = require("koa-router")
var Multer = require("koa-multer")
var addshopdata = require("../model/addshop")
var addshop = new Router()
var photo = Multer({dest:"uploads/"})
addshop.post("/photo",photo.single("file"),(ctx,next)=>{
	ctx.body = ctx.req.file.filename
})
addshop.post("/data",async (ctx,next)=>{
	var obj = ctx.request.body
	console.log(obj)

	var newdata = new addshopdata(obj)
	await newdata.save()
	ctx.body = "店铺信息加入成功"
})
module.exports = addshop