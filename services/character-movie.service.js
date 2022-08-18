const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CharacterMovieService {

    constructor() {

    }

    async find() {
        return await models.CharacterMovie.findAll();
    }

    async findOne(id) {
        const characterMovie = await models.CharacterMovie.findByPk(id);

        if(!characterMovie) {
            throw boom.notFound('Relationship chacrater-movie not found');
        }

        return characterMovie;
    }

    async create(data) {
        return await models.CharacterMovie.create(data);
    }

    async update(id, changes) {
        const characterMovie = await this.findOne(id);
        return await characterMovie.update(changes);
    }

    async delete(id) {
        const characterMovie = await this.findOne(id);
        await characterMovie.destroy();
        return id;
    }
}


module.exports = CharacterMovieService;
