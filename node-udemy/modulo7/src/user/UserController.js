const express = require("express");
const router = express.Router();
const User = require("./User");
const bcrypt = require("bcryptjs");

router.get("/admin/users", (req, res) => {
    res.send("listagem de usuários");
});

router.get("/admin/users/create", (req, res) => {
    res.render("admin/users/create");
});

router.post("/users/create", (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    // primeiro criar um salt, temperar a senha
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt); // variavel para salvar a senha no banco

    User.create({
        email: email,
        password: hash
    }).then(() => {
        res.redirect("/");
    }).catch((err) => {
        res.redirect("/");
    })
})

module.exports = router;