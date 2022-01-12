const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
    text: {
        type: String,
        // required: true,
    },
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    postedOn: {
        type: Date,
        default: Date.now,
    },
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;