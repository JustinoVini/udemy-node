function adminAuth(req, res, next) {
    if (req.session.user != undefined) {
        next() // se chegou aqui tem usuario, ta autenticado.
    } else {
        res.redirect("/login");
    }
}

module.exports = adminAuth;