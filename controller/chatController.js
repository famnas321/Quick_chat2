const chats= require("../model/chat")

exports.createNewChat = async (req,res)=>{
     try{
         const newChat= req.body
         const chat  = new chats(newChat)
         const savedChat = chat.save()
         res.status(201).json({message:"New chat created successfully"})
     }catch(error){
       res.status(500).json({error:"error occured while new chat creating ", error})
     }
}