
//this post route is for testing the authentication of the user, it will check if the user is authenticated or not by checking the token in the cookies, if the token is valid then it will return the user data, otherwise it will return an error message.
const express =require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const  multer = require('multer');

const upload = multer({storage: multer.memoryStorage()});





const router = express.Router();

router.post ('/', authMiddleware,
    upload.single('file'), (req,res)=>{
    res.status(200).json({
        message:"File uploaded successfully",
        file: req.file
       
    })
});



module.exports = router;