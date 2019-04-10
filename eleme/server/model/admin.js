var mongo = require('../Mongo')

var adminSchema = mongo.Schema({
	username:String,
	pwd:String,
	creattime:{
		type:Date,
		default:new Date()
	},
	city:{
		type:String,
		default:"全国"
	}
})

var admin = mongo.model("admin",adminSchema)
module.exports=admin