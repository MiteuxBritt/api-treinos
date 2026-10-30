const db = require('../banco.js');

function buscarPorUsuario(usuario) {
    return db.prepare('SELECT * FROM usuarios WHERE usuario = ?').get(usuario);
}

function buscarPorId(id) {
    db.prepare('SELECT * FROM usuarios WERE id = ?').get(id);
}

module.exports = { buscarPorUsuario, buscarPorId };