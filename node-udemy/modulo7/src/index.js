// chamando o express
const express = require("express");
const bodyParser = require("body-parser")
// declarando express a uma constante
const app = express();

// body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

// chamada dos controllers 
const categoriesController = require("../src/categories/CategoriesController")
const articlesController = require("../src/articles/ArticlesController")

// chamando a conexão ao banco de dados
const connection = require('../database/database')

//chamada do model
const Articles = require("../src/articles/Article");
const Category = require("../src/categories/Category");

// definindo a porta
const PORT = 3000;

/*Declarando view engine do EJS*/
app.set('view engine', 'ejs')

// arq static
app.use(express.static('public'));

// usando a connection
connection.authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso!");
    }).catch((error) => {
        console.log(error);
    })

// Rotas 
app.use("/", categoriesController);

app.use("/", articlesController);

// rota principal
app.get("/", (req,res) => {
    res.render('index')
});

// declarando o listen do server para que ele possa subir o servidor
app.listen(PORT, () => { console.log(`Server running on PORT: ${PORT}`); })