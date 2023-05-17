const express = require('express');
const movies = require('./routes/movies');

const app = express(); 
const port = 3009; 

app.use(express.json());

const validApiKey = "5";

const authenticateApiKey = (req, res, next) => {
  const apiKey = req.query.apiKey;

  if (!apiKey) {
    return res
      .status(401)
      .json({ message: "No movie for you, your apikey is missing" });
  }

  if (apiKey !== validApiKey) {
    return res
    .status(403)
    .json({ message: "Invalid API key" });
  }

  next();
};

app.use((req, res, next) => {
  authenticateApiKey(req, res, next);
});

app.get('/', (req, res) => {
    res.send('Im Bond, James Bond')
});

app.use('/movies', movies)

//portserver
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});