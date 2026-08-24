class Aluno {
    #matricula;
    #curso;
    escola;

    setMatricula(matricula) {
        this.#matricula = matricula;
    }
    getMatricula() {
        return this.#matricula;
    }

    setCurso(curso) {
        this.#curso = curso;
        }
        
    getCurso() {
        return this.#curso;
    }

}

module.exports = Aluno;

