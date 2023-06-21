const express = require('express');
const app = express();

const connect = require('./config/database');
const TweetRepository =  require('./repository/tweet-repository');
const Comment = require('./models/comments');

app.listen(3000, async () =>{
    console.log("Server started at port 3000");
    await connect();
    console.log("Mongo db connected");

    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.create({content: 'Tweet with comment schema 2'});
    const comment = await Comment.create({content: 'new comment 2'});
    tweet.comments.push(comment);
    await tweet.save();
    console.log(tweet);
})