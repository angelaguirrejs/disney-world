const Joi = require('joi');

const image = Joi.any();
const name  = Joi.string().max(255);
const age = Joi.number().min(1);
const weight = Joi.number().min(0.1);
const history = Joi.string();


const createCharacterSchema = Joi.object({
    image: image.required(),
    name: name.required(),
    age: age.required(),
    weight: weight.required(),
    history: history.required(),
});

const updateCharacterSchema = Joi.object({
    image: image.required(),
    name: name.required(),
    age: age.required(),
    weight: weight.required(),
    history: history.required(),
});

module.exports = {
    createCharacterSchema,
    updateCharacterSchema,
};
