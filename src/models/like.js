import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
    onModel: {  // this will store whether the like was on tweet or a comment
        type: String,
        required: true,
        enum: ["Tweet", "Comment"]
    },
    likeable: {  //this will store automatically the id of whether the comment was liked or a tweet
        type: mongoose.Schema.Types.ObjectId,   
        required: true,
        refPath: 'onModel'   // when we have to refer to multiple obj here comments and tweet both so we use refpath
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {timestamps: true})

const Like = mongoose.model('Like', likeSchema);

export default Like;