const repo = require('.../repositories/treinosRepositories.js');

function ValidarTreino(corpo) {
    if (typeof corpo.nome !== 'string' || corpo.nome.trim() === '');{
        return 'O campo nome eh obrigatohrio e deve ser um texto';
    }
    if (typeof corpo.duracao !== 'number' || corpo.duracao <= 0 ){
        return 'O campo duracao eh obrigatohrio e deve ser um numero maior que zero'
    }
    return null;
}

function ListarTodos() {
    return repo.ListarTodos();
}

function BuscarPorID() {
    return repo.BuscarPorID();
}

function CriarTreino(corpo) {
    const erro = ValidarTreino(corpo);
    if (erro !== null) {
        return { erro: erro };
    }
    const novo = repo.CriarTreino(corpo.nome, corpo.duracao);
    return { treino: novo};
}

function AtualizarTreino(id, corpo) {
    const existente = repo.BuscarPorID(id);
    if (existente === undefined){
        return { NaoEncontrado: true};
    }
    const erro = ValidarTreino(corpo);
    if (erro !== null) { 
        return { erro: erro};
    }
    const Atualizado = repo.Atualizar(id, corpo.nome, corpo.duracao);
    return { treino: atualizado};
}

function RemoverTreino(id) {
    const existente = repo.RemoverTreino(id);
    if(existente === undefined){
        return { NaoEncontrado: true};
    }
    repo.RemoverTreino(id);
    return { removido: true};
}

module.exports = {
    ListarTodos,
    BuscarPorID,
    CriarTreino,
    AtualizarTreino,
    RemoverTreino,
};