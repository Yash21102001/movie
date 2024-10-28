const express = require('express');
const controllers = require('../controllers/index')
const router =  express.Router();

router.get('/', controllers.indexpage)
router.get('/addMovie', controllers.addMovie)
router.post('/addMovieData', controllers.createData)
router.get('/delete_movie/:movieId', controllers.deleteData)
router.get('/edit_movie/:movieId', controllers.getmovieData)
router.post('/updateMovieData/:movieId', controllers.updateData)

module.exports = router