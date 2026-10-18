const Database = require('better-sqlite3');
const db = new Database('treinos.db');

db.exec(`
    CREATE TABLE IF NOT EXISTS treinos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        duracao INTEGER NOT NULL
    )
`);

module.exports = db;