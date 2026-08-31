const Pessoa = require('./Pessoa');
const PF = require('./PF');
const x = new Pessoa();
let resposta = x.setNome('');
console.log(resposta);
if (resposta) {
  console.log(x.getNome());
} else {
  console.log("Nome vazio");
}
resposta = x.setEmail('vaguetti@gmail.com');
console.log(resposta);
if (resposta) {
  console.log(x.getEmail());
} else {
  console.log("E-mail vazio");
}
const y = new PF();
resposta = y.setNome('Pedro');
console.log(resposta);
if (resposta) {
  console.log(y.getNome());
}
resposta = y.setEmail('');
console.log(resposta);
if (resposta) {
  console.log(y.getEmail());
} else {
  console.log("Email vazio");
}
resposta = y.setCPF('123456789-10');
console.log(resposta);
if (resposta) {
  console.log(y.getCPF());
}