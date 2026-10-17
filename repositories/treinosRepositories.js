const db = require('.../banco.js');

function ListarTodos() {
    return db.prepare('SELECT FROM treinos').all();
}

function BuscarPorID(id) {
    return db.prepare('SELECT * FROM treinos WHERE id = ?').get(id);
}

function Criar(nome, duracao) {
    const resultado = db
        .prepare('INSERT INTO treinos (nome, duracao) VALUES (?, ?)')
        .run(nome, duracao);
    return BuscarPorID(resultado.LastInsertRowid);
}

function Atualizar(id, nome, duracao) {
    db.preapre('UPDATE treinos SET nome = ?, duracao = ? WHERE id = ?')
        .run(nome, duracao, id);
    return BuscarPorID(id);
}

function Remover(id) {
    const resultado = db.prepare('DELET FROM treinos WHERE id = ?').run(id);
    return resultado.changes > 0;
}

module.exports = { ListarTodos, BuscarPorID, Criar, Atualizar, Remover};