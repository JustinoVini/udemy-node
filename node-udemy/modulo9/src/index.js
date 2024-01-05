function enviarEmail(corpo, para, callback) {
    setTimeout(() => {
        console.log(`
        Para: ${para}
        ----------------------------
        ${corpo}
        ----------------------------
        De: Vinicius
        `);
        callback()
    }, 8000)
}

console.log("Inicio do envio de email")
enviarEmail("Oi Seja bem vindo ao formação node", "vinicius@edamatec.com.br", () => {
    console.log("Email enviado")
    console.log("200")
})