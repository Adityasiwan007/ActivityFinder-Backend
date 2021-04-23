# Prerequisite:
  npm, mongoDB

# Steps:

For installing node Setup go to the folders using terminal:
then type:
  
  npm init
  
  npm install 
  
For installing express Setup:
 
  npm install express
  
For loding all the data in the Database for 1 time user
  
  node data_loader.js
  
After that you can use this code.. and Start the server by typing: npm start or node test.js

 

# APIS: 

 Open the brower and check the local host: http://localhost:8004/index.html 
 
 To check the sever is live or not: http://localhost:8004/checkLive

## For login 

 Use this Api Post Request: http://localhost:8004/login 

 Along with JSON 

 {
 
    "Name":"Aditya",
    
    "Password":"adi"
    
 } 

 ## For Weather data 

 Use this GET Api: http://localhost:8004/weatherdata 


 ## For Movie data 

 Use this POST Api: http://localhost:8004/moviedata   

Along with JSON 

{
  "jwt": "eiwufgewyugewfquwryebfqerouybfuyrebfrew",   //You will get the JWT Token every time while doing login and use that Token every time while chatting.
}

 You can put multiple arrays for the movie type like horror,comdey,Action,Adventure,Animation,Crime,Documentary,Drama,Family,Fantasy,History,Horror,Music,Mystery,Romance,Science Fiction,TV Movie,Thriller,War,Western

  ## For Restaurant data 

 Use this POST Api: http://localhost:8004/restaurantdata   

Along with JSON 

{
  "jwt": "eiwufgewyugewfquwryebfqerouybfuyrebfrew",   //You will get the JWT Token every time while doing login and use that Token every time while chatting.
}

You will get the best restaurant based on user's last searched food.


 ## For Chatting in chatbot

 Use this Api Post Request: http://localhost:8004/chatbot

 Along with JSON 

{
  "jwt": "eiwufgewyugewfquwryebfqerouybfuyrebfrew",   //You will get the JWT Token every time while doing login and use that Token every time while chatting.

  "text":"Hi, How are you?"
}

## For Location data 

Use this POST Api: http://localhost:8004/locationdata   

Along with JSON 

{
  "jwt": "eiwufgewyugewfquwryebfqerouybfuyrebfrew",   //You will get the JWT Token every time while doing login and use that Token every time while chatting.
}

You will get the nearest visiting places in the dublin based on user's loaction (Longitude, Latitude)

 
## For Final Recommnedation 

Use this POST Api: http://localhost:8004/recommendation

Along with JSON 

{
  "jwt": "eiwufgewyugewfquwryebfqerouybfuyrebfrew",   //You will get the JWT Token every time while doing login and use that Token every time while chatting.
}

Bot will give the response based on current weather, bot will suggest multiple movies of user's choice if its raining outside. Else bot will give nearest visiting (Attraction) places if current weather is sunny. 
# ----------------------------------------------------------------------------------------------------------------

## Script  for Restaurant Happy path:


User: Hi Bot,

Bot: Hi Aditya, What would you like to do today? Movie or Restaurant!!!! 

User: I am hungry.

Bot: Hi Aditya, What kind of food you want?

User: I want sushi.

Bot: These are some of the best restaurants with rating I would recommend for sushi : Blue Ginger Asian Fusion Bistro with rating 4.35, Mr Sushi with rating 5.95, Ronin Sushi with rating 5.29, Sushi.com with rating 5.95, Yoshi's Japanese Restaurant with rating 4.64.

User: Cool Thanks.

Bot: You are always welcome Aditya.

User: Bye.

Bot: Bye Bye Aditya, See You soon.

# ----------------------------------------------------------------------------------------------------------------

## Script for Movie Happy path:


User: Hi Bot,

Bot: Hi Aditya, What would you like to do today? Movie or Restaurant!!!! 

User: Suggest me some movies.

Bot: Give me the title of a movie the suggestion should be similar to, if you wish.

User: Toy Story.

Bot: Are there genres that you would be more interested in?\nWe have action, horror, drama, romance, comedy, thriller, documentary, adventure, fantasy, history, sci-fi.

User: comedy.

Bot: There are the movies you might like: Toy Story 2 (1999),Bug's Life, A (1998),Monsters, Inc. (2001),Foul Hunting (1947),The Fox and the Hound 2 (2006),Finding Nemo (2003),Lilo & Stitch 2: Stitch has a Glitch (2005),Big Hero 6 (2014),Ice Age (2002),Minions (2015),Brother Bear 2 (2006).

User: Cool thanks.

Bot: You are always welcome Aditya.

# ----------------------------------------------------------------------------------------------------------------


### For Git: 

https://github.com/Adityasiwan007/ActivityFinder-Backend.git

### For conneting Remote MongoDB Compass: 

mongodb+srv://Aditya:<password>@cluster0.ffb6f.mongodb.net/test




