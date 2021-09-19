const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {

  const query = `SELECT * FROM genres ORDER BY "name" ASC`;
  pool.query(query)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all genres', err);
      res.sendStatus(500)
    })

});

router.get('/all', (req, res) => {
  const query = `SELECT movies.id, movies.title, movies.poster, movies.description, array_agg(name) as genres FROM movies
JOIN movies_genres ON movies_genres.movie_id = movies.id
JOIN genres on movies_genres.genre_id = genres.id
GROUP BY movies.id, movies.title, movies.poster, movies.description;`;
  pool.query(query)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all MOVIES/GENRES', err);
      res.sendStatus(500)
    })
});





module.exports = router;