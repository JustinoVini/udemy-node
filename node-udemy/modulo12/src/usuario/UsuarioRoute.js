const express = require("express");
const router = express.Router();
const usuarioController = require("./UsuarioController");

router.post("/auth", usuarioController.login);

module.exports = router;