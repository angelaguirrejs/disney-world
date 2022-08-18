const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class GenderService {
    constructor() {

    }

    async find() {
        return await models.Gender.findAll();
    }

    async findOne(id) {

        const gender = await models.Gender.findByPk(id);

        if(!gender) {
            throw boom.notFound('Gender not found');
        }

        return gender;
    }

    async create(data) {
        return await models.Gender.create(data);
    }

    async update(id, changes) {
        const gender = await this.findOne(id);
        return await gender.update(changes);
    }

    async delete(id) {
        const gender = await this.findOne(id);
        await gender.destroy();
        return id;
    }
}

module.exports = GenderService;
