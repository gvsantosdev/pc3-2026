const Pessoa = require('./Pessoa.js')

class PF extends Pessoa {
    #cpf;

    setCPF(cpf) {
        if (cpf) {
            this.#cpf = cpf;
            return true;
        }
        else {
        return false;
    } 
    }


    getCPF() {
        return this.#cpf;
    }
}

module.exports = PF;