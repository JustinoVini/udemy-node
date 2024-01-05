const fs = require("fs") // file-system

fs.readFile("./teste.txt", { encoding: 'utf-8' }, (erro, dados) => {

    if (erro) {
        console.log("Ocorreu uma falha durante a leitura do arquivo!");
    } else {
        console.log(dados);
    }

});