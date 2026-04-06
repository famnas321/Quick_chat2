const router = require('express').Router()
const {userSignUP,userLogin} = require('../controller/authController')


router.post('/signup',userSignUP)
router.get('/login',userLogin)

module.exports= router