const Animal = require('./Animal.js');

class Cliente {
    #nome;
    #telefone;
    #animais = [];
 
    setNome(nome) {
        if (nome) {
            this.#nome = nome;
            return true;
        }
        return false;
    }
    getNome() {
        return this.#nome;
    }
 
    setTelefone(telefone) {
        if (telefone) {
            this.#telefone = telefone;
            return true;
        }
        return false;
    }
    getTelefone() {
        return this.#telefone;
    }
 
    addAnimal(animal) {
        if (!(animal instanceof Animal)) {
            return false;
        }
        for (const a of this.#animais) {
            if (a === animal) {
                return false;                      // já está na lista
            }
        }
        this.#animais.push(animal);                // primeiro adiciona depois cria a referencia cruzada
        if (animal.getCliente() !== this) {        
            animal.setCliente(this);
        }
        return true;
    }
    getAnimais() {
        return this.#animais;
    }
 
    listarAnimais() {
        console.log(`Cliente: ${this.#nome}\n`);
        console.log('Animais:\n');
        for (const animal of this.#animais) {
            console.log(`${animal.getNome()}`);
        }
    }
}
module.exports = Cliente;
 