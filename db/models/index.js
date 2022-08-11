const { Character, CharacterSchema } = require('./character.model');
const { Movie, MovieSchema } = require('./movie.model');
const { Gender, GenderSchema } = require('./gender.model');
const { CharacterMovie, CharacterMovieSchema } = require('./character-movie.model');
const { User, UserSchema } = require('./user.model');

function setupModels(sequelize) {
    Gender.init(GenderSchema, Gender.config(sequelize));
    Movie.init(MovieSchema, Movie.config(sequelize));
    Character.init(CharacterSchema, Character.config(sequelize));
    CharacterMovie.init(CharacterMovieSchema, CharacterMovie.config(sequelize));
    User.init(UserSchema, User.config(sequelize));

    Gender.associate(sequelize.models);
    Movie.associate(sequelize.models);
    Character.associate(sequelize.models);
}

module.exports = setupModels;
