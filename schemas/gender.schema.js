const Joi = require('joi');

const name = Joi.string();

const createGenderSchema = Joi.object({
    name: name.required(),
});

const updateGenderSchema = Joi.object({
    name: name.required(),
});

const imageSchema = Joi.object({
    image: Joi.required()
});

module.exports = {
    createGenderSchema,
    updateGenderSchema,
    imageSchema
}
