const express = require("express");
const mockData = require("../mockData");
const router = express.Router();

let movies = mockData;

//find all movies GET
router.get("/", (req, res) => {
	res.json(movies);
});

//find a movie based on their Id GET
router.get("/:id", (req, res) => {
	const imdbID = req.params.id;
	const movie = movies.find((film) => film.imdbID === imdbID);

	if (!movie) {
		return res.status(404).json({
			message: "No movie with this ID exists!",
		});
	}

	res.json(movie);
});

//creates a new Id for new added movies

let nextId = 2211;

//Add a new movie POST
router.post("/", (req, res) => {
	const movie = req.body.movie;

	if (!movie.Title || !movie.Year || !movie.Released || !movie.Genre) {
		return res
			.status(400)
			.json({
				message: "You need to add title, year, release date and genre",
			});
	}

	if (isNaN(movie.Year) || isNaN(movie.Released)) {
		return res
			.status(400)
			.json({ message: "The inputs have to be numbers" });
	}

	const addMovie = {
		...movie,
		imdbID: nextId.toString()
	};

	nextId++;

	movies.push(addMovie);
	res.json(addMovie);
});

//Update a movie based on their Id

router.put("/:id", (req, res) => {
	const imdbID = req.params.id;
	const movie = req.body.movie;

	const index = movies.findIndex((film) => film.imdbID === imdbID);

	if (!movie.Title || !movie.Year || !movie.Released || !movie.Genre) {
		return res
			.status(400)
			.json({
				message: "You need to add title, year, release date and genre",
			});
	}

	if (isNaN(movie.Year) || isNaN(movie.Released)) {
		return res
			.status(400)
			.json({ message: "The inputs have to be numbers" });
	}

	if (index === -1) {
		return res
			.status(404)
			.json({ mesage: " No id match any existing movie" });
	}

	const updatedmovie = { ...movies[index], ...movie };
	movies[index] = updatedmovie;

	res.json(updatedmovie);
});

//Delete a movie from the list

router.delete("/:id", (req, res) => {
	const imdbID = req.params.id;

	const movie = movies.find((film) => film.imdbID === imdbID);

	if (!movie) {
		return res.status(404).json({ message: "No movie with this Id exist" });
	}

	const newData = movies.filter((film) => film.imdbID !== imdbID);
	movies = newData;

	res.json({ message: "The movie ' " + movie.Title + "' have been deleted" });
});

module.exports = router;
