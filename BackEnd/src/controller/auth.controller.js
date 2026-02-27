const userModel = require('../models/user.model');
const jwt =require('jsonwebtoken');


async function register(req,res){
    const {name,password} = req.body;
    
    const userExits = await userModel.findOne({name:name})
    if(userExits){
        return res.status(400).json({message:"User already exists"})
    }

    const user = await userModel.create({name,password});

    const token = jwt.sign({id:user._id}, process.env.JWT_SECRET_KEY);
    res.cookie('token', token);

    res.status(201).json({message:'user created successfully', 
        user,
         token});
}

async function login(req,res){
    const {name,password} = req.body;
    const user = await userModel.findOne({name:name});

    if(!user){
        return res.status(400).json({message:"User not found"})
    }
    if(user.password !== password){
        return res.status(400).json({message:"Invalid password"})
    }
    const token = jwt.sign({id:user._id}, process.env.JWT_SECRET_KEY);
    res.cookie('token', token);
    res.status(200).json({message:'user logged in successfully',
    user,
    token});
}


module.exports = {
    register,
    login
}