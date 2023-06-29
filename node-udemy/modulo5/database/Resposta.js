// importando conexão e import do sequelize
const Sequelize = require("sequelize")
const connection = require("./database")

// definindo a table 
const Resposta = connection.define("respostas", {
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    perguntaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

/*Sincroniza com o banco de dados, verifica se existe a tabela, e não força a tabela*/
Resposta.sync({force: false}).then(() => {
    console.log("tabela resposta criada")
}).catch((msgErro) => {
    console.log(msgErro)
})

module.exports = Resposta;