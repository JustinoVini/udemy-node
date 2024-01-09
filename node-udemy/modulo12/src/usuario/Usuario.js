const Sequelize = require("sequelize");
const connection = require("../db/Conexao");

const Usuario = connection.define("usuarios", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(75),
        allowNull: true
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Usuario.sync({ force: false }).then(() => {
    console.log("tabela usuarios criada")
}).catch((msgErro) => {
    console.log(msgErro)
})

module.exports = Usuario;