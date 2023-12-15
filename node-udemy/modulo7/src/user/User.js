const Sequelize = require("sequelize");
const connection = require("../../database/database");

const User = connection.define("users", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

User.sync({ force: false }).then(() => {
    console.log("tabela user criada")
}).catch((msgErro) => {
    console.log(msgErro)
})

module.exports = User;