require("dotenv").config()
const express= require('express')
const dbConfig= require("./config/db_config")
const app= express()

const authRouter= require("./router/authRouter")
const userRouter = require("./router/userRouter")
const chatRouter = require("./router/chatRouter")
app.use(express.json())

app.use('/api/auth',authRouter)
app.use('/api',userRouter)
app.use('/api/chats',chatRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})

