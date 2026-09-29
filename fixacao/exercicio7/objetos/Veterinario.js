const Animal = require('./Animal.js');

class Veterinario {
    #nome;
    #crmv;
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
 
    setCrmv(crmv) {
        if (crmv) {
            this.#crmv = crmv;
            return true;
        }
        return false;
    }
    getCrmv() {
        return this.#crmv;
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
        this.#animais.push(animal);
        animal.addVeterinario(this);               // referência cruzada automática
        return true;
    }
    getAnimais() {
        return this.#animais;
    }
}
module.exports = Veterinario;