import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';

const app = express();

import { connect } from './config/database.js'
import apiRoutes from './routes/index.js';
import { passportAuth } from './config/jwt-middleware.js'
import {UserRepostiory, TweetRepository} from './repository/index.js'
import LikeService from './services/like-service.js';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(passport.initialize());
passportAuth(passport);

app.use('/api', apiRoutes);
 
app.listen(3000, async () =>{
    console.log("Server started at port 3000");
    await connect();
    console.log("Mongo db connected");

    // const userRepo = new UserRepostiory();
    // const tweetRepo = new TweetRepository();
    // const tweets = await tweetRepo.getAll();
    // const users = await userRepo.getAll();
    // const likeService = new LikeService();
    // await likeService.toggleLike(tweets[0].id, 'Tweet', users[0].id);
})