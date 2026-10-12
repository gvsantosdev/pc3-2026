import PJ from "../pessoas/PJ.mjs";

const validarNumero = (numero) => typeof numero === "string" && numero.trim() !== "";
const validarEstado = (estado) => typeof estado === "string" && /^[A-Za-z]{2}$/.test(estado);
const validarData = (data) => data instanceof Date && !isNaN(data);

class IEclss {
    #numero;
    #estado;
    #dataRegistro;
    #pj;

    setNumero(numero) {
        if (validarNumero(numero)) { this.#numero = numero; return true; }
        return false;
    }
    getNumero() { return this.#numero; }

    setEstado(estado) {
        if (validarEstado(estado)) { this.#estado = estado.toUpperCase(); return true; }
        return false;
    }
    getEstado() { return this.#estado; }

    setDataRegistro(data) {
        if (validarData(data)) { this.#dataRegistro = data; return true; }
        return false;
    }
    getDataRegistro() { return this.#dataRegistro; }

  
    setPJ(pj) {
        if (pj instanceof PJ) {
            this.#pj = pj;
            return true;
        }
        return false;
    }
    getPJ() { return this.#pj; }
}

function IEfunc() {

    let numero;
    let estado;
    let dataRegistro;
    let pj;

    return {
        setNumero(n) {
            if (validarNumero(n)) { numero = n; return true; }
            return false;
        },
        getNumero() { return numero; },

        setEstado(e) {
            if (validarEstado(e)) { estado = e.toUpperCase(); return true; }
            return false;
        },
        getEstado() { return estado; },

        setDataRegistro(d) {
            if (validarData(d)) { dataRegistro = d; return true; }
            return false;
        },
        getDataRegistro() { return dataRegistro; },

        setPJ(p) {
            if (p instanceof PJ) { pj = p; return true; }
            return false;
        },
        getPJ() { return pj; }
    };
}

const IEjson = {
    _numero: undefined,
    _estado: undefined,
    _dataRegistro: undefined,
    _pj: undefined,

    setNumero(numero) {
        if (validarNumero(numero)) { this._numero = numero; return true; }
        return false;
    },
    getNumero() { return this._numero; },

    setEstado(estado) {
        if (validarEstado(estado)) { this._estado = estado.toUpperCase(); return true; }
        return false;
    },
    getEstado() { return this._estado; },

    setDataRegistro(data) {
        if (validarData(data)) { this._dataRegistro = data; return true; }
        return false;
    },
    getDataRegistro() { return this._dataRegistro; },

    setPJ(pj) {
        if (pj instanceof PJ) { this._pj = pj; return true; }
        return false;
    },
    getPJ() { return this._pj; }
};

export default IEclss;
export { IEfunc, IEjson };
