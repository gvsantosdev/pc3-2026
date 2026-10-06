const util = require ('../biblioteca/util.js')

class Pessoa {

    #nome;
    #email;
    #cpf;

    constructor(nome, email, cpf) {
        this.setNome(nome);
        this.setEmail(email);
        this.setCPF(cpf);
    }

    setNome(nome){
        if(nome != null && nome.length >= 3){
            this.#nome = nome;
            return true;
        }
        return false;
    }

    getNome(){
        return this.#nome;
    }

    setEmail(email) {
        if(util.validarEmail(email)) {
            this.#email = email;
            return true;
        }
        return false;
    }
    getEmail () {
        return this.#email;
    }
    setCPF(cpf) {
        if(util.validarCPF(cpf)) {
            this.#cpf = cpf;
            return true;
        }
        return false;
    }
    getCPF() {
        return this.#cpf;
    }
}
module.exports = Pessoa;