const jwt = require("jsonwebtoken")


module.exports = (req,res,next)=>{
   
    try{
       

        const token= req.headers.authorization.split(" ")[1]
        

       const decoded = jwt.verify(token,process.env.SECRET_KEY)
       console.log(decoded)
      req.userId = decoded.userId
       
       next()
    }catch(error){
        res.status(500).json({message:"Error occured in middleware",error})
        console.log("this error from token verifying middleware", error)
    }
}