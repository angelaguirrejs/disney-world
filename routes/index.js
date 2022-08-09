const express = require('express');

const charactersRouter = require('./characters.router');
const moviesRouter = require('./movies.router');

function routerApi(app) {
    app.use('/characters', charactersRouter);
    app.use('/movies', moviesRouter);
}

module.exports = routerApi;
