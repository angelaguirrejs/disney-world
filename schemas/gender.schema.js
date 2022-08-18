const Joi = require('joi');

const name = Joi.string();
const image = Joi.any();

const createGenderSchema = Joi.object({
    name: name.required(),
    image: image.required(),
});

const updateGenderSchema = Joi.object({
    name: name.required(),
    image: image.required(),
});

module.exports = {
    createGenderSchema,
    updateGenderSchema
}
