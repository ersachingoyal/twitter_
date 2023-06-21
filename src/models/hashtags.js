import mongoose from "mongoose";

const hashtagSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    tweets: [  //because an hashtag can belong to multiple tweets thats why we are storing the tweet id
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet'
        }
    ]
}, {timestamps: true})

const Hashtag = mongoose.model('Hashtag', hashtagSchema);
export default Hashtag;