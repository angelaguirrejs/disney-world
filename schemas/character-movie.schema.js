const Joi = require('joi');

const characterId = Joi.number().integer();
const movieId = Joi.number().integer();

const addCharacterMovieSchema = Joi.object({
    characterId: characterId.required(),
    movieId: movieId.required(),
});

const updateCharacterMovieSchema = Joi.object({
    characterId: characterId.required(),
    movieId: movieId.required(),
});

module.exports = {
    addCharacterMovieSchema,
    updateCharacterMovieSchema
}
