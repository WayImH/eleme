var mongo = require("../Mongo")

var cschema = mongo.Schema({
	shopid:String,
	categories:Array
})
var categoryschema = mongo.model("categoryschema",cschema)
module.exports=categoryschema