const User = require('../models/user_structure');
let moviesController = require('../controllers/movieControllers')
const fetch = require('node-fetch');
let url = "https://api.themoviedb.org/3/genre/movie/list?api_key=88293050a56889ca23c23db2288ce8d5";

let settings = { method: "Get" };
let JSON

fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        JSON=json
    });

exports.getChat = async (req, res) => {
    const {
        jwt, text,
    } = req.body;
    // let pro = `Retrun Name: `+Name+' ID: '+ID;
    // res.send(pro);


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
            
            gens=[]
            JSON.genres.forEach(x=>{
                if(text.toUpperCase().includes(x.name.toUpperCase()))
                {
                    gens.push(x.name.toUpperCase())
                }
            })
            
            if(gens.length>0){
                return res.json(await moviesController.getDataLocal(gens.join(","))) 
                
            }


            if(text.toUpperCase().includes("MOVIE")){
                return res.json({
                    success:true,
                    message: `Hi ${customer.UserName}, What kind of movies you want?`,
                    intent: "Movie Query"
                }) 

            }

            if(text.toUpperCase().includes("HI") || text.toUpperCase().includes("HELLO") || text.toUpperCase().includes("HEY") || text.toUpperCase().includes("MY NAME") )
            {
                return res.json({
                    success:true,
                    message: `Hi ${customer.UserName}, How can I help you?`,
                    intent:"Greet"
                }) 
            }

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

                return res.json({
                    success:true,
                    message: `Hi ${customer.UserName}, I am not sure what the F.. are saying?`,
                    intent:"NONE"
                })
            
        }
    });
  };

  