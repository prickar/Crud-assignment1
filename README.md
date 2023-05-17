# API information
This project is a project that handles a movie array that you can handle in the program Postman. <br>
This project is written in Node.js and is using the server Express.js

## How to run it > installation 
1. If you dont have Node.js installed, install it to this project so you can use it. 
2. When you have it installed, run the command in the terminal > `npm install`. 
3. When you have all the npm packages down, you have to run the command > `npm run dev`

### How to use and install Postman 
 **Once you have downloaded the project, you can start using Postman to interact with its endpoints. Follow these steps:**

1. Download Postman from (https://www.postman.com/downloads/).
2. Open Postman and create a new collection.
3. For each endpoint in the project, create a new request within your collection.
4. In the URL field of the request, start with the host from which you are serving your endpoints. For example, this project uses `http://localhost:3009` as the host. Then add the specific path for the endpoint you want to use, which I will explain later on.
5. If you are using a POST or PUT request, go to the `Body` section of your request and choose `raw` as the input type. Then select `JSON` as the format.

#### API key
1. This project is connected to an API key, which means that you need to include the apiKey in the URL when using any of its endpoints. For example, if you want to access the `tt0284083` movie endpoint, you would use the following format: `http://localhost:3009/movies/tt0284083?apiKey=5`.


# LETS START DOING SOME ENDPOINTS

### To GET all the movie 
Method: `GET`<br>
URL: `/movies`<br>
**When you run this endpoint in Postman, you will see a list of all the movies that exist in the mock data connected to this project.**

### GET a specific movie based on their ID 
Method: `GET`<br>
URL: `/movies/:id`<br>
**When you run this endpoint and choose a specific ID number, you will find the corresponding IMDb ID in the movies list next to the imdbID section. Take that IMDb ID and use it as the input for another request to the endpoint.**

### POST up a new movie 
Method: `POST` <br>
URL: `/movies` <br>
Body:`{ "movie": {"Title": "Movie title", "Year": "A numbered year", "Released": "A numbered release date", "Genre": "Movie genre"}}` <br>
**As mentioned in the installation instructions for Postman, this is a POST endpoint. To use it, you need to provide the information you want to POST in the Body section of your request in Postman. Be aware that for the year and released fields, you must use numerical values - otherwise, the request will not be accepted.**
  
### PUT in information in a existing ID > update the ID 
Method: `PUT` <br>
URL: `/movies/:id`<br>
Body:`{ "movie": {"Title": "Movie title", "Year": "A numbered year", "Released": "A numbered release date", "Genre": "Movie genre"}}` <br>
**Similar to the GET endpoint, the ID number from imdbID must be used to access this endpoint. Likewise with POST, if you want to update the year and released fields, numerical values must be used. Feel free to experiment by changing these fields and observing how the movie list reflects the updated information**

### DELETE a movie based on their ID
Method: `DELETE` <br>
URL: `/movies/:id` <br>
**This endpoint allows you to delete a movie by specifying its imdbID in the URL, similar to how it is done in the GET endpoint. Once the correct imdbID is included in the URL, the movie associated with that ID will be deleted.**



