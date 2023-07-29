const express = require("express")
const router = express.Router();
const Category = require("./Category");
const slugify = require("slugify")

router.get("/admin/categories/new", (req, res) => {
    res.render("admin/categories/new");
})

router.post("/categories/save", (req, res) => {

    let title = req.body.title;
    if (title != undefined) {

        Category.create({
            title: title,
            slug: slugify(title)// transforma uma string em text fica ex: "Computação e informatica => computacao-e-informatica"
        }).then(() => {
            res.redirect("/admin/categories")
        }).catch((msgErro) => {
            console.log(msgErro)
        })

    } else {
        res.redirect("/admin/categories/new");
    }
})

router.get("/admin/categories", (req, res) => {

    Category.findAll().then(categories => {
        res.render("admin/categories/index", { categories: categories });
    })
})

router.post("/categories/delete", (req, res) => {
    let id = req.body.id;
    if (id != undefined) {
        if (!isNaN(id)) {

            Category.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.redirect("/admin/categories")
            })

        } else { // se não for numero vai ser redirecionado
            res.redirect("/admin/categories")
        }
    } else { // se for null vai ser redirecionado
        res.redirect("/admin/categories")
    }
})

router.get("/admin/categories/edit/:id", (req, res) => {
    let id = req.params.id;

    /*Validando se ele não for um número*/
    /* if (isNan(id)) {
        res.redirect("/admin/categories");
    } */

    Category.findByPk(id).then(category => { // pesquisando uma categoria pelo id
        if (category != undefined) {
            res.render("admin/categories/edit", { category: category })
        } else {
            res.redirect("/admin/categories");
        }
    }).catch(erro => {
        res.redirect("/admin/categories");
        console.log(erro);
    })
})

module.exports = router;