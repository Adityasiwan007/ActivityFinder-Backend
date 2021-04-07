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

 Use this Api: http://localhost:8004/login 

 Along with JSON 

 {
 
    "Name":"Aditya",
    
    "Password":"adi"
    
 } 

 ## For Weather data 

 Use this Api: http://localhost:8004/weatherdata 


 ## For Movie data 

 Use this Api: http://localhost:8004/moviedata?movie=Horror,Comedy     

 You can put multiple arrays for the movie type like horror,comdey,Action,Adventure,Animation,Crime,Documentary,Drama,Family,Fantasy,History,Horror,Music,Mystery,Romance,Science Fiction,TV Movie,Thriller,War,Western


 ## For All Movies data 

 Use this Api: http://localhost:8004/moviedata?movie=all  


 ## For Chatting in chatbot

 Use this Api: http://localhost:8004/moviedata?chatbot

 Along with JSON 

 {
 
    "jwt":"eiwufgewyugewfquwryebfqerouybfuyrebfrew",   //You will get the JWT Token every time while doing login and use that Token every time while chatting.
    
    "text":"Hi, I am looking for movies"    // Send the text from user to backend. 
    
 } 

# ----------------------------------------------------------------------------------------------------------------

## Script:
User: Hi Bot,
Bot: Hi Aditya, How can I help you? 
User: I am looking for movies.
Bot: Hi Aditya, What kind of movies you want?
User: Show me some action and horror movies.
Bot: Showing 20 movies.  {* Array of movies with it's description *}
User: Cool Thanks.
Bot: You are always welcome Aditya.
User: Bye.
Bot: Bye Bye Aditya, See You soon.
# ----------------------------------------------------------------------------------------------------------------


### For Git: 

https://github.com/Adityasiwan007/ActivityFinder-Backend.git

### For conneting Remote MongoDB Compass: 

mongodb+srv://Aditya:<password>@cluster0.ffb6f.mongodb.net/test




