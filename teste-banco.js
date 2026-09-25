const { DatabaseSync } = require('node:sqlite');
const db = new DatabaseSync('treinos.db');

db.exec(`
    CREATE TABLE IF NOT EXISTS treinos (
        id      INTEGER PRIMARY KEY AUTOINCREMENT,
        nome    TEXT    NOT NULL,
        duracao INTEGER NOT NULL
    )
`);

const inserir = db.prepare('INSERT INTO treinos (nome, duracao) VALUES (?, ?)');
const deletar = db.prepare('DELETE FROM treinos WHERE id = ?');

inserir.run('Treino A', 30);
inserir.run('Treino B', 45);
inserir.run('Treino C', 60);
inserir.run('Treino D', 90);

deletar.run(2);
deletar.run(4);

console.log(db.prepare('SELECT * FROM treinos').all());