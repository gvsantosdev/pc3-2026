
export default class Endereco {

    #cep;
    #logradouro;
    #bairro;
    #cidade;      
    #uf;

  
    #complemento;
    #estado;      
    #regiao;      
#ddd;
    #ibge;      

    async setCep(cep) {

        const cepLimpo = String(cep).replace(/\D/g, "");
        if (cepLimpo.length !== 8) {
            throw new Error("CEP inválido: informe 8 dígitos.");
        }

        const url = `https://viacep.com.br/ws/${cepLimpo}/json/`;
        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error(`Erro na consulta do CEP (HTTP ${resposta.status}).`);
        }

        const dados = await resposta.json();


        if (dados.erro) {
            throw new Error("CEP não encontrado.");
        }


        this.#cep = dados.cep;
        this.#logradouro = dados.logradouro;
        this.#bairro = dados.bairro;
        this.#cidade = dados.localidade;
        this.#uf = dados.uf;
        this.#complemento = dados.complemento;
        this.#estado = dados.estado;
        this.#regiao = dados.regiao;
        this.#ddd = dados.ddd;
        this.#ibge = dados.ibge;
    }


    getCep() { return this.#cep; }
    getLogradouro() { return this.#logradouro; }
    getBairro() { return this.#bairro; }
    getCidade() { return this.#cidade; }
    getUf() { return this.#uf; }


    getComplemento() { return this.#complemento; }
    getEstado() { return this.#estado; }
    getRegiao() { return this.#regiao; }
    getDdd() { return this.#ddd; }
    getIbge() { return this.#ibge; }

    mostrarEnderecoCompleto() {
        const complemento = this.#complemento ? `, ${this.#complemento}` : "";
        return `${this.#logradouro}${complemento} - ${this.#bairro}, ` +
               `${this.#cidade}/${this.#uf} (${this.#estado}, região ${this.#regiao}) - ` +
               `CEP ${this.#cep} - DDD ${this.#ddd}`;
    }
}
