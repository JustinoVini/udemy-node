const Sequelize = require("sequelize");
const dotenv = require('dotenv');

dotenv.config();

const connection = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PW, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    timezone: '-03:00'
});

module.exports = connection;