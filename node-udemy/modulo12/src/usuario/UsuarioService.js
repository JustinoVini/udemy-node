const jwt = require("jsonwebtoken");
const Usuario = require("./Usuario");
const JWTSecret = "senhaUltraSecreta";


// Método para validar o cadastro
// static validarUsuario(email, senha) {
//     // Verifica se o email e a senha atendem aos critérios desejados
//     if (!email || email.trim() === '' || !senha || senha.trim() === '') {
//         return { isValid: false, message: 'Email e senha são obrigatórios.' };
//     }

//     // Se for válido
//     return { isValid: true, message: 'Usuário válido.' };
// }

exports.autenticarUsuario = async (email, senha) => {
    try {
        const usuario = await Usuario.findOne({ where: { email } });

        if (!usuario || usuario.senha !== senha) {
            return { isValid: false, message: 'Email ou senha incorretos.' };
        }

        // inserir refresh token, criar outro método que recebe por parametro o token.
        const token = this.gerarToken(usuario.id, usuario.email);
        return { isValid: true, message: 'Login válido.', token };
    } catch (error) {
        console.log(error)
        return { isValid: false, message: 'Ocorreu um erro ao validar o login.' };
    }
}

exports.gerarToken = async (userId, userEmail) => {
    return jwt.sign({ id: userId, email: userEmail }, JWTSecret, { expiresIn: '48h' });
}
