var login = require("./login")
var adminlist = require("./adminlist")
var Router = require("koa-router")
var addshop = require("./addshop")
var shoplist = require("./shoplist")
var foodslist = require("./foodslist")
var addfoods = require("./addfoods")
var home = require("./home")
var user = require("./webLogin")
var address = require("./address")
var order = require("./order")
var router = new Router()
router.use("/login",login.routes())
router.use("/adminlist",adminlist.routes())
router.use("/addshop",addshop.routes())
router.use("/foodslist",foodslist.routes())
router.use("/shoplist",shoplist.routes())
router.use("/addfoods",addfoods.routes())
router.use("/home",home.routes())
router.use("/user",user.routes())
router.use("/address",address.routes())
router.use("/order",order.routes())
module.exports = router