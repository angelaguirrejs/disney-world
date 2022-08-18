const path = require('path');
const fs = require('fs');

const express = require('express');
const boom = require('@hapi/boom');

const { createMovieSchema, updateMovieSchema, imageSchema } = require('../schemas/movie.schema');
const validatorHandler = require('../middlewares/validator.handler');
const movieService = require('../services/movie.service');

const service = new movieService();
const router = express.Router();


router.get('/', async(req, res, next) => {
    try {
        const movies = await service.find(req.query);
        res.status(200).json({data: movies});
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async(req, res, next) => {

    try {
        const movie = await service.findOne(req.params.id);
        res.status(200).json({data: movie});
    } catch (error) {
        next(error);
    }
});

router.get('/image/:fileName', (req, res, next) => {

    const pathImage = path.join(__dirname, '../uploads', '/movies/', req.params.fileName);

    if(!fs.existsSync(pathImage)) {
        next(boom.notFound('Image not found'));
    }

    res.sendFile(pathImage);
})

router.post('/',
    validatorHandler(createMovieSchema, 'body'),
    validatorHandler(imageSchema, 'files'),
    async (req, res, next) => {
        try {
            const newMovie = await service.create(req);
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
            const updatedMovie = await service.update(req.params.id, req);
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
