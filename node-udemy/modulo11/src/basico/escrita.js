const fs = require("fs") // file-system
const path = require("path");

const filePath = path.join(__dirname, "../../files/teste.txt");

fs.writeFile(filePath, "Novo conteudo do arquivo!", (error) => {

    if (error) {
        console.log("erro na escrita do arquivo");
    }

})