require("dotenv").config()
const express= require('express')
const dbConfig= require("./config/db_config")
const app= express()

const authRouter= require("./router/authRouter")
const userRouter = require("./router/userRouter")
app.use(express.json())

app.use('/api/auth',authRouter)
app.use('/api',userRouter)



const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})

