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
 

# ------------------------------------------------------


### For Git: 

https://github.com/Adityasiwan007/ActivityFinder-Backend.git

### For conneting Remote MongoDB Compass: 

mongodb+srv://Aditya:<password>@cluster0.ffb6f.mongodb.net/test






# APIS: 

 To check the sever is live or not: https://activityfinder1.herokuapp.com

## For login 

 Use this Api: https://activityfinder1.herokuapp.com/login 

 Along with JSON 

 {
 
    "Name":"Aditya",
    
    "Password":"adi"
    
 } 
