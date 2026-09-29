
class Animal {
    #nome;
    #especie;
    #cliente;
    #prontuario;
    #veterinarios = [];
 
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
 
    setEspecie(especie) {
        if (especie) {
            this.#especie = especie;
            return true;
        }
        return false;
    }
    getEspecie() {
        return this.#especie;
    }
 
    setCliente(cliente) {
        const Cliente = require('./Cliente.js');
        if (cliente instanceof Cliente) {
            this.#cliente = cliente;
 
            let clienteJaTemAnimal = false;
            for (const a of cliente.getAnimais()) {
                if (a === this) {
                    clienteJaTemAnimal = true;
                }
            }
            if (!clienteJaTemAnimal) {
                cliente.addAnimal(this);
            }
            return true;
        }
        return false;
    }
    getCliente() {
        return this.#cliente;
    }
 
    setProntuario(prontuario) {
        const Prontuario = require('./Prontuario.js');
        if (prontuario instanceof Prontuario) {
            this.#prontuario = prontuario;
            if (prontuario.getAnimal() !== this) {
                prontuario.setAnimal(this);
            }
            return true;
        }
        return false;
    }
    getProntuario() {
        return this.#prontuario;
    }
 
    addVeterinario(veterinario) {    
    const Veterinario = require('./Veterinario.js');

        if (!(veterinario instanceof Veterinario)) {
            return false;
        }
        for (const v of this.#veterinarios) {
            if (v === veterinario) {
                return false;                      // já está na lista
            }
        }
        this.#veterinarios.push(veterinario);
        veterinario.addAnimal(this);
        return true;
    }
    getVeterinarios() {
        return this.#veterinarios;
    }
 
    listarVeterinarios() {
        console.log(`Animal: ${this.#nome}\n`);
        console.log('Veterinários:\n');
        for (const veterinario of this.#veterinarios) {
            console.log(` ${veterinario.getNome()} (${veterinario.getCrmv()})`);
        }
    }
 
    getInformacoes() {
        let nomeCliente;
        if (this.#cliente) {
            nomeCliente = this.#cliente.getNome();
        }
    
        let numeroProntuario;
        if (this.#prontuario) {
            numeroProntuario = this.#prontuario.getNumero();
        }
    
        const nomesVeterinarios = [];
        for (const v of this.#veterinarios) {
            nomesVeterinarios.push(v.getNome());
        }
    
        return {
            nome: this.#nome,
            especie: this.#especie,
            cliente: nomeCliente,
            prontuario: numeroProntuario,
            veterinarios: nomesVeterinarios
        };
    }
}
module.exports = Animal;