const express = require("express");
const router = express.Router();
const User = require("./User");
const bcrypt = require("bcryptjs");

router.get("/admin/users", (req, res) => {

    User.findAll().then(users => {
        res.render("admin/users/index", { users: users });
    })
});

router.get("/admin/users/create", (req, res) => {
    res.render("admin/users/create");
});

router.post("/users/create", (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    User.findOne({
        where: { email: email }
    }).then(user => {
        if (user == undefined) { // se não ter cadastrar
            // primeiro criar um salt, temperar a senha
            let salt = bcrypt.genSaltSync(10);
            let hash = bcrypt.hashSync(password, salt); // variavel para salvar a senha no banco

            User.create({
                email: email,
                password: hash
            }).then(() => {
                res.redirect("/admin/users");
            }).catch((err) => {
                res.redirect("/");
            })
        } else { // se ter faz nada
            res.redirect("/admin/users/create");
        }
    })
})

router.get("/login", (req, res) => {
    res.render("admin/users/login")
})

router.post("/authenticate", (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    User.findOne({
        where: { email: email }
    }).then(user => {
        if (user != undefined) { // se tem
            // valida a senha
            let correct = bcrypt.compareSync(password, user.password);

            if (correct) {
                req.session.user = {
                    id: user.id,
                    email: user.email
                }
                res.json(req.session.user);
            } else {
                res.redirect("/login");
            }

        } else { // se ter faz nada
            res.redirect("/login");
        }
    })
})

module.exports = router;