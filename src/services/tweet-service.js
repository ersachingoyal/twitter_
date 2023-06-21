import { TweetRepository, HashtagRepository} from '../repository/index.js'

class TweetService{
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hastagRepository = new HashtagRepository();
    }

    async create(data){
        const content = data.content;
        let tags = content.match(/#[a-zA-Z0-9_]+/g)
                        .map((tag) => tag.substring(1).toLowerCase()) //regex to get the hashtags and to remove the # from the hashtag and //to treat lower and uppercase hashtag as same
        const tweet = await this.tweetRepository.create(data);
        let alreadyPresentTags = await this.hastagRepository.findByName(tags);  //to check all the hastag already there in db which we are sending in our tweet
        let titleOfPresenttags = alreadyPresentTags.map(tags => tags.title);
        let newTags = tags.filter(tag => !titleOfPresenttags.includes(tag));
        newTags = newTags.map(tag => {
            return {title: tag, tweets: [tweet.id]}  //coz the bulk create accepts an obj like this
        })
        await this.hastagRepository.bulkCreate(newTags);
        alreadyPresentTags.forEach((tag) => {  //we need to add the id of the tweet to the already present tag
            tag.tweets.push(tweet.id);
            tag.save()
        })
        return tweet;
    }

}

export default TweetService;