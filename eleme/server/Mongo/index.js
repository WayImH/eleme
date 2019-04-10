var mongo = require("mongoose")
//console.log(mongo)
mongo.connect("mongodb://127.0.0.1:27017/MT", { useNewUrlParser: true })

mongo.connection.on("connected",function(){
	console.log("连接成功")
})
mongo.connection.on("error",function(err){
	console.log("连接出错："+err)
})

module.exports=mongo
