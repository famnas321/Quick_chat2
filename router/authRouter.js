const router = require('express').Router()
const {userSignUP} = require('../controller/authController')

router.post('/signup',userSignUP)

module.exports= router