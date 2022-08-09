const Joi = require('joi');

const image = Joi.any();
const title = Joi.string();
const grade = Joi.number().min(1).max(5);

const createMovieSchema = Joi.object({
    image: image.required(),
    title: title.required(),
    grade: grade.required(),
});

const updateMovieSchema = Joi.object({
    image: image.required(),
    title: title.required(),
    grade: grade.required(),
});

module.exports = {
    createMovieSchema,
    updateMovieSchema
}
