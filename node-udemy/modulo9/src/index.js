function enviarEmail(corpo, para, callback) {
    setTimeout(() => {
        console.log(`
        Para: ${para}
        ----------------------------
        ${corpo}
        ----------------------------
        De: Vinicius
        `);
        callback("OK", 5, "8s", "vinicius");
    }, 8000)
}

console.log("Inicio do envio de email")
enviarEmail("Oi Seja bem vindo ao formação node", "vinicius@edamatec.com.br", (status, amount, time, nome) => {
    console.log(`
    De: ${nome}
    Status: ${status}
    --------------------
    Contatos: ${amount}
    --------------------
    Tempo de envio: ${time}
    `)
    console.log("200")
})