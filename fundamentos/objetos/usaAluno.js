const Aluno = require('./escola/Aluno');

const joao = new Aluno();

joao.escola = "IFB";
joao.setMatricula(12345);
joao.setCurso("Progamação de FrntEnd");

joao.matricula = 1234; // ERRO

console.log(joao.getMatricula());
console.log(joao.getCurso());
console.log(joao.escola);
console.log(joao.matricula);