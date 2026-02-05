const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_DB_CONNECTION)
const db= mongoose.connection
db.on('connected', ()=>{
    console.log("Mongo DB connected😎")
})
db.on('err',()=>{
    console.log("Error occured while connecting mongodb")
})

module.exports= db