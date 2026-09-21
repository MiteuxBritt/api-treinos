const { DatabaseSync } = require('node:sqlite');
const db = new DatabaseSync('treinos.db');

db.exec(`
    CREATE TABLE IF NOT EXISTS treinos (
        id      INTEGER PRIMARY KEY AUTOINCREMENT,
        nome    TEXT    NOT NULL,
        duracao INTEGER NOT NULL
    )
`);

db.prepare('DELETE FROM treinos WHERE id = ?').run(1);

db.prepare('INSERT INTO treinos (nome, duracao) VALUES (?, ?)')
    .run('Costas', 50)

console.log(db.prepare('SELECT * FROM treinos').all());