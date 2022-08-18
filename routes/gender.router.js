const path = require('path');
const fs = require('fs');

const express = require('express');
const boom = require('@hapi/boom');
const passport = require('passport');


const validationHandler = require('../middlewares/validator.handler');
const { createGenderSchema, updateGenderSchema, imageSchema } = require('../schemas/gender.schema');
const genderService = require('../services/gender.service');
const jwtAuth = passport.authenticate('jwt', { session: false });

const service = new genderService();
const router = express.Router();

router.get('/',
    jwtAuth,
    async (req, res) => {
        const genders = await service.find();
        res.status(200).json({ data: genders });
    }
);

router.get('/:id',
    jwtAuth,
    async (req, res, next) => {
        try {
            const gender = await service.findOne(req.params.id);
            res.status(200).json({ data: gender });
        } catch (error) {
            next(error);
        }
    }
);

router.get('/image/:fileName', (req, res, next) => {
    const pathImage = path.join(__dirname, '../uploads', '/genders/', req.params.fileName);

    if (!fs.existsSync(pathImage)) {
        next(boom.notFound('Image not found'));
    }

    res.sendFile(pathImage);
});

router.post('/',
    jwtAuth,
    validationHandler(createGenderSchema, 'body'),
    validationHandler(imageSchema, 'files'),
    async (req, res, next) => {
        try {
            const newGender = await service.create(req);
            res.status(201).json({ data: newGender });
        } catch (error) {
            next(error);
        }
    }
);

router.put('/:id',
    jwtAuth,
    validationHandler(updateGenderSchema, 'body'),
    async (req, res, next) => {
        try {
            const updatedGender = await service.update(req.params.id, req);
            res.status(200).json({ data: updatedGender });
        } catch (error) {
            next(error);
        }
    }
);

router.delete('/:id',
    jwtAuth,
    async (req, res, next) => {
        try {
            const deletedId = await service.delete(req.params.id);
            res.status(200).json({ id: deletedId });
        } catch (error) {
            next(error);
        }
    }
);

module.exports = router;
