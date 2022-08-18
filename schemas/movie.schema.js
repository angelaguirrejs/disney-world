const Joi = require('joi');

const image = Joi.any();
const title = Joi.string();
const grade = Joi.number().integer().min(1).max(5);
const genderId = Joi.number().integer();

const createMovieSchema = Joi.object({
    image: image.required(),
    title: title.required(),
    grade: grade.required(),
    genderId: genderId.required()
});

const updateMovieSchema = Joi.object({
    image: image.required(),
    title: title.required(),
    grade: grade.required(),
    genderId: genderId.required()
});

module.exports = {
    createMovieSchema,
    updateMovieSchema
}
