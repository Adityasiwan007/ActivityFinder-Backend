const fetch = require('node-fetch');

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
let url13= "https://api.themoviedb.org/3/discover/movie?api_key=88293050a56889ca23c23db2288ce8d5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=12&genre=Action";
let url14 = "https://api.themoviedb.org/3/discover/movie?api_key=88293050a56889ca23c23db2288ce8d5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=13&genre=Action";




let settings = { method: "Get" };
let JSON,JSON2,JSON3,JSON4,JSON5,JSON6,JSON7,JSON8,JSON9,JSON10,JSON11,JSON12,JSON13,JSON14

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

    fetch(url3, settings)
    .then(res => res.json())
    .then((json) => {
        JSON3=json
    });

    fetch(url4, settings)
    .then(res => res.json())
    .then((json) => {
        JSON4=json
    });

    fetch(url5, settings)
    .then(res => res.json())
    .then((json) => {
        JSON5=json
    });

    fetch(url6, settings)
    .then(res => res.json())
    .then((json) => {
        JSON6=json
    });

    fetch(url7, settings)
    .then(res => res.json())
    .then((json) => {
        JSON7=json
    });
    fetch(url8, settings)
    .then(res => res.json())
    .then((json) => {
        JSON8=json
    });
    fetch(url9, settings)
    .then(res => res.json())
    .then((json) => {
        JSON9=json
    });
    fetch(url10, settings)
    .then(res => res.json())
    .then((json) => {
        JSON10=json
    });
    fetch(url11, settings)
    .then(res => res.json())
    .then((json) => {
        JSON11=json
    });
    fetch(url12, settings)
    .then(res => res.json())
    .then((json) => {
        JSON12=json
    });
    fetch(url13, settings)
    .then(res => res.json())
    .then((json) => {
        JSON13=json
    });
    fetch(url14, settings)
    .then(res => res.json())
    .then((json) => {
        JSON14=json
    });

    

exports.getData = async (req, res, next) => {
    let Final_Json=JSON2.results.concat(JSON3.results,JSON4.results,JSON5.results,JSON6.results,JSON7.results,JSON8.results,JSON9.results,JSON10.results,JSON11.results,JSON12.results,JSON13.results,JSON14.results)
    let movie=req.query.movie
    if(movie==null)
    {
        return res.json({
            success:false,
            message: "Please specify the movie subcategories like 'localhostxyz/moviedata?movie=action,drama' "
        });
    }
    if(movie.toUpperCase().includes('ALL'))
    {
        return res.json({
            success:true,
            message: `Showing ${Final_Json.length} movies`,
            data:Final_Json
        });
    }
    movie=movie.split(",");           // XYZ?movie=${array.join(",")}
    let id=[]
    moviesJson=[]

    movie.forEach(element => {
        JSON.genres.forEach(x=>{
            if(x.name.toUpperCase()==element.toUpperCase())
            {
                let temp=Final_Json.filter((movies)=> movies.genre_ids.includes(x.id))
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
        message: `Showing ${moviesJson.length} movies`,
        data:moviesJson
    });
  };
