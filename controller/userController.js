 const user = require("../model/user")

exports.fetchAllUsers= async(req,res)=>{
    const id= req.body.userId
    try{
          const  fetcheUsers = await user.find({_id: {$ne:req.body.userId}})
          res.status(201).json({mesa})
    }catch(error){

    }
     
}