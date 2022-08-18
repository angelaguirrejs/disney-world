const path = require('path');
const fs = require('fs');

const boom = require('@hapi/boom');


const { models } = require('../libs/sequelize');
const { imageUploader } = require('../utils/images/uploader');

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

    async create(req) {

        const data = req.body;

        const fileName = await imageUploader(req.files, 'genders');
        data.image = fileName;

        return await models.Gender.create(data);
    }

    async update(id, req) {

        const gender = await this.findOne(id);
        const changes = req.body;

        if(req.files && req.files.image) {

            console.log('here');

            const fileName = await imageUploader(req.files, 'genders');
            changes.image = fileName

            if(gender.image) {
                const pathImage = path.join(__dirname , '../uploads/genders/', gender.image);

                if(fs.existsSync(pathImage)) {
                    fs.unlinkSync(pathImage);
                }
            }
        }

        return await gender.update(changes);
    }

    async delete(id) {
        const gender = await this.findOne(id);
        const pathImage = path.join(__dirname , '../uploads/genders/', gender.image);

        if(fs.existsSync(pathImage)) {
            fs.unlinkSync(pathImage);
        }

        await gender.destroy();
        return id;
    }
}

module.exports = GenderService;
