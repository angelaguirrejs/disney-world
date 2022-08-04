const express = require('express');

const charactersRouter = require('./characters.router');

function routerApi(app) {
    app.use('/characters', charactersRouter);
}

module.exports = routerApi;
