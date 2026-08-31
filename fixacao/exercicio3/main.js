const CarteiraDigital = require('./CarteiraDigital');

const carteira = new CarteiraDigital();

carteira.definirTitular('João Silva');
carteira.depositar(200);

//console.log(carteira.consultarTitular());

console.log(carteira.consultarSaldo());

carteira.sacar(50);

carteira.exibirInformacoes();