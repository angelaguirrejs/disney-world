const boom  = require('@hapi/boom');

function validatorHandler(schema, property) {
    return (req, res, next) => {

        const data = req[property];

        if(data == null && property === 'files') {
            next(boom.badRequest('No image was sent'));
        }

        const { error }  = schema.validate(data, { abortEarly: false });

        if(error) {
            next(boom.badRequest(error));
        }

        next();
    }
}

module.exports = validatorHandler;
