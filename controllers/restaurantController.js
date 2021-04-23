const User = require('../models/user_structure');
let moviesController = require('../controllers/movieControllers')
const fetch = require('node-fetch');
let settings1 = { method: "Post" };
let JSON,JSON1,JSON2

exports.getData = async (req, res) => {
    const {
        jwt
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
            
            try {
                let claire1="https://activityfinder-re.herokuapp.com/restaurant?text="+customer.Food;
                await fetch(claire1, settings1)
                .then(res => res.json())
                .then((json) => {
                    JSON2=json
                });
                return res.json({
                    success:true,
                    data: JSON2.Rating
                });
            } 

            catch (err) {
                return res.json({success:false,message:'Problem with 2nd level of connection',intent:"NONE"})
                        
            }
            
        }
    });
  };

  