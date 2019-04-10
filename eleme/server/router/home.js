var Router = require("koa-router")
var home = new Router()
var axios =require("axios")
home.get("/",async (ctx,next)=>{
	var res =await axios.get("https://apis.map.qq.com/ws/location/v1/ip?key=CTEBZ-6TIRS-SB4OR-6T6J7-FVEC2-JUB4L")
	ctx.body = res.data
})
home.get("/address",async (ctx,next)=>{
	var region = ctx.query.region;
	var keyword = ctx.query.keyword;
	var key = "CTEBZ-6TIRS-SB4OR-6T6J7-FVEC2-JUB4L"
	//https://apis.map.qq.com/ws/place/v1/suggestion/?region=北京&keyword=美食&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77
	var res = await axios.get("https://apis.map.qq.com/ws/place/v1/suggestion/",{
		params:{
			region,keyword,key
		}
	})
	console.log(res.data)
	ctx.body = res.data
})

module.exports = home