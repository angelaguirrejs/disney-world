const { Character, CharacterSchema } = require('./character.model');
const { Movie, MovieSchema } = require('./movie.model');
const { Gender, GenderSchema } = require('./gender.model');

function setupModels(sequelize) {
    Character.init(CharacterSchema, Character.config(sequelize));
    Movie.init(MovieSchema, Movie.config(sequelize));
    Gender.init(GenderSchema, Gender.config(sequelize));
}

module.exports = setupModels;
