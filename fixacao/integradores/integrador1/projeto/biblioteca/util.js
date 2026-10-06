
function validarEmail(email) {
    return typeof email === "string" && email.includes("@") &&
           (email.endsWith(".com") || email.endsWith(".edu.br"));
}
function validarMatricula(matricula) {
    return matricula != null && matricula.length == 12;
}

function validarCPF(cpf) {
    return cpf != null && cpf.length === 11;
}

function mostraDados(objeto) {
    const Aluno = require("../pessoas/Aluno.js");
    const Professor = require("../pessoas/Professor.js");

    if (!objeto) {
        console.log("Objeto inválido.");
        return;
    }
    console.log(`Nome: ${objeto.getNome()}`);
    console.log(`CPF: ${objeto.getCPF()}`);
    console.log(`Email: ${objeto.getEmail()}`);
    if (objeto instanceof Aluno) {
        console.log(`Matricula: ${objeto.getMatricula()}`);
    }
    if (objeto instanceof Professor) {
        console.log(`Disciplina: ${objeto.getDisciplina()}`);
    }
}

module.exports = {
    validarEmail,
    validarMatricula,
    validarCPF,
    mostraDados
};