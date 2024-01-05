const fs = require("fs") // file-system
const path = require("path");

const filePath = path.join(__dirname, "../../files/usuarios.json");

function modificarUsuario(nome, curso, categoria) {
    fs.readFile(filePath, { encoding: 'utf-8' }, (erro, dados) => {
        
        if (erro) {
            console.log("Ocorreu uma falha durante a leitura do arquivo!");
        } else {
            
            let conteudo = JSON.parse(dados); // texto para objeto js
            
            conteudo.nome = nome
            conteudo.curso = curso
            conteudo.categoria = categoria
            
            fs.writeFile(filePath, JSON.stringify(conteudo), (erro) => {
                
                if (erro) {
                    console.log("Um erro aconteceu na escrita");
                }
                
            })
        }
        
    });
}

modificarUsuario("João José", "PHP do jeito certo", "PHP")