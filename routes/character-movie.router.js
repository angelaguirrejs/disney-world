const express = require('express');

const validatorHandler = require('../middlewares/validator.handler');
const { addCharacterMovieSchema, updateCharacterMovieSchema } = require('../schemas/character-movie.schema');
const characterMovieService = require('../services/character-movie.service');

const router = express.Router();
const service = new characterMovieService();

router.get('/', async(req, res) => {
    const data = await service.find();
    res.status(200).json({data})
});

router.get('/:id', async(req, res, next) => {
    try {
        const characterMovie = await service.findOne(req.params.id);
        res.status(200).json(characterMovie);
    } catch (error) {
        next(error);
    }
})

router.post('/',
    validatorHandler(addCharacterMovieSchema, 'body'),
    async(req, res, next) => {
        try {
            const newCharacterMovie = await service.create(req.body);
            res.status(201).json({data: newCharacterMovie});
        } catch (error) {
            next(error);
        }
    }
);

router.put('/:id',
    validatorHandler(updateCharacterMovieSchema, 'body'),
    async (req, res, next) => {
        try {
            const updatedCharacterMovie = await service.update(req.params.id, req.body);
            res.status(200).json(updatedCharacterMovie);
        } catch (error) {
            next(error);
        }
    }
)

router.delete('/:id', async(req, res, next) => {
    try {
        const deletedId = await service.delete(req.params.id);
        res.status(200).json(deletedId);
    } catch (error) {
        next(error);
    }
})


module.exports = router;
