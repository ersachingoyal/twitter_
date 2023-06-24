import { LikeRepository, TweetRepository } from '../repository/index.js'

class LikeService{
    constructor(){
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    async toggleLike(modelId, modelType, userId){  //method to like and unlike if user press the like once or second time
        if(modelType == 'Tweet'){
            var likeable = await this.tweetRepository.find(modelId);  //getting the corresponding tweet
        }else if(modelType == 'Comment'){
            //remaining
        }else{
            throw new Error('unknown model type');
        }

        //now will check if the like already exists on the tweet or not 
        const exists = await this.likeRepository.findByUserAndLikeable({
            user: userId,
            onModel: modelType,
            likeable: modelId
        })
        
        if(exists){
            likeable.likes.pull(exists.id); //will remove the like id from thw tweet
            await likeable.save();
            await exists.deleteOne();  //coz we need to remove the corresponding like model too
            var isAdded = false;
        }else{
            const newLike = await this.likeRepository.create({
                user: userId,
                onModel: modelType,
                likeable: modelId
            });
            likeable.likes.push(newLike);
            await likeable.save();

            var isAdded = true;
        }

        return isAdded;
    }
}

export default LikeService;