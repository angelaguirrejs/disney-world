const { Op } = require('sequelize');
const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class CharacterService {

    constructor() {

    }

    async find({ name, age, movie }) {

        const options = {
            attributes: ['id', 'image', 'name'],
            where: {},
        }

        if(name) {
            options.where.name = {
                [Op.substring]: name,
            }
        }

        if(movie) {
            options.include = 'movies';
            Object.assign(options.where, {
                '$movies.id$' : movie
            });
        }

        if(age) {
            options.where.age = {
                [Op.eq]: age
            }
        }

        return await models.Character.findAll(options);
    }

    async findOne(id) {

        const character = await models.Character.findByPk(id, {
            include: 'movies',
        });

        if(!character) {
            throw boom.notFound('Character not found');
        }

        return character;
    }

    async create(data) {
        return await models.Character.create(data);
    }

    async update(id, changes) {
        const character = await this.findOne(id)
        return await character.update(changes);
    }

    async delete(id) {
        const character = await this.findOne(id)
        await character.destroy();
        return id;
    }

}

module.exports = CharacterService;
