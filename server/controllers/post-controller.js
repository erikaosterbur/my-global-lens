const { Post, User, Comment } = require('../models');



module.exports = {

    async getAllPosts (req, res) {
        const allPosts = await Post.find({})

        if(!allPosts) {
            return res.status(400).json({ message: "No posts found." })
        }

        res.status(200).json(allPosts)
    },

    async getSinglePost ({ params }, res) {

        const post = await Post.findOne({ _id: params.id }).populate({
            path: "comments",
            populate: {
                path: "postedBy",
                model: "User"
            }
        });

        if (!post) {
            return res.status(400).json({ message: "No post found."});
        }

        res.status(200).json(post)
    },
    
    async createPost (req, res) {
        const postObj = { img: req.body.img, country: req.body.country, caption: req.body.caption, postedBy: req.body.userId }
        const newPost = await Post.create(postObj);

        if (!newPost) {
            return res.status(400).json({ message: "Unable to create post." });
        }

        res.status(200).json(newPost);
    },

    async editPost (req, res) {
        const post = await Post.findOneAndUpdate (
            { _id: req.params.id },
            req.body, 
            { new: true }
        );

        if (!post) {
            return res.status(400).json({ message: "Unable to update post." });
        }

        res.status(200).json(post);
    },

    async deletePost (req, res) {
        try {
            const post = await Post.findOneById(req.params.id);
            if (post.userId === req.body.userId) {
                await post.deleteOne();
                res.status(200).json( "The post has been deleted." );
            } else {
                res.status(403).json("You can only delete your own post." );
            }    
        } catch (err) {
            res.status(500).json(err);
        }  
    }

}