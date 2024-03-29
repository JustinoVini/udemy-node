// chamando o express
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
// declarando express a uma constante
const app = express();

// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

// chamada dos controllers 
const categoriesController = require("../src/categories/CategoriesController");
const articlesController = require("../src/articles/ArticlesController");
const usersController = require("../src/user/UserController");

// chamando a conexão ao banco de dados
const connection = require('../database/database')

//chamada do model
const Article = require("../src/articles/Article");
const Category = require("../src/categories/Category");
const User = require("../src/user/User");

// definindo a porta
const PORT = 3000;

/*Declarando view engine do EJS*/
app.set('view engine', 'ejs')

app.use(session({
    secret: "bratva",
    cookie: {
        maxAge: 300000 // expira sessão do cookies
    }
}))

// arq static
app.use(express.static('public'));

// usando a connection
connection.authenticate().then(() => {
    console.log("Conexão feita com sucesso!");
}).catch((error) => {
    console.log(error);
})

// Rotas 
app.use("/", categoriesController);

app.use("/", articlesController);

app.use("/", usersController);

/* 
exemplos de sessao, inserir na sessao
app.get("/session", (req, res) => { // escreve session
    req.session.treinamento = "Formação node"
    req.session.ano = 2023
    req.session.email = "vinicius@edamatec.com.br"
    req.session.user = {
        username: "vini",
        email: "vinicius@edamatec.com.br22",
        id: 1
    }
    res.send("Sessão gerada com sucesso!");
})

ler a sessao
app.get("/leitura", (req, res) => { // lê a session
    res.json({
        treinamento: req.session.treinamento,
        ano: req.session.ano,
        email: req.session.email,
        user: req.session.user
    })
}) */

// rota principal
app.get("/", (req, res) => {

    Article.findAll({
        order: [
            ['id', 'DESC']
        ],
        limit: 4
    }).then(articles => {

        Category.findAll().then(categories => {
            res.render("index", { articles: articles, categories })
        })
    })

});

app.get("/:slug", (req, res) => {
    let slug = req.params.slug;
    Article.findOne({
        where: {
            slug: slug
        }
    }).then(article => {

        if (article != undefined) {
            Category.findAll().then(categories => {
                res.render("article", { article: article, categories })
            })
        } else {
            res.redirect("/");
        }
    }).catch(err => {
        res.redirect("/");
    })
});

app.get("/category/:slug", (req, res) => {
    let slug = req.params.slug;

    Category.findOne({
        where: {
            slug: slug
        },
        include: [{ model: Article }]
    }).then(category => {
        if (category != undefined) {

            Category.findAll().then(categories => {
                res.render("index", { articles: category.articles, categories: categories })
            });

        } else {
            res.redirect("/")
        }
    }).catch(err => {
        res.redirect("/");
    })
})

// declarando o listen do server para que ele possa subir o servidor
app.listen(PORT, () => { console.log(`Server running on PORT: ${PORT}`); })