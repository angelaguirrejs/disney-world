'use strict';
const { GENDER_TABLE, GenderSchema } = require('../models/gender.model');

module.exports = {
    async up(queryInterface) {
        await queryInterface.createTable(GENDER_TABLE, GenderSchema);
    },

    async down(queryInterface) {
        await queryInterface.dropTable(GENDER_TABLE);
    }
};
