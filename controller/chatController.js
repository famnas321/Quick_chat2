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
exports.fetchAllChats= async (req,res)=>{
        const id= req.userId
     try{
         
          console.log(id,"this is from chat controller")
          const allChats= await  chats.find({members:{$in:id}})

          res.status(200).json({message:"chats fetches successfully",allChats})
          console.log(allChats)
     }catch(error){
          res.status(500).json({errorMessage: "this error occured while fetching all chats",error})
          console.log("error while fetching chats",error)
     }

}