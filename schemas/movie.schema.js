const Joi = require('joi');

const title = Joi.string();
const grade = Joi.number().integer().min(1).max(5);
const genderId = Joi.number().integer();

const createMovieSchema = Joi.object({
    title: title.required(),
    grade: grade.required(),
    genderId: genderId.required()
});

const updateMovieSchema = Joi.object({
    title: title.required(),
    grade: grade.required(),
    genderId: genderId.required()
});

const imageSchema = Joi.object({
    image: Joi.required()
});

module.exports = {
    createMovieSchema,
    updateMovieSchema,
    imageSchema
}
