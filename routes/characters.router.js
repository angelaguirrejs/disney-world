const path = require('path');
const fs = require('fs');

const express = require('express');
const router = express.Router();
const boom = require('@hapi/boom');
const passport = require('passport');

const { createCharacterSchema, updateCharacterSchema, imageSchema } = require('../schemas/character.schema');
const validatorHandler = require('../middlewares/validator.handler');
const CharactertService = require('../services/character.service');
const jwtAuth = passport.authenticate('jwt', { session: false });

const service = new CharactertService();

// Get all characters

router.get('/',
    jwtAuth,
    async (req, res, next) => {

        try {
            const characters = await service.find(req.query);
            console.log(characters);
            res.status(200).json(characters);
        } catch (error) {
            next(error);
        }
    }
);

router.get('/:id',
    jwtAuth,
    async (req, res, next) => {

        try {
            const characters = await service.findOne(req.params.id);
            console.log(characters);
            res.status(200).json(characters);
        } catch (error) {
            next(error);
        }
    }
);

router.get('/image/:fileName', (req, res, next) => {
    const pathImage = path.join(__dirname, '../uploads', '/characters/', req.params.fileName);

    if (!fs.existsSync(pathImage)) {
        next(boom.notFound('Image not found'));
    }

    res.sendFile(pathImage);
});

// Create a new character

router.post('/',
    jwtAuth,
    validatorHandler(createCharacterSchema, 'body'),
    validatorHandler(imageSchema, 'files'),
    async (req, res, next) => {
        try {
            const newCharacter = await service.create(req);
            res.status(201).json(newCharacter);
        } catch (error) {
            next(error);
        }
    }
);

router.put('/:id',
    jwtAuth,
    validatorHandler(updateCharacterSchema, 'body'),
    async (req, res, next) => {
        try {
            const updatedCharacter = await service.update(req.params.id, req);
            res.status(200).json(updatedCharacter);
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
