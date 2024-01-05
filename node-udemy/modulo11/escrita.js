const fs = require("fs") // file-system

fs.writeFile("./teste.txt", "Novo conteudo do arquivo!", (error) => {

    if (error) {
        console.log("erro na escrita do arquivo");
    }

})