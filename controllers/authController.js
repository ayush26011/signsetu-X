const User = require("../models/User")
const bcrypt = require("bcryptjs")

exports.signup = async (req,res)=>{

try{

const {name,email,password} = req.body

// check user exist
const existingUser = await User.findOne({email})

if(existingUser){
return res.status(400).json({
message:"User already exists"
})
}


// password hash
const hashedPassword = await bcrypt.hash(password,10)

const user = new User({
name,
email,
password:hashedPassword
})

await user.save()

res.json({
message:"User registered successfully"
})

}catch(error){

res.status(500).json({
error:error.message
})

}

}

exports.login = async (req,res)=>{

try{

const {email,password} = req.body

const user = await User.findOne({email})

if(!user){
return res.status(400).json({
message:"User not found"
})
}

const isMatch = await bcrypt.compare(password,user.password)

if(!isMatch){
return res.status(400).json({
message:"Invalid credentials"
})
}

res.json({
message:"Login successful"
})

}catch(error){

res.status(500).json({
error:error.message
})

}

}