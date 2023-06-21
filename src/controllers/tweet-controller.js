import TweetService from "../services/tweet-service.js";

const tweetService = new TweetService();

export const createTweet = async (req, res) => {
    try {
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