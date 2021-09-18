const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// router.get('/', (req, res) => {
//   // Add query to get all genres
//   res.sendStatus(500)
// });

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




// router.get('/:id', (req, res) => {
//   const id = req.params.id;
//   const query = `SELECT * FROM "movies_genres"
//   JOIN "movies" ON "movies_genres"."movie_id" = "movies.id"
//   JOIN "genres" ON "movies_genres"."genre_id" = "genres.id" 
//   WHERE "movie_id"=$1`;
//   pool.query(query, [id])
//     .then(result => {
//       res.send(result.rows);
//     })
//     .catch(err => {
//       console.log('ERROR: Getting all genres', err);
//       res.sendStatus(500)
//     })

// });





module.exports = router;