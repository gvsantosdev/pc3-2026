import Pessoa from "./Pessoa.js";

class PJ extends Pessoa {

    #cnpj;
    #razaoSocial;

    constructor(nome, email, cnpj, razaoSocial) {
        super(nome, email);
        this.setCNPJ(cnpj);
        this.setRazaoSocial(razaoSocial);
    }

    setCNPJ(cnpj) {
        if (typeof cnpj === "string" && cnpj.length === 14 && /^\d{14}$/.test(cnpj)) {
            this.#cnpj = cnpj;
            return true;
        }
        return false;
    }

    getCNPJ() {
        return this.#cnpj;
    }

    setRazaoSocial(razaoSocial) {
        if (typeof razaoSocial === "string" && razaoSocial.trim().length >= 3) {
            this.#razaoSocial = razaoSocial;
            return true;
        }
        return false;
    }

    getRazaoSocial() {
        return this.#razaoSocial;
    }
}

export default PJ;
