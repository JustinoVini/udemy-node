function pegarId() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)
        }, 2000)
    })
}

function buscarIdNoBanco(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("teste@teste.com.br")
        }, 3000)
    }) 
}

function enviarEmail(corpo, para) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            let deuErro = false;

            if (!deuErro) { //promessa OK, pode ter somente 1 param, se quiser mais tem que ter {}
                resolve({ time: 6, to: "Teste"}) 
            } else {
                reject("Fila cheia") // promessa deu erro
            }

        }, 4000)
    });
}

pegarId().then((id) => {
    buscarIdNoBanco(id).then((email) => {
        enviarEmail("Olá como vai?", email).then(() => {
            console.log("Email enviado, para o usuario com id: " + id)
        }).catch((erro) => {
            console.log(erro)
        })
    })
})