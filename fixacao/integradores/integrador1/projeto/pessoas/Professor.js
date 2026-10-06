const Pessoa = require("./Pessoa.js");

class Professor extends Pessoa {
    #disciplina;

    constructor(nome, email, cpf, disciplina) {
        super(nome, email, cpf);
        this.setDisciplina(disciplina);
    }
    setEmail(email){
        if(email != null && email.endsWith(".edu.br")){
            return super.setEmail(email);
        }
        return false;
    }

    setDisciplina(disciplina) {
        if (typeof disciplina === "string" && disciplina.trim() !== "") {
            this.#disciplina = disciplina;
            return true;
        }
        return false;
    }

    getDisciplina() {
        return this.#disciplina;
    }
}
module.exports = Professor;