function enviarEmail(corpo, para) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            let deuErro = false;

            if (!deuErro) { //promessa OK, pode ter somente 1 param, se quiser mais tem que ter {}
                resolve({ time: 6, to: "Teste"}) 
            } else {
                reject("Fila cheia") // promessa deu erro
            }

        }, 2000)
    });
}

enviarEmail("Olá mundo", "teste").then(({ time, to }) => {
    console.log(`
        time: ${time}
        ------------------------------
        De: ${to}
    `);
}).catch((error) => {
    console.log("não cumprida", error);
})