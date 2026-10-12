
function validarEmail(email) {
    return typeof email === "string" && email.includes("@") &&
           (email.endsWith(".com") || email.endsWith(".edu.br"));
}

class Pessoa {

    #nome;
    #email;

    constructor(nome, email) {
        this.setNome(nome);
        this.setEmail(email);
    }

    setNome(nome) {
        if (typeof nome === "string" && nome.length >= 3) {
            this.#nome = nome;
            return true;
        }
        return false;
    }

    getNome() {
        return this.#nome;
    }

    setEmail(email) {
        if (validarEmail(email)) {
            this.#email = email;
            return true;
        }
        return false;
    }

    getEmail() {
        return this.#email;
    }
}

export default Pessoa;
