const Animal = require('./Animal.js');

class Prontuario {
    #numero;
    #observacoes;
    #animal;
 
    setNumero(numero) {
        if (numero) {
            this.#numero = numero;
            return true;
        }
        return false;
    }
    getNumero() {
        return this.#numero;
    }
 
    setObservacoes(observacoes) {
        if (observacoes) {
            this.#observacoes = observacoes;
            return true;
        }
        return false;
    }
    getObservacoes() {
        return this.#observacoes;
    }
 
    setAnimal(animal) {
        if (animal instanceof Animal) {
            this.#animal = animal;
            if (animal.getProntuario() !== this) {
                animal.setProntuario(this);
            }
            return true;
        }
        return false;
    }
    getAnimal() {
        return this.#animal;
    }
}
module.exports = Prontuario;
 