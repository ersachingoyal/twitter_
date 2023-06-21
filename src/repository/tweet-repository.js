const Tweet = require('../models/tweet');

class TweetRepository{
    async create(data){
        try {
            const tweet = Tweet.create(data); //create method provided by mongose itself
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id){
        try {
            const tweet = Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getWithComments(id){
        try {
            const tweet = Tweet.findById(id).populate({path: 'comments'}); // did this so that the complete comment poplulate 
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async update(tweetId, data){
        try {
            const tweet = Tweet.findByIdAndUpdate(tweetId, data, { new: true }); //added new true here coz, without this the data we will get will be the last on but mongo will be having the latest one
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async destroy(id){
        try {
            const tweet = Tweet.findByIdAndRemove(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = TweetRepository;