class Pessoa {

    #nome;
    #email;

    setNome(nome){
        if(nome) {
            this.#nome = nome;
            return true;
        }
        else {
            return false;
        }
    }

    getNome(){
        return this.#nome;
    }

    setEmail(email) {
        if (email) {
            this.#email = email;
            return true;
        }
        else {
            return false;
        }
    }
    getEmail(){
        return this.#email;
    }
}

module.exports = Pessoa;