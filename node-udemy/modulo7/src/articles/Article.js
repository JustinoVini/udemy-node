const Sequelize = require("sequelize");
const connection = require("../../database/database");
const Category = require("../categories/Category");

const Article = connection.define("articles", {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Category.hasMany(Article);
Article.belongsTo(Category); // um artigo pertence a uma Categoria

Article.sync({force: false}).then(() => {
    console.log("tabela article criada")
}).catch((msgErro) => {
    console.log(msgErro)
})

module.exports = Article;