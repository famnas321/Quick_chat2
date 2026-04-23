const router  = require("express").Router()
// const {authMiddleware}= require("../middleware/authMiddleware")
const {createNewChat} = require("../controller/chatController")
router.post("/create-new-chat", createNewChat)

module.exports=router