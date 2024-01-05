function enviarEmail(corpo, para, callback) {
    setTimeout(() => {

        let deuErro = false;

        if (deuErro) {
            callback(12, "O envio do email falhou!")
        } else {
            callback(12);
        }

    }, 2000)
}

console.log("Inicio do envio de email")
enviarEmail("Oi Seja bem vindo ao formação node", "vinicius@edamatec.com.br", (time, erro) => {
    if (erro == undefined) { // ok
        console.log("tudo ok")
        console.log(`Tempo: ${time}`)
    } else { // erro
        console.log("Deu erro" + erro)
    }
})