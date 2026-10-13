import Endereco from "./Endereco.mjs";

function exibir(end) {
    console.log("CEP:", end.getCep());
    console.log("Logradouro:", end.getLogradouro());

    console.log("Complemento:", end.getComplemento() || "não informado");
    console.log("Bairro:", end.getBairro());
    console.log("Cidade:", end.getCidade());
    console.log("UF:", end.getUf());
    console.log("Estado:", end.getEstado());
    console.log("Região:", end.getRegiao());
    console.log("DDD:", end.getDdd());
    console.log("Código IBGE:", end.getIbge());

    console.log("Endereço completo:", end.mostrarEnderecoCompleto());
}

async function consultar(titulo, cep) {
    console.log(`\n===== ${titulo} (${cep}) =====`);
    const end = new Endereco();
    try {
        await end.setCep(cep);        exibir(end);
    } catch (erro) {
        console.log("Erro ao consultar o CEP:", erro.message);
    }
}

async function main() {
    await consultar("Teste 1: CEP válido", "72015565");
    await consultar("Teste 2: CEP com formato inválido", "123");
    await consultar("Teste 3: CEP inexistente", "99999999");
    await consultar("Teste 4: CEP válido com complemento", "01001000"); // Praça da Sé, SP
}

main();
