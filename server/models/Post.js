const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    img: {
        type: String,
    },
    country: {
        type: String,
    },
    caption: {
        type: String,
    },
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: User
    },
    postedOn: {
        type: Date,
        default: Date.now,
    },
    comments:[
        {
          type: Schema.Types.ObjectId,
          ref: Comment,
        }
    ],

});

const Post = model('Post', postSchema);

module.exports = Post;