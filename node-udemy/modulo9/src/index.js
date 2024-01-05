function enviarEmail(corpo, para) {
    setTimeout(() => {
        console.log(`
        Para: ${para}
        ----------------------------
        ${corpo}
        ----------------------------
        De: Vinicius
        `);
    }, 8000)
}

console.log("Inicio do envio de email")
enviarEmail("Oi Seja bem vindo ao formação node", "vinicius@edamatec.com.br")
console.log("Email enviado")
console.log("200")