const router  = require("express").Router()
 const authMiddleware= require("../middleware/authMiddleware")
const {createNewChat,fetchAllChats} = require("../controller/chatController")
router.post("/create-new-chat",createNewChat)
router.get("/fetchChats", authMiddleware,fetchAllChats)


module.exports=router