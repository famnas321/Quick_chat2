 const user = require("../model/user")

exports.fetchAllUsers= async(req,res)=>{
    const id=  req.userId
    console.log(id,"this is from controller")
    try{
          const  fetcheUsers = await user.find({_id: {$ne:id}}).select("-password")
          res.status(201).json({message:"Data fetched successfully", fetcheUsers})
          console.log("all userd data is",fetcheUsers)
    }catch(error){
       res.status(500).json({message:"unexpected error occured while fetching data",error})
       console.log(error)
    }
     
}