const express = require('express');
const app = express();

const connect = require('./config/database');

const Tweet = require('./models/tweet');

app.listen(3000, async () =>{
    console.log("Server started at port 3000");
    await connect();
    console.log("Mongo db connected");

    const tweet = await Tweet.find({
        content: ['first tweet']
    })

    console.log(tweet);
})