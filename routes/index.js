const express = require('express');

const charactersRouter = require('./characters.router');
const moviesRouter = require('./movies.router');
const genderRouter = require('./gender.router');
const characterMovieRouter = require('./character-movie.router');

function routerApi(app) {
    app.use('/characters', charactersRouter);
    app.use('/movies', moviesRouter);
    app.use('/genders', genderRouter);
    app.use('/characters-movies', characterMovieRouter);
}

module.exports = routerApi;
