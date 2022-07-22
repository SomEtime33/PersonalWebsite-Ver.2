const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");



//create new post
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }  
});

//update a post 
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        
            if(post.username === req.body.username) {
                try {
                    const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                        $set:req.body
                    }, { new: true }
                    );
                    res.status(200).json(updatedPost);
                } catch (err) {
                    res.status(500).json(err);  
                }
            } else {
                res.status(401).json("you can update only your post")
            }
        
    } catch (err) {
        res.status(500).json(err);
    }
 
    
});

//delete a post
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
});

//get a post
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router