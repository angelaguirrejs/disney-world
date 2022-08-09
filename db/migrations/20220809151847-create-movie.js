'use strict';

const { MOVIE_TABLE, MovieSchema } = require('../models/movie.model');

module.exports = {
    async up(queryInterface) {
        await queryInterface.createTable(MOVIE_TABLE, MovieSchema);
    },

    async down(queryInterface) {
        await queryInterface.dropTable(MOVIE_TABLE);
    }
};
