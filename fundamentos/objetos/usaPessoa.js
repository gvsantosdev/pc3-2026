const Pessoa = require('./Pessoa.js');

const joao = new Pessoa(80, 1.75);

const pedro = new Pessoa(60, 1.69);

var imc = joao.imc();

console.log(imc);
console.log(pedro.imc());

const gustavo = new Pessoa();
gustavo.peso = 100;
gustavo.altura = 1.6;

console.log(gustavo.imc());