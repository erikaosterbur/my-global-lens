const { Comment, User } = require('../models');

module.exports = {
    
    async createComment(req, res) {
        const commentObj = 
        { 
            text: req.body.text, 
            postedBy: req.body.userId 
        }
        const newComment = await Comment.create(commentObj);

        if (!newComment) {
            return res.status(400).json({ message: 'Unable to submit comment'});
        }

        res.status(200).json(newComment);
    },

    async editComment(req, res) {
        const comment = await Comment.findOneAndUpdate({_id: req.params.id},
            {text: req.body.text}
        )

        if (!comment) {
            return res.status(400).json({ message: 'Unable to update comment'});
        }

        res.status(200).json(comment);
    },

    async deleteComment(req, res) {
        const comment = await Comment.deleteOne({_id: req.params.id});

            if (!comment) {
              return res.status(400).json({message: 'Unable to delete post'});
            }
            res.status(200).json(comment);
          }
    //     try {
    //         const comment = await Comment.findById(req.params.id);
    //         if (comment.userId === req.body.userId) {
    //             await comment.deleteOne();
    //             res.status(200).json("The comment has been deleted");
    //         } else {
    //             res.status(403).json("You can only delete your comments")
    //         }
    //     } catch (err) {
    //         res.status(500).json(err);
    //     }
    // }
}