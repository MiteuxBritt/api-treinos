const service = require('.../Service/treinosService.js');
const { ListarTodos } = require('../Service/treinosService');

function Listar(req, res) {
    const treinos = service.ListarTodos();
    res.status(200).json(treinos);
}

function BuscarUm(req, res) {
    const id = Number(req.params.id);
    const treino = service.BuscarPorID(id);

    if(treino === undefined){
        return res.status(404).json({ erro: 'treino nao encontrado.'});
    }
    res.status(200).json(treino);
}

function criar(req, res) {
    const resultado = service.CriarTreino(req.body);

    if(resultado.erro !== undefined){
        return res.status(400).json ({ erro: resultado.erro});
    }
    res.status(201).json(resultado.treino);
}

function Atualizar(req, res) {
    const id = Number(req.params.id);
    const resultado = service.AtualizarTreino(id, req.body);

    if(resultado.NaoEncontrado === true) {
        return res.status(404).json({ erro: 'Treino nao encontrado'});
    }
    if(resultado.erro !== undefined) {
        return res.status(400).json({ erro: resultado.erro});
    }
    res.status(200).json(resultado.treino);
}

function Remover(req, res) {
    const id = Number (req.params.id);
    const resultado = service.RemoverTreino(id);

    if(resultado.NaoEncontrado === true) {
        return res.status(404).json({ erro: 'Treino nao encontrado'});
    }
    res.status(204).end();
}

module.exports = { Listar, BuscarUm, Criar, Atualizar, Remover };