const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('express').Router();
const app = express();
const port = process.env.PORT || 8004;
app.use(express.json());
app.use(cors())
var mongoUrl= process.env.MONGODB_URI || "mongodb://localhost:27017/ActivityFinderDB";

const userController=require('./controllers/userControllers')
const dataController=require('./controllers/weatherDataConrollers')
const movieController=require('./controllers/movieControllers')
const restaurantController=require('./controllers/restaurantController')
const chatController=require('./controllers/chatControllers')
const locationController=require('./controllers/locationControllers')
const recommendationController=require('./controllers/recommendationControllers')

app.get('/checkLive',async (req,res,next)=>{
    let pro_time = "Yes, You are Live in heroku. Welcome to the ActivityFinder BackEnd Testing :)";
    res.send(pro_time);
});

app.route('/login').post(userController.Login);
app.route('/weatherdata').get(dataController.getData);
app.route('/moviedata').post(movieController.getData);
app.route('/restaurantdata').post(restaurantController.getData);
app.route('/locationdata').post(locationController.getData);
app.route('/recommendation').post(recommendationController.getData);
app.route('/chatbot').post(chatController.getChat);

app.use('/', express.static(__dirname + '/'));
app.listen(port);

mongoose.connect(mongoUrl, { useNewUrlParser:true }, function(err) {
    if (err) {
        console.log('info', 'Couldnt connect to MongoDB:', err);
    } else {
        console.log('info', 'Connected to MongoDB');
    }
});

const db = mongoose.connection;
db.on('error', (error) => {
  console.error(`Error while connecting to DB: ${error.message}`);
});
db.once('open', () => {
  console.log('ActivityFinderDB DB connected successfully!');
});

