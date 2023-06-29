let http = require("http");

/* Criando um server basico para rodar o node no navegador */
http.createServer(function(req, res) {
    res.end("Bem vindo ao meu site")
}).listen(8080);

console.log("server running")