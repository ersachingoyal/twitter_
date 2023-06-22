import Tweet from '../models/tweet.js';
import CrudRepository from './crud-repository.js';

class TweetRepository extends CrudRepository{
    constructor(){
        super(Tweet);
    }    

    async create(data){
        try {
            const tweet = Tweet.create(data); //create method provided by mongose itself
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    // async get(id){  will take from crudrepo
    //     try {
    //         const tweet = Tweet.findById(id);
    //         return tweet;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

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

    // async destroy(id){  will take from crudrepo
    //     try {
    //         const tweet = Tweet.findByIdAndRemove(id);
    //         return tweet;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    async find(id){
        try {
            const tweet = await Tweet.findById(id).populate({path: 'likes'});  // these mongoose methods are thenable and if we dont write await they will return the mongoose query object, but the populate method is available only on the mongoose query and not the resolved promise
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
}

export default TweetRepository;