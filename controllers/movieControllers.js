const fetch = require('node-fetch');

let url = "https://api.themoviedb.org/3/genre/movie/list?api_key=88293050a56889ca23c23db2288ce8d5";
let url2 = "https://api.themoviedb.org/3/discover/movie?api_key=88293050a56889ca23c23db2288ce8d5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&genre=Action";
let settings = { method: "Get" };
let JSON,JSON2

fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        JSON=json
    });

    fetch(url2, settings)
    .then(res => res.json())
    .then((json) => {
        JSON2=json
    });


exports.getData = async (req, res, next) => {
    let movie=req.query.movie
    movie=movie.split(",");           // XYZ?movie=${array.join(",")}
    let id=[]
    moviesJson=[]

    movie.forEach(element => {
        JSON.genres.forEach(x=>{
            if(x.name.toUpperCase()==element.toUpperCase())
            {
                let temp=JSON2.results.filter((movies)=> movies.genre_ids.includes(x.id))
                moviesJson.push(temp[0])
            }
        })
    });

    if(moviesJson.length==0)
    {
        return res.json({
            success:false,
            message: "Not a proper name",
        });  
    }
    return res.json({
        success:true,
        message: "Showing movies",
        data:moviesJson
    });
  };
