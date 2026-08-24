const Pessoa = require('./Pessoa.js');

const joao = new Pessoa(80, 1.75);

const pedro = new Pessoa(60, 1.69);

console.log(pedro.imc());