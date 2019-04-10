var Koa = require("koa");
var Koacors = require("koa2-cors")
var koastatic = require("koa-static")
var koabody = require("koa-body")
var router = require("./router")
var app = new Koa();
app.use(koabody())
app.use(Koacors())
app.use(koastatic('./uploads'))


app.use(router.routes())
app.listen(7890,function(err){
	console.log("服务器7890启动")
})
