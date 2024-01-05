function enviarEmail(corpo, para) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            let deuErro = false;

            if (!deuErro) {
                resolve() // promessa OK
            } else {
                reject() // promessa deu erro
            }

        }, 2000)
    });
}

enviarEmail("Olá mundo", "teste").then(() => {
    console.log("promessa cumprida");
}).catch(() => {
    console.log("não cumprida");
})