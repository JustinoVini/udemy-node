const fs = require("fs") // file-system
const path = require("path");

const filePath = path.join(__dirname, "../../files/teste.txt");

fs.readFile(filePath, { encoding: 'utf-8' }, (erro, dados) => {

    if (erro) {
        console.log("Ocorreu uma falha durante a leitura do arquivo!");
    } else {
        console.log(dados);
    }

});