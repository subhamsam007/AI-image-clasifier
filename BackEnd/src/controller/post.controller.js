
const postmodel = require("../models/post.model");

async function createPost(req,res) {
    const file = req.file;
    const caption = req.body.caption;
    const userId = req.userId;
    
    const newPost = new postmodel({
        image: file.filename,
        caption: caption,
        userId: userId
    });

    try {
        await newPost.save();
        res.status(201).json({message: "Post created successfully"});
    } catch (error) {
        res.status(500).json({message: "Error creating post", error: error.message});
    }
}