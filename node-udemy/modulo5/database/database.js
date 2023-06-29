// conexao com sequelize
const Sequelize = require("sequelize")

const connection = new Sequelize('guiaperguntas', 'root', '@Viking569038', {
    // host onde está rodando
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;