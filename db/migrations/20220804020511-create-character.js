'use strict';

const { CHARACTER_TABLE, CharacterSchema } = require('../models/character.model');

module.exports = {
    async up(queryInterface) {
        await queryInterface.createTable(CHARACTER_TABLE, CharacterSchema);
    },

    async down(queryInterface) {
        await queryInterface.dropTable(CHARACTER_TABLE);
    }
};
