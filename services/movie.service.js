const { Op } = require('sequelize');
const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class MovieService {

    constructor() {

    }

    async find({name, genre, order}) {

        const rules = {};

        if(name) {
            rules.name = {
                [Op.substring]: name
            }
        }

        if(genre) {

        }

        const options = {
            attributes: ['image', 'title', 'created_at'],
            where: rules,
        }

        if(order) {
            if(order.toUpperCase() != 'ASC' || order.toUpperCase() != 'DESC') {
                throw boom.badRequest('The order value is not correct, must be ASC or DESC');
            }
            options.order = [
                ['created_at', order]
            ]
        }


        return await models.Movie.findAll(options);
    }

    async findOne(id) {
        const movie = await models.Movie.findByPk(id);

        if(!movie) {
            throw boom.notFound('Movie not found');
        }

        return movie;
    }

    async create(data) {
        return await models.Movie.create(data);
    }

    async update(id, changes) {
        const movie = await this.findOne(id);
        return await movie.update(changes);
    }

    async delete(id) {
        const movie = await this.findOne(id);
        movie.destroy();
        return id;
    }
}

module.exports = MovieService;
