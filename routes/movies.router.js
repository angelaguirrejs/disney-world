const express = require('express');

const { createMovieSchema, updateMovieSchema } = require('../schemas/movie.schema');
const validatorHandler = require('../middlewares/validator.handler');
const movieService = require('../services/movie.service');

const service = new movieService();
const router = express.Router();


router.get('/', async(req, res) => {
    const movies = await service.find(req.query);
    res.status(200).json({data: movies});
});

router.get('/:id', async(req, res, next) => {

    try {
        const movie = await service.findOne(req.params.id);
        res.status(200).json({data: movie});
    } catch (error) {
        next(error);
    }
});

router.post('/',
    validatorHandler(createMovieSchema, 'body'),
    async (req, res, next) => {
        try {
            const newMovie = await service.create(req.body);
            res.status(201).json({data: newMovie});
        } catch (error) {
            next(error)
        }
    }
);

router.put('/:id',
    validatorHandler(updateMovieSchema, 'body'),
    async (req, res, next) => {
        try {
            const updatedMovie = await service.update(req.params.id, req.body);
            return res.status(200).json({data: updatedMovie});
        } catch (error) {
            next(error);
        }
    }
)

router.delete('/:id', async(req, res, next) => {
    try {
        const deletedId = await service.delete(req.params.id);
        res.status(200).json({id: deletedId});
    } catch (error) {
        next(error);
    }
});

module.exports = router;
