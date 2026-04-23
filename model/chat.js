const mongoose = require("mongoose")

const chatSchema = mongoose.Schema({
    members :{
        type:[
            {type:mongoose.Schema.Types.ObjectId,
                ref:"users"
            }
        ]
    },
    lastMessage:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"messages"
    },
    unreadMessageCount:{
        type:Number,
        defailt:0
    }
})
module.exports= mongoose.model("chats",chatSchema)