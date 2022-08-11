const Joi = require('joi');

const name = Joi.string();
const email = Joi.string().email();
const password = Joi.string().min(8);

const registerUserSchema = Joi.object({
    name:  name.required(),
    email: email.required(),
    password: password.required()
});

const loginUserSchema = Joi.object({
    email: email.required(),
    password: password.required()
});

module.exports = {
    registerUserSchema,
    loginUserSchema
}
