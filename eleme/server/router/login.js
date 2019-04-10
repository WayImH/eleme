var admin = require("../model/admin")
var Router = require("koa-router")
var login = new Router()
login.post("/",async (ctx,next)=>{
	console.log(ctx.request.body)
	var web = ctx.request.body
	var res=await admin.findOne({userName:web.username})
	if(res){
		if(web.pwd==res.pwd){
			ctx.body={
			status:1,
	  	 	state:'success',
	  	 	message:"登录成功"
			}
		}else{
			ctx.body={
			status:0,
	  	 	state:'error',
	  	 	message:"密码错误"
			}
		}
	}else{
		 var oneData = new admin(web)
	  	 await oneData.save()
	  	 ctx.body = {
	  	 	status:2,
	  	 	state:'success',
	  	 	message:"注册成功"
	  	 }
	}
	
})
module.exports = login