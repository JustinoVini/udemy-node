const service = require("./UsuarioService");


async function login(req, res) {
    const { email, senha } = req.body;

    try {
        const resultado = await service.autenticarUsuario(email, senha);

        if (resultado.isValid) {
            const token = await service.gerarToken();
            res.status(200).json({ token: token });
        } else {
            res.status(401).json({ message: resultado.message });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Erro ao realizar o login' });
    }
}

module.exports = { login };
