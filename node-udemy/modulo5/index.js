// inicializando o express
const express = require("express");
const bodyParser = require("body-parser");

// chamando a conexão 
const connection = require("./database/database");

// importando o model.
const Pergunta = require("./database/Pergunta")
const Resposta = require("./database/Resposta")

// testando a conexão 
connection
    .authenticate()
    .then(() => {
        console.log("conexão feita com o banco de dados")
    }).catch((msgErro) => {
        console.log(msgErro)
    })

// definindo constante do express
const app = express();

// porta
const PORT = 3000;

// estou dizendo ao express usar o EJS como View Engine
app.set('view engine', 'ejs');

// chamando arquivos estaticos
app.use(express.static('public'));

// usando o bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// passando alguns parametros na rota
app.get("/", function (req, res) {

    // listando as perguntas na tela principal.

    // corrigindo ordenacao
    Pergunta.findAll({
        raw: true, order: [
            ['id', 'DESC'] // definir a chave e o valor.
        ]
    }).then(perguntas => {
        console.log(perguntas)
        res.render("index", {
            perguntas: perguntas
        })
    })

});

// criando a rota de perguntas
app.get("/perguntar", (req, res) => {
    res.render("perguntar")
})

// rota para receber dados do forms 
app.post("/salvarpergunta", (req, res) => {
    // craindo uma variavel para receber os inputs
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;
    // chamando as vars
    //res.send("Formulário recebido" + titulo + " " + "descricao" + descricao);
    // salvando no banco 
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/")
    })
});

// rota de getOne
app.get("/pergunta/:id", (req, res) => {
    let id = req.params.id;
    // busca no banco
    Pergunta.findOne({
        where: { id: id }        
    }).then(pergunta => {
        // se for diferente de indefinido, ela existe.
        if (pergunta != undefined) {

            // listando as respostas
            Resposta.findAll({
                where: {
                    perguntaId: pergunta.id
                },
                order: [
                    ['id', 'desc']
                ]
            }).then(respostas => {
                // log de pergunta
                console.log("pergunta encontrada");
                res.render("pergunta", {
                    pergunta: pergunta, // passando os valores da pergunta 
                    respostas: respostas// passando as respostas
                });
            })
        } else { // não encontrada
            console.log("pergunta não encontrada");
            res.redirect("/");
        }
    });
})

// rota de resposta 
app.post("/responder", (req, res) => {
    let corpo = req.body.corpo;
    let perguntaId = req.body.perguntaId;
    Resposta.create({
        corpo: corpo,
        perguntaId: perguntaId,
    }).then(() => {
        res.redirect("/pergunta/" + perguntaId);
    });

});

app.listen(PORT, () => { console.log(`Server running on PORT: ${PORT}`); })