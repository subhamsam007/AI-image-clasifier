const jwt = require('jsonwebtoken');


async function authMiddleware(req,res,next){
    async(req,res)=>{
    const token = req.cookies.token; //get the token from the cookies
    if(!token){
        return res.status(401).json({
            message:"Invalid please login first"
        })
    }
    try{
        const decoded =  jwt.verify(token,process.env.JWT_SECRET_KEY);//
        const user = await userModel.findById(decoded.id);
        if(!user){
            return res.status(401).json({
                message:"User not found, login again"
            })
        }
        req.user = user;
        res.status(200).json({
            message:"User authenticated successfully",
            user
        })
        req.user = user;
        next();

    }catch(err){
        return res.status(401).json({
            message:"Invalid token,login again "
        })
    }


}}

module.exports = authMiddleware;