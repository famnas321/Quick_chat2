const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:false
    },
    lastname:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        
    },
    proficePic:{
        type:String,
        required:false
    },
},{timestamps:true})
module.exports=mongoose.model('users',userSchema)