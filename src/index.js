import express from 'express';
const app = express();

import { connect } from './config/database.js'

import service from './services/tweet-service.js'
 
app.listen(3000, async () =>{
    console.log("Server started at port 3000");
    await connect();
    console.log("Mongo db connected");

    let ser = new service();
    ser.create({content: 'Done with #refactor'})

})