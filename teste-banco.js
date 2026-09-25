const { DatabaseSync } = require('node:sqlite');
const db = new DatabaseSync('exercicios.db');
const express = require('express');
app.use(express.json());

db.exec(`
    CREATE TABLE IF NOT EXISTS exercicios (
        id      INTEGER PRIMARY KEY AUTOINCREMENT,
        nome    TEXT    NOT NULL,
        duracao INTEGER NOT NULL
    )
`);

const inserirT = db.prepare('INSERT INTO exercicios (nome, duracao) VALUES (?, ?)');
const deletarT = db.prepare('DELETE FROM exercicios WHERE id = ?');

inserirT.run('cu', 12);
inserirT.run('cuzes', 10);

const saida = db.prepare('SELECT * FROM exercicios').all();
console.log(saida);

