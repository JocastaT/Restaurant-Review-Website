"use strict";

const MoviesDB = require('../models/MoviesDB');

var moviesDB = new MoviesDB();

function getAllMovies(request, respond) {
    //Call the getAllMovies() function in the MoviesDB class.
    moviesDB.getAllMovies(function(error, result) {
        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }
    });
}

module.exports = { getAllMovies };