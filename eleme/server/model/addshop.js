var mongo = require('../Mongo')

var addshopSchema = mongo.Schema({
		shopname:String,
		address:String,
		phone:Number,
		introduction:String,
		slogan:String,
		category:String,		
		num1:Number,
		num2:Number,
		startTime: String,
   		endTime:String,
        imageUrl:String,
        action:String,
        saleList:Array,
        value:Object,
        shopphoto:String
})

var addshopdata = mongo.model("addshopdata",addshopSchema)
module.exports=addshopdata
