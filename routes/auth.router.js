const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const validatorHandler = require('../middlewares/validator.handler');
const { registerUserSchema } = require('../schemas/user.schema');
const userService = require('../services/user.service');

const config = require('../config/config');

const router = express.Router();
const service = new userService();

router.post('/login',
    passport.authenticate('local', { session: false }),
    async (req, res, next) => {
        try {

            const user = req.user;

            const payload =  {
                sub: user.id
            }

            const token = jwt.sign(payload, config.jwtSecret);
            res.json({
                user,
                token
            });

        } catch (error) {
            next(error);
        }
    }
);

router.post('/register',
    validatorHandler(registerUserSchema, 'body'),
    async(req, res, next) => {
        try {
            const user = await service.create(req.body);

            const payload =  {
                sub: user.id
            }

            const token = jwt.sign(payload, config.jwtSecret);

            res.json({
                user,
                token
            });

        } catch (error) {
            next(error);
        }
    }
);

module.exports = router;
