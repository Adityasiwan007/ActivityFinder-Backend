const User = require('../models/user_structure');
let moviesController = require('../controllers/movieControllers')
let locationData = require('../location')
const fs = require('fs');
let locData,newLoc
fs.readFile('location.json', (err, data) => {
    if (err) throw err;
    locData = JSON.parse(data);
});

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
            newLoc=[]
            newLoc=locData.filter((data)=> Math.abs((Math.abs(data.Longitude) -Math.abs(customer.Location.lng))*1000)<50 && Math.abs((Math.abs(data.Latitude) -Math.abs(customer.Location.lat))*1000)<50)
            return res.json({
                success:true,
                message: `Showing ${newLoc.length} Location for `+customer.UserName,
                data:newLoc
            });
            
        }
    });
  };

  