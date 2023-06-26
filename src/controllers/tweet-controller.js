import TweetService from "../services/tweet-service.js";
import upload from "../config/file-upload-s3-config.js";

const singleUploader = upload.single('image'); //this name in params need to be same as our db field name

const tweetService = new TweetService();

export const createTweet = async (req, res) => {
    try {
        // this is if we want to upload the image too with the tweet
        // singleUploader(req, res, async function(err, data) {
        //     if(err){
        //         return res.status(500).json({error: err});
        //     }
        //     const payload = {...req.body};
        //     payload.image = req.file.location;
        //     const response = await tweetService.create(payload);
        //     return res.status(200).json({
        //         success: true,
        //         message: 'Successfully created the tweet',
        //         data: response,
        //         error: {}
        //     })
        // })
        const response = await tweetService.create(req.body);
        return res.status(200).json({
            success: true,
            message: 'Successfully created the tweet',
            data: response,
            error: {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong ',
            data: {},
            error: error
        })
    }
}

export const getTweet = async (req, res) => {
    try {
        const response = await tweetService.get(req.params.id);
        return res.status(200).json({
            success: true,
            message: 'Successfully fetched the tweet',
            data: response,
            error: {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong ',
            data: {},
            error: error
        })
    }
}