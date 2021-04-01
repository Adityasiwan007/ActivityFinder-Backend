const fetch = require('node-fetch');

let url = "http://api.openweathermap.org/data/2.5/weather?q=Dublin,IE&appid=ef272ce5c18fd04114b31684fe8f50e1";
let settings = { method: "Get" };
let JSON
fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        JSON=json
    });


exports.getData = async (req, res) => {
    return res.json({
        success:true,
        message: "Showing Current Weather condition for Activity Finder",
        data:JSON
    });
  };

  