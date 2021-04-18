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


            // if(text.toUpperCase().includes("MOVIE")){
            //     return res.json({
            //         success:true,
            //         message: `Hi ${customer.UserName}, What kind of movies you want?`,
            //         intent: "Movie Query"
            //     }) 

            // }

            // if(text.toUpperCase().includes("HI") || text.toUpperCase().includes("HELLO") || text.toUpperCase().includes("HEY") || text.toUpperCase().includes("MY NAME") )
            // {
            //     return res.json({
            //         success:true,
            //         message: `Hi ${customer.UserName}, How can I help you?`,
            //         intent:"Greet"
            //     }) 
            // }

            if(text.toUpperCase().includes("BYE") || text.toUpperCase().includes("SEE YOU") || text.toUpperCase().includes("GOOD BYE") || text.toUpperCase().includes("LATER") )
            {
                return res.json({
                    success:true,
                    message: `Bye Bye ${customer.UserName}, See You soon.`,
                    intent:"Greet"
                }) 
            }
            if(text.toUpperCase().includes("THANK")){
                return res.json({
                    success:true,
                    message: `You are always welcome ${customer.UserName}.`,
                    intent: "Movie Query"
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
                    customer.Movie.splice(0, 1, genrs[0]);;
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

  