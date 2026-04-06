 const user = require("../model/user")

exports.fetchAllUsers= async(req,res)=>{
    const id= req.body.userId
    try{
          const  fetcheUsers = await user.find({_id: {$ne:req.body.userId}})
          res.status(201).json({message:"Data fetched successfully", fetchedUsers})
          console.log("all userd data is",fetcheUsers)
    }catch(error){
       res.status(500).json({message:"unexpected error occured while fetching data",error})
       console.log(error)
    }
     
}