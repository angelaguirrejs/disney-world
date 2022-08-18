const Joi = require('joi');

const name  = Joi.string().max(255);
const age = Joi.number().min(1);
const weight = Joi.number().min(0.1);
const history = Joi.string();


const createCharacterSchema = Joi.object({
    name: name.required(),
    age: age.required(),
    weight: weight.required(),
    history: history.required(),
});

const updateCharacterSchema = Joi.object({
    name: name.required(),
    age: age.required(),
    weight: weight.required(),
    history: history.required(),
});

const imageSchema = Joi.object({
    image: Joi.required()
});

module.exports = {
    createCharacterSchema,
    updateCharacterSchema,
    imageSchema
};
