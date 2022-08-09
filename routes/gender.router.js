const express = require('express');

const validationHandler = require('../middlewares/validator.handler');
const { createGenderSchema, updateGenderSchema } = require('../schemas/gender.schema');

const genderService = require('../services/gender.service');

const service = new genderService();
const router = express.Router();

router.get('/', async(req, res) => {
    const genders = await service.find();
    res.status(200).json({data: genders});
});

router.get('/:id', async(req, res, next) => {
    try {
        const gender = await service.findOne(req.params.id);
        res.status(200).json({data: gender});
    } catch (error) {
        next(error);
    }
});

router.post('/',
    validationHandler(createGenderSchema, 'body'),
    async (req, res, next) => {
        try {
            const newGender = await service.create(req.body);
            res.status(201).json({data: newGender});
        } catch (error) {
            next(error);
        }
    }
);

router.put('/:id',
    validationHandler(updateGenderSchema, 'body'),
    async (req, res, next) => {
        try {
            const updatedGender = await service.update(req.params.id, req.body);
            res.status(200).json({data: updatedGender});
        } catch (error) {
            next(error);
        }
    }
);

router.delete('/:id', async(req, res, next) => {
    try {
        const deletedId = await service.delete(req.params.id);
        res.status(200).json({id: deletedId});
    } catch (error) {
        next(error);
    }
});

module.exports = router;
