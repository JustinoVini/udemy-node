const Sequelize = require("sequelize");

const connection = new Sequelize('guiapress', 'root', '@Viking569038', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;