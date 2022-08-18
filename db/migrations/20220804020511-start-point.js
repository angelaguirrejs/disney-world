'use strict';

const { GENDER_TABLE, GenderSchema } = require('../models/gender.model');
const { MOVIE_TABLE, MovieSchema } = require('../models/movie.model');
const { CHARACTER_TABLE, CharacterSchema } = require('../models/character.model');


module.exports = {
    async up(queryInterface) {
        await queryInterface.createTable(GENDER_TABLE, GenderSchema);
        await queryInterface.createTable(MOVIE_TABLE, MovieSchema);
        await queryInterface.createTable(CHARACTER_TABLE, CharacterSchema);
    },

    async down(queryInterface) {
        await queryInterface.dropTable(GENDER_TABLE);
        await queryInterface.dropTable(MOVIE_TABLE);
        await queryInterface.dropTable(CHARACTER_TABLE);
    }
};
