const user= require('../model/user')
const bcrypt= require('bcryptjs')
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
     console.log(error)
    }
}