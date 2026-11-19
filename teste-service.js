const service = require("./Services/treinosService.js");

console.log(service.listarTodos());
console.log(service.criarTreino({ nome: 'Teste sem servidor', duracao: 181 }));
console.log(service.criarTreino({ nome: '', duracao: '15' }));