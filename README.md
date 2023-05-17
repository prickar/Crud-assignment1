# API information
This project is a project that handles a movie array that you can handle in the program Postman. <br>
This project is written in Node.js and is using the server Express.js

## How to run it > installation 
1. If you dont have Node.js installed, install it to this project so you can use it. 
2. When you have it installed, run the command in the terminal > `npm install`. 
3. When you have all the npm packages down, you have to run the command > `npm run dev`

### How to use and install Postman 
1. Now when we have the project down we should download the program Postman > `https://www.postman.com/downloads/ `
2. Open the program and start a new "Collection"
3. For every endpoint i soon will explain you have to start up a new "Request" in your collection. 
4. In the URL section you always start with the host you are doing your endpoints from, ex. this project use `http://localhost:3009` in the beginning and later on add the URL thats requested in all the endpoint i will explain later on.
5. For the endpoints POST and PUT you have to go to the `body` section in your request and choose `raw` and `JSON` as the format. 

#### API key
1. This project have a Api key connected to iself, so when you start using endpoints you have to add the apiKey in the end of the URL ex. `http://localhost:3009/movies/tt0284083?apiKey=5`


# LETS START DOING SOME ENDPOINTS

### To GET all the movie 
Method: `GET`<br>
URL: `/movies`<br>
**When you run this enpoint in Postman you will se a list for all the movies that exist in the mockdata thats connected for this project**

### GET a specific movie based on their ID 
Method: `GET`<br>
URL: `/movies/:id`<br>
**When you run this endpoint and choose a specific ID number, you will find the ID number in the movies list beside the imdbID section, take that ID number and run the endpoint**

### POST up a new movie 
Method: `POST` <br>
URL: `/movies` <br>
Body:`{ "movie": {"Title": "Movie title", "Year": "A numbered year", "Released": "A numbered release date", "Genre": "Movie genre"}}` <br>
**Like a explained before in the installtion part for `Postman` this is the POST endpoint, so here you have to add the information you want to `POST` in the `Body` section in `Postman`, `!OBS!` here you have to make sure that the year and released part is in number or it will not be accepted in the request**
  
### PUT in information in a existing ID > update the ID 
Method: `PUT` <br>
URL: `/movies/:id`<br>
Body:`{ "movie": {"Title": "Movie title", "Year": "A numbered year", "Released": "A numbered release date", "Genre": "Movie genre"}}` <br>
**Like in `GET` you find have to use a ID number from imdbID for this endpoint, and as in `POST` if you going to update year and released you have to use number, play around and change and se on the movie list how the movie have changed its information**

### DELETE a movie based on their ID
Method: `DELETE` <br>
URL: `/movies/:id` <br>
**At this endpoint you can delete a movie and to do that you use one of the imdbID and put it in the URL just like in `GET` and the movie should be deleted**



