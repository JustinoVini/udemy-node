const express = require("express");
const bodyParser = require("body-parser");
const connection = require('../src/db/Conexao');

const app = express();
const PORT = 3000;

async function startServer() {
    try {
        await connection.authenticate();
        app.listen(PORT, () => {
            console.log(`Server running on PORT: ${PORT}`);
        });
    } catch (error) {
        console.error("Falha ao iniciar o servidor:", error);
    }
}

startServer();
