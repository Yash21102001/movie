const mongoose = require('mongoose')

const moviesSchema = new mongoose.Schema({
    title : String,
    discription : String,
    relisDate : String,
    img : String,
    rating : String
})

const movieModel = mongoose.model('movieTbl',moviesSchema);

module.exports = movieModel;