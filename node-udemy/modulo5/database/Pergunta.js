// importando conexão e import do sequelize
const Sequelize = require("sequelize")
const connection = require("./database")

// definindo a table 
const Pergunta = connection.define("perguntas", {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false,
    }
});

/*Sincroniza com o banco de dados, verifica se existe a tabela, e não força a tabela*/
Pergunta.sync({force: false}).then(() => {
    console.log("tabela perguntas criada")
}).catch((msgErro) => {
    console.log(msgErro)
})

module.exports = Pergunta;