const User = require('../models/user_structure');
let moviesController = require('../controllers/movieControllers')
const fetch = require('node-fetch');
let url = "https://api.themoviedb.org/3/genre/movie/list?api_key=88293050a56889ca23c23db2288ce8d5";
let mike="https://mikeldinew.herokuapp.com/chatbot?";
let claire="https://activityfinder-re.herokuapp.com/similarMovie?"

let settings = { method: "Get" };
let settings1 = { method: "Post" };
let JSON,JSON1,JSON2
let state_count=0;
let movie="";
let final_movies=[]
let genrs=[];
let response_text=""
let response_text_rest=""
let restaurant_flag="false";
fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        JSON=json
    });

exports.getChat = async (req, res) => {
    const {
        jwt, text,
    } = req.body;

    User.findOne({ 'Session': jwt },async function (err, customer) {
        if (err) {
            console.log('error', 'User Creation failed : ', err.toString());
            res.send({ success: false, message: 'Something bad happend, please try again' });
            return;
        }
        else if (customer == null) {
            return res.json({success:false,message:'Please Loging again. Unable to identify you',intent:"NONE"}) 
        } 
        else {
            
            // gens=[]
            // JSON.genres.forEach(x=>{
            //     if(text.toUpperCase().includes(x.name.toUpperCase()))
            //     {
            //         gens.push(x.name.toUpperCase())
            //     }
            // })
            
            // if(gens.length>0){
            //     return res.json(await moviesController.getDataLocal(gens.join(","))) 
            // }


            
            if(restaurant_flag=="true")
            {
                response_text_rest=""
                restaurant_flag="false"

                try {
                        let claire1="https://activityfinder-re.herokuapp.com/restaurant?text="+text;
                        await fetch(claire1, settings1)
                        .then(res => res.json())
                        .then((json) => {
                            JSON2=json
                        });
                    } 

            catch (err) {
                           
            }

            
            customer.Food=JSON2.keyword;
            await customer.save()

            var result = JSON2.Rating;
            response_text_rest="These are some of the best restaurants with rating I would recommend for "+JSON2.keyword+" : "

            for(var key in result){ 
                response_text_rest=response_text_rest+key+ " with rating "+(result[key]*10).toFixed(2)+", ";
            }
            response_text_rest=response_text_rest.substring(0, response_text_rest.length - 2)+".";
                return res.json({
                    success:true,
                    message: response_text_rest,
                    intent:"food Query"
                }) 


            }

            if(text.toUpperCase().includes("HI") ||text.toUpperCase().includes("BORED")|| text.toUpperCase().includes("HELLO") || text.toUpperCase().includes("HEY") || text.toUpperCase().includes("MY NAME") )
            {
                if(text.toUpperCase().includes("RESTAURANT") || text.toUpperCase().includes("FOOD") || text.toUpperCase().includes("HOTEL") || text.toUpperCase().includes("HUNGRY") || text.toUpperCase().includes("STARVING")){
                    restaurant_flag="true";
                    return res.json({  
                        success:true,
                        message: `Hi ${customer.UserName}, What kind of food you want?`,
                        intent: "Restaurant Query"
                    }) 
                }
                else if(text.toUpperCase().includes("MOVIE")){

                }
                else{
                    return res.json({
                        success:true,
                        message: `Hi ${customer.UserName}, What would you like to do today? Movie or Restaurant!!!!`,
                        intent:"Greet"
                    }) 
                }
                
            }

            if(text.toUpperCase().includes("BYE") || text.toUpperCase().includes("SEE YOU") || text.toUpperCase().includes("GOOD BYE") || text.toUpperCase().includes("LATER") )
            {
                return res.json({
                    success:true,
                    message: `Bye Bye ${customer.UserName}, See You soon.`,
                    intent:"BYE Query"
                }) 
            }
            if(text.toUpperCase().includes("THANK")){
                return res.json({
                    success:true,
                    message: `You are always welcome ${customer.UserName}.`,
                    intent: "Thanks Query"
                }) 

            }

            if(text.toUpperCase().includes("STARVING")||text.toUpperCase().includes("HUNGRY")||text.toUpperCase().includes("RESTAURANT") || text.toUpperCase().includes("FOOD") || text.toUpperCase().includes("HOTEL")){
                restaurant_flag="true";
                return res.json({
                    success:true,
                    message: `Hi ${customer.UserName}, What kind of food you want?`,
                    intent: "Restaurant Query"
                }) 

            }


            

    try {
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
          }

            let mike1=mike+"text="+text+"&state="+state_count;
            await fetch(mike1, settings)
                .then(res => res.json())
                .then((json) => {
                    JSON1=json
                });
                

                state_count=(state_count>=2)?0:JSON1.state;
                movie=(JSON1.state==2)?JSON1.similar_movie:movie;
                movie=(JSON1.state==1)?"":movie;
                console.log(movie.length," - ",JSON1.genres.length)
                genrs=JSON1.genres
                response_text=JSON1.response
            if(movie.length!= 0 && JSON1.state==3)
            {
                final_movies=[]
                let claire1=claire+"title="+movie;
                await fetch(claire1, settings1)
                .then(res => res.json())
                .then((json) => {
                    JSON1=json
                });
                if(genrs.length!=0){
                    customer.Movie.splice(0, 1, genrs[0]);
                    await customer.save()

                    JSON1.content.content.forEach(element => {
                        genrs.forEach(x=>{
                            if(element.genres.includes(capitalizeFirstLetter(x)))
                            {
                                final_movies.push(element.movie)
                            }
                        })
                    });
                    final_movies=Array.from(new Set(final_movies))
                }
                else{
                    JSON1.content.content.forEach(element => {
                            final_movies.push(element.movie)
                    });
                }
                
                response_text=(final_movies!=0)?"There are the movies you might like: "+final_movies:"Not able to find movies of your choice."
                
            }
            if(movie.length== 0 && JSON1.state==3)
            {
                response_text="Not able to find movies of your choice."
            }
            

        } 
        catch (err) {
                       
        }

                return res.json({
                    success:true,
                    message: response_text,
                    intent:"NONE"
                })
            
        }
    });
  };

  