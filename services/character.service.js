const { Op } = require('sequelize');
const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CharacterService {

    constructor() {

    }

    async find({ name, age, movie }) {

        const rules = {}

        if(name) {
            rules.name= {
                [Op.substring]: name,
            }
        }

        if(age) {
            rules.age = {
                [Op.eq]: age
            }
        }

        return await models.Character.findAll({
            attributes: ['image', 'name'],
            where: rules
        });
    }

    async findOne(id) {

        const character = await models.Character.findByPk(id);

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
