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
                resolve({ time: 6, to: "Teste" })
            } else {
                reject("Fila cheia") // promessa deu erro
            }

        }, 4000)
    });
}

function pegarUsuarios() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { name: "victor", lang: "java" },
                { name: "just", lang: "java" },
                { name: "daniel", lang: "aaa" }
            ])
        }, 4000)
    })
}

async function principal() {
    let id = await pegarId();
    let email = await buscarIdNoBanco(id);
    try {
        await enviarEmail("olá", email);
    } catch (error) {
        console.log(error)
    }
}

principal();
