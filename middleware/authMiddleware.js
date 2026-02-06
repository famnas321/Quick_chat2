const jwt = require("jsonwebtoken")

module.exports = (req,res,next)=>{
     const {token}= req.headers.autharization.split(" ")[1]
    try{
       const decoded = jwt.verify(token,process.env.SECRET_KEY)
       req.body.userId= decoded.userId
       next()
    }catch(error){
        res.status(500).json({message:"Error occured in middleware"})
    }
}