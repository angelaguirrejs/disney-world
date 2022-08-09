const express = require('express');

const charactersRouter = require('./characters.router');
const moviesRouter = require('./movies.router');
const genderRouter = require('./gender.router');

function routerApi(app) {
    app.use('/characters', charactersRouter);
    app.use('/movies', moviesRouter);
    app.use('/genders', genderRouter);
}

module.exports = routerApi;
