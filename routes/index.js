const passport = require('passport');

const charactersRouter = require('./characters.router');
const moviesRouter = require('./movies.router');
const genderRouter = require('./gender.router');
const characterMovieRouter = require('./character-movie.router');
const authRouter = require('./auth.router');

const jwtAuth = passport.authenticate('jwt', { session: false })

function routerApi(app) {
    app.use('/characters', jwtAuth, charactersRouter);
    app.use('/movies', jwtAuth, moviesRouter);
    app.use('/genders', jwtAuth, genderRouter);
    app.use('/characters-movies', jwtAuth, characterMovieRouter);
    app.use('/auth', authRouter);
}

module.exports = routerApi;
