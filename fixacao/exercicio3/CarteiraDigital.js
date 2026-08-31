class CarteiraDigital {
    #titular;
    #saldo = 0.0;

    definirTitular(titular){
        if (titular) {
            this.#titular = titular;
            return true;
        }
        else {
            return false;
        }
    }

    consultarTitular() {
        return this.#titular;
    }

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
            return true;
        }
        else {
            return false;
        }
    }

    sacar(valor) {
        if(valor > this.#saldo) {
            return false;
        }
        else {
            this.#saldo -= valor;
            return true;
        }
    }

    consultarSaldo() {
        return this.#saldo;
    }
    exibirInformacoes(titular) {
        console.log(`Titular: ${this.#titular}`)
        console.log(`Saldo: R$${this.#saldo}`)
    }
}

module.exports = CarteiraDigital;
