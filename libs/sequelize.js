const { Sequelize } = require('sequelize');

const config = require('../config/config');
const setupModels = require('../db/models');


const HOST = encodeURIComponent(config.dbHost);
const PORT = encodeURIComponent(config.dbPort);
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const NAME = encodeURIComponent(config.dbName);

const URI = `mysql://${USER}:${PASSWORD}@${HOST}:${PORT}/${NAME}`;

sequelize = new Sequelize(URI);

setupModels(sequelize);

module.exports = sequelize;

