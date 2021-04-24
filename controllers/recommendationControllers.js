const User = require('../models/user_structure');
let moviesController = require('../controllers/movieControllers')
let locationData = require('../location')
var promise = require("promise");
const fs = require('fs');
const fetch = require('node-fetch');
let locData,newLoc
let urlWeather = "http://api.openweathermap.org/data/2.5/weather?q=Dublin,IE&appid=ef272ce5c18fd04114b31684fe8f50e1";
let url = "https://api.themoviedb.org/3/genre/movie/list?api_key=88293050a56889ca23c23db2288ce8d5";
let url2 = "https://api.themoviedb.org/3/discover/movie?api_key=88293050a56889ca23c23db2288ce8d5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&genre=Action";
let url3 = "https://api.themoviedb.org/3/discover/movie?api_key=88293050a56889ca23c23db2288ce8d5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&genre=Action";
let url4 = "https://api.themoviedb.org/3/discover/movie?api_key=88293050a56889ca23c23db2288ce8d5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=3&genre=Action";
let url5 = "https://api.themoviedb.org/3/discover/movie?api_key=88293050a56889ca23c23db2288ce8d5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=4&genre=Action";
let url6 = "https://api.themoviedb.org/3/discover/movie?api_key=88293050a56889ca23c23db2288ce8d5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=5&genre=Action";
let url7 = "https://api.themoviedb.org/3/discover/movie?api_key=88293050a56889ca23c23db2288ce8d5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=6&genre=Action";
let url8 = "https://api.themoviedb.org/3/discover/movie?api_key=88293050a56889ca23c23db2288ce8d5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=7&genre=Action";
let url9 = "https://api.themoviedb.org/3/discover/movie?api_key=88293050a56889ca23c23db2288ce8d5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=8&genre=Action";
let url10 = "https://api.themoviedb.org/3/discover/movie?api_key=88293050a56889ca23c23db2288ce8d5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=9&genre=Action";
let url11 = "https://api.themoviedb.org/3/discover/movie?api_key=88293050a56889ca23c23db2288ce8d5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=10&genre=Action";
let url12 = "https://api.themoviedb.org/3/discover/movie?api_key=88293050a56889ca23c23db2288ce8d5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=11&genre=Action";
let url13 = "https://api.themoviedb.org/3/discover/movie?api_key=88293050a56889ca23c23db2288ce8d5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=12&genre=Action";
let url14 = "https://api.themoviedb.org/3/discover/movie?api_key=88293050a56889ca23c23db2288ce8d5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=13&genre=Action";




let settings = { method: "Get" };
let JSONX,JSON2,JSON3,JSON4,JSON5,JSON6,JSON7,JSON8,JSON9,JSON10,JSON11,JSON12,JSON13,JSON14,JSONWeather
let Final_Json=[]

fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        JSONX=json
    });

    fetch(url2, settings)
    .then(res => res.json())
    .then((json) => {
        JSON2=json
        Final_Json=Final_Json.concat(JSON2.results)
    });

    fetch(url3, settings)
    .then(res => res.json())
    .then((json) => {
        JSON3=json
        Final_Json=Final_Json.concat(JSON3.results)
    });

    fetch(url4, settings)
    .then(res => res.json())
    .then((json) => {
        JSON4=json
        Final_Json=Final_Json.concat(JSON4.results)
    });

    fetch(url5, settings)
    .then(res => res.json())
    .then((json) => {
        JSON5=json
        Final_Json=Final_Json.concat(JSON5.results)
    });

    fetch(url6, settings)
    .then(res => res.json())
    .then((json) => {
        JSON6=json
        Final_Json=Final_Json.concat(JSON6.results)
    });

    fetch(url7, settings)
    .then(res => res.json())
    .then((json) => {
        JSON7=json
        Final_Json=Final_Json.concat(JSON7.results)
    });
    fetch(url8, settings)
    .then(res => res.json())
    .then((json) => {
        JSON8=json
        Final_Json=Final_Json.concat(JSON8.results)
    });
    fetch(url9, settings)
    .then(res => res.json())
    .then((json) => {
        JSON9=json
        Final_Json=Final_Json.concat(JSON9.results)
    });
    fetch(url10, settings)
    .then(res => res.json())
    .then((json) => {
        JSON10=json
        Final_Json=Final_Json.concat(JSON10.results)
    });
    fetch(url11, settings)
    .then(res => res.json())
    .then((json) => {
        JSON11=json
        Final_Json=Final_Json.concat(JSON11.results)
    });
    fetch(url12, settings)
    .then(res => res.json())
    .then((json) => {
        JSON12=json
        Final_Json=Final_Json.concat(JSON12.results)
    });
    fetch(url13, settings)
    .then(res => res.json())
    .then((json) => {
        JSON13=json
        Final_Json=Final_Json.concat(JSON13.results)
    });
    fetch(url14, settings)
    .then(res => res.json())
    .then((json) => {
        JSON14=json
        Final_Json=Final_Json.concat(JSON14.results)
        
    });
    fs.readFile('location.json', (err, data) => {
        if (err) throw err;
        locData = JSON.parse(data);
    });

    fetch(urlWeather, settings)
    .then(res => res.json())
    .then((json) => {
        JSONWeather=json
    });

exports.getData = async (req, res) => {
    const {
        jwt
    } = req.body;

    User.findOne({ 'Session': jwt },async function (err, customer) {
        if (err) {
            console.log('error', 'User Creation failed : ', err.toString());
            return res.send({ success: false, message: 'Something bad happend, please try again' });
        }
        else if (customer == null) {
            return res.json({success:false,message:'Please Loging again. Unable to identify you',intent:"NONE"}) 
        } 
        else {

            if(JSONWeather.weather[0].id<700){
                let movie=customer.Movie;           // XYZ?movie=${array.join(",")}
                let id=[]
                moviesJson=[]
                let count=0;
                movie.forEach(element => {
                    JSONX.genres.forEach(x=>{
                        if(x.name.toUpperCase()==element.toUpperCase())
                        {
                            let temp=Final_Json.filter((movies)=> movies.genre_ids.includes(x.id))
                            moviesJson.push(temp)
                            count+=temp.length
                        }
                    })
                });
                return res.json({
                    success:false,
                    message: `Looks like weather is not good outside. I would suggest you to be at home and watch some movies. Here are ${count} movies.`,
                    data:moviesJson
                });
            }
            else if(JSONWeather.weather[0].id>=700 && JSONWeather.weather[0].id<=800){
                newLoc=[]
                newLoc=locData.filter((data)=> Math.abs((Math.abs(data.Longitude) -Math.abs(customer.Location.lng))*1000)<50 && Math.abs((Math.abs(data.Latitude) -Math.abs(customer.Location.lat))*1000)<50)
                return res.json({
                    success:true,
                    message: `Weather is good outside. It's sunny. There are ${newLoc.length} places near your location. You can visit any of them.`,
                    data:newLoc
                });
            }
            else if(JSONWeather.weather[0].id>800){
                newLoc=[]
                newLoc=locData.filter((data)=> Math.abs((Math.abs(data.Longitude) -Math.abs(customer.Location.lng))*1000)<50 && Math.abs((Math.abs(data.Latitude) -Math.abs(customer.Location.lat))*1000)<50)
                return res.json({
                    success:true,
                    message: `Weather is good outside. It's cloudy and sunny both together. There are ${newLoc.length} places near your location. You can visit any of them.`,
                    data:newLoc
                });
            }
            
        }
    });
  };

  