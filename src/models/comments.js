import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    onModel: { 
        type: String,
        required: true,
        enum: ["Tweet", "Comment"]  //comment can be on a comment as well as tweet
    },
    commentable: { 
        type: mongoose.Schema.Types.ObjectId,   
        required: true,
        refPath: 'onModel'
    }
}, {timestamps: true}) 

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;