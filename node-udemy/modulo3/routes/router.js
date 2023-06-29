/* Usando rotas mais elaboradas com módulos */
// inicializa express
const express = require("express");

// define uma constante para o express
const router = express.Router();

// cria uma rota 
router.get("/", function (req, res) {
    // a linha abaixo, envia uma resposta para a rota
    // a resposta só pode ser enviada uma única vez.
    res.send("Tela principal");
    // se enviar 2x não funciona, pois dps que envia uma resposta ele fecha a conexão.
});

// parametro não obrigatorio
router.get("/carrinho/:artigo?", function (req, res) {

    let artigo = req.params.artigo;

    if (artigo) {
        res.send("<h2> " + artigo + "</h2>");
    } else {
        res.send("<h1>Bem vindo ao carrinho</h1>");
    }
});

router.get("/canal/youtube", function (req, res) {

    // dentros das aspas precisamos passar os parametros que queremos pegar.
    let canal = req.query["canal"];

    if (canal) {
        res.send(canal);
    } else {
        res.send("nenhum canal fornecido");
    }
});

// passando um parametro dinamico na funcao.
// exemplo se for :3000/ola vai dar pau, precisa passar o parametro :3000/ola/algumacoisa ex;
// passando mais um parametro.
router.get("/ola/:nome/:empresa", function(req, res) {
    // req => dados enviados pelo usuario
    // res => resposta que vai ser enviada para o usuario
    let nome = req.params.nome;
    let empresa = req.params.empresa;
    res.send("<h1>Oi " + nome + " do "+ empresa + "</h1>");
})

// exportando o módulo.
module.exports = router;

/* o que são parametros ? 

podemos add mais poder as rotas com parametros

posso permitir que o usuario coloque uma barra depois da minha rota

/carrinho/e coloque qualquer valor

query params, são parametros que não são fixos na rota

as vezes queremos receber parametrs de forma dinamica 

não fixos nas rotas, para isso que serve o query params.

como enviamos nas rotas.

:3000/youtube?aluno=viniciusjustino

não são amigaveis, e poluem a rota, mas o usuario pode passar ou não passar o query params
*/