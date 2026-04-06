const user= require('../model/user')
const bcrypt= require('bcryptjs')
const jwt= require("jsonwebtoken")

exports.userSignUP=  async (req,res)=>{
  
    const {email,password,firstname,lastname,profilepic}= req.body
    try{
       const userExist= await user.findOne({email:email})
       if (userExist){
       return res.send("user alredy exist")
       }
       const hashedPassword= await bcrypt.hash(password,10)
     const newUser= new user({
        email,
        password: hashedPassword,
        firstname,
        lastname,
       
     })
    await newUser.save()
    res.send(201).json({message:"Registration succssfull"})
    }
   catch(error){
     res.status(500).json({message:"error occured in server", error:error})
     console.log(error,"this is error from signup")
    }
}

exports.userLogin= async (req,res)=>{
    const {email,password}= req.body
   try{
    const findUser= await user.findOne({email})
    if(!findUser){
      return res.status(404).json({message:"Email is not found in data base "})

    }
    const isValid = await bcrypt.compare(password, findUser.password)
    if(!isValid){
      return res.status(404).json({message:"Invalid Password"})
    }
   const token = jwt.sign({userId:findUser._id},process.env.SECRET_KEY,{expiresIn:"1d"})
   res.status(200).json({message:"User login succusful",token})
   }catch(error){
     res.status(500).json({message:"Unexpected error occures in server", error})
     console.log(error,"error while user login")
   }

}