'use strict';

const { CHARACTER_MOVIE_TABLE, CharacterMovieSchema } = require('../models/character-movie.model');

module.exports = {
    async up(queryInterface) {
        await queryInterface.createTable(CHARACTER_MOVIE_TABLE, CharacterMovieSchema);
    },

    async down(queryInterface) {
        await queryInterface.dropTable(CHARACTER_MOVIE_TABLE);
    }
};
