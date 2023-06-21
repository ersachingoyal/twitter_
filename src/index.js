import express from 'express';
import bodyParser from 'body-parser';

const app = express();

import { connect } from './config/database.js'
import apiRoutes from './routes/index.js';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', apiRoutes);
 
app.listen(3000, async () =>{
    console.log("Server started at port 3000");
    await connect();
    console.log("Mongo db connected");

})