const path = require('path');
const fs = require('fs');

const { Op } = require('sequelize');
const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');
const { imageUploader } = require('../utils/images/uploader');

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

    async create(req) {

        const data = req.body;

        const fileName = await imageUploader(req.files, 'characters');
        data.image = fileName;

        return await models.Character.create(data);
    }

    async update(id, req) {

        const character = await this.findOne(id)
        const changes = req.body;

        if(req.files && req.files.image) {
            const fileName = await imageUploader(req.files, 'characters');
            changes.image = fileName

            if(character.image) {
                const pathImage = path.join(__dirname , '../uploads/characters/', character.image);

                if(!fs.existsSync(pathImage)) {
                    throw boom.notFound("Character's image not found");
                }
                fs.unlinkSync(pathImage);
            }
        }

        return await character.update(changes);
    }

    async delete(id) {
        const character = await this.findOne(id)
        const pathImage = path.join(__dirname , '../uploads/characters/', character.image);

        fs.unlinkSync(pathImage);

        await character.destroy();
        return id;
    }

}

module.exports = CharacterService;
