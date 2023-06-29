/*
    Primeiro passo, inicializar o projeto com npm, dps instalar o express
    dps configurar o index.js para que possamos utilizar o express
*/

// chamando o express 
const express = require("express");

// recebendo uma instancia do express
// essa variavel vai carregar o framework para o sistema.
const app = express();

// rota elaborada com modulo
const routes = require("./routes/router.js")

// podemos definir uma rota constante para que não mude durante o sistema.
const PORT = 3000;

/*
    Definindo uma rota simples

app.get('/', function (req, res) {
    // a linha abaixo, envia uma resposta para a rota
    // a resposta só pode ser enviada uma única vez.
    res.send("Bem vindo ao primeiro projeto express");
    // se enviar 2x não funciona, pois dps que envia uma resposta ele fecha a conexão.
});
*/

/* Rota elaborada com módulos */
app.use("/", routes); // rota de home

app.use("/carrinho", routes); // rota de carrinho

app.use("/canal/youtube", routes); // rota de carrinho

app.use("/ola/:nome", routes); // rota de olá

// app listen é onde abrimos o servidor
// passamos ent a porta, e uma funcao com o param de erro, 
// e ai tratamos o erro com um if e else.
// listen deve ficar sempre em ultimo.
app.listen(PORT, function (erro) {
    if (erro) {
        console.log("ocorreu um erro")
    } else {
        console.log(`servidor rodando na porta ${PORT}`); // deixando o app mais limpo.
    }
});