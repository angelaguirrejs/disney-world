const { Sequelize } = require('sequelize');

const config = require('../config/config');
const setupModels = require('../db/models');


const HOST = encodeURIComponent(config.dbHost);
const PORT = encodeURIComponent(config.dbPort);
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const NAME = encodeURIComponent(config.dbName);

const URI = `mysql://${USER}:${PASSWORD}@${HOST}:${PORT}/${NAME}`;

module.exports = {
    development: {
        url: URI,
        dialect: 'mysql'
    },
    production: {
        url: URI,
        dialect: 'mysql'
    },
}
