const express = require("express");
const bodyParser = require("body-parser");
const connection = require('../src/db/Conexao');
const cors = require("cors");
const usuarioRoutes = require("../src/usuario/UsuarioRoute");

const app = express();
const PORT = 3000;

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

const Usuario = require("../src/usuario/Usuario");

app.use('/usuario', usuarioRoutes);

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});

