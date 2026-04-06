const router= require("express").Router()
const {fetchAllUsers }= require("../controller/userController")
const {middleware}= require("../middleware/authMiddleware")

router.get('/fetchAllUsers',middleware, fetchAllUsers)
 
module.expots=router