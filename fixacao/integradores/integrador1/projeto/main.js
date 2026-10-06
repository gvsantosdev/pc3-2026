const Pessoa = require("./pessoas/Pessoa.js");
const Aluno = require("./pessoas/Aluno.js");
const Professor = require("./pessoas/Professor.js");
const util = require("./biblioteca/util.js");

// Pessoas
const pessoa1 = new Pessoa("João Ferreira Gomes", "joao10@gmail.com", "12345678911"); // válida
const pessoa2 = new Pessoa("Pedro Gomes Silva", "pedro1@email", "123");               // e-mail e CPF inválidos

// Alunos
const aluno1 = new Aluno("Gustavo Vieira dos Santos", "gustavo@gmail.com", "07165724111", "202400000001"); // válido
const aluno2 = new Aluno("Mila Pereira Alves", "mila@ifg.edu.br", "11111111111", "123");                   // matrícula inválida

// Professores
const professor1 = new Professor("Pedro Emanuel", "emanuel@ifg.edu.br", "00000012351", "Matemática");      // válido
const professor2 = new Professor("Vasconcelos Silva", "vasconcelos@gmail.com", "09876543123", "Física");   // e-mail rejeitado (não é .edu.br)


console.log("Pessoa 1: ");
util.mostraDados(pessoa1);
console.log("Pessoa 2: ");
util.mostraDados(pessoa2);
console.log("Aluno 1: ");
util.mostraDados(aluno1);
console.log("Aluno 2: ");
util.mostraDados(aluno2);
console.log("Professor 1: ");
util.mostraDados(professor1);
console.log("Professor 2: ");
util.mostraDados(professor2);

console.log("\n===== TESTES DOS SETTERS =====");
console.log("email:('x@gmail.com'):", professor1.setEmail("x@gmail.com"));         // false
console.log("Email('novo@ifg.edu.br'):", professor1.setEmail("novo@ifg.edu.br")); // true
console.log("Matricula('202400000003'):", aluno2.setMatricula("202411111111"));       // false
console.log("CPF('12345678911'):", pessoa2.setCPF("12345678911"));                   // true
console.log("validarCPF('123'):", util.validarCPF("123"));      //false