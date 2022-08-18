const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const { sendWelcomeEmail } = require('../utils/mail/sender');

class UserService {

    constructor() {

    }

    async find() {
        return await models.User.findAll({
            attributes: ['name', 'email']
        });
    }

    async findOne(id) {
        const user = await models.User.findByPk(id, {
            attributes: ['name', 'email']
        });

        if(!user) {
            throw boom.notFound('User not found');
        }

        return user;
    }

    async findByEmail(email) {

        const user = await models.User.findOne({
            where: { email }
        });

        return user;
    }

    async create(data) {
        const createdUser = await models.User.create(data);
        sendWelcomeEmail(createdUser).catch(error => {
            console.log(error);
        });
        delete createdUser.dataValues.password;
        return createdUser;
    }

    async update(id, changes) {
        const user = await this.findOne(id);
        const updatedUser = await user.update(changes);
        delete updatedUser.dataValues.password;
        return updatedUser;
    }

    async delete(id) {
        const user = await this.findOne(id);
        await user.destroy();
        return id;
    }

}

module.exports = UserService;
