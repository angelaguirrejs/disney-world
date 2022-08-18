const { Model, DataTypes, Sequelize } = require('sequelize');

const { CHARACTER_TABLE } = require('./character.model');
const { MOVIE_TABLE } = require('./movie.model');

const CHARACTER_MOVIE_TABLE = 'characters_movies';

const CharacterMovieSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    characterId: {
        field: 'character_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: CHARACTER_TABLE,
            key: 'id',
        }
    },
    movieId: {
        field: 'movie_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model:MOVIE_TABLE,
            key: 'id'
        }
    }
}

class CharacterMovie extends Model {

    static associate() {

    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: CHARACTER_MOVIE_TABLE,
            modelName: 'CharacterMovie',
            timestamps: false
        }
    }

}


module.exports = { CHARACTER_MOVIE_TABLE, CharacterMovieSchema, CharacterMovie }
