const express = require('express');
const router = express.Router();

const { createCharacterSchema, updateCharacterSchema } = require('../schemas/character.schema');

const upload = require('../middlewares/upload.handler');
const validatorHandler = require('../middlewares/validator.handler');

const CharactertService = require('../services/character.service');

const service = new CharactertService();

// Get all characters

router.get('/', async (req, res, next) => {

    try {
        const characters = await service.find(req.query);
        console.log(characters);
        res.status(200).json(characters);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {

    try {
        const characters = await service.findOne(req.params.id);
        console.log(characters);
        res.status(200).json(characters);
    } catch (error) {
        next(error);
    }
});

// Create a new character

router.post('/',
    validatorHandler(createCharacterSchema, 'body'),
    async (req, res, next) => {
        try {
            const newCharacter = await service.create(req.body);
            res.status(201).json(newCharacter);
        } catch (error) {
            next(error);
        }
    }
);

router.put('/:id',
    validatorHandler(updateCharacterSchema, 'body'),
    async (req, res, next) => {

        try {

            const updatedCharacter = await service.update(req.params.id, req.body);
            res.status(200).json(updatedCharacter);

        } catch (error) {
            next(error);
        }

    }
);

router.delete('/:id', async (req, res, next) => {
    try {

        const deletedId = await service.delete(req.params.id);
        res.status(200).json({id: deletedId});

    } catch (error) {
        next(error);
    }
})

module.exports = router;
