const Cliente = require('./objetos/Cliente.js');
const Animal = require('./objetos/Animal.js');
const Prontuario = require('./objetos/Prontuario.js');
const Veterinario = require('./objetos/Veterinario.js');

// 1. Cliente
const gustavo = new Cliente();
gustavo.setNome('Gustavo');
gustavo.setTelefone('61-991903394');

// 2. Animais
const animal1 = new Animal();
animal1.setNome('Mimi');
animal1.setEspecie('Gato');

const animal2 = new Animal();
animal2.setNome('Rex');
animal2.setEspecie('Cachorro');

// 3. Prontuários
const prontuario1 = new Prontuario();
prontuario1.setNumero(1);
prontuario1.setObservacoes('Sentindo febre');

const prontuario2 = new Prontuario();
prontuario2.setNumero(2);
prontuario2.setObservacoes('Mal estar');

// 4. Veterinários
const vet1 = new Veterinario();
vet1.setNome('Dra. Ana Souza');
vet1.setCrmv('CRMV-GO 1234');

const vet2 = new Veterinario();
vet2.setNome('Dr. Carlos Lima');
vet2.setCrmv('CRMV-GO 5678');

// 5. Relacionamentos
gustavo.addAnimal(animal1);          
gustavo.addAnimal(animal2);

animal1.setProntuario(prontuario1); 
prontuario2.setAnimal(animal2);      

animal1.addVeterinario(vet1);        
animal1.addVeterinario(vet2);
animal2.addVeterinario(vet1);
vet2.addAnimal(animal2);             

console.log('=== CLIENTE ===');
console.log('Nome:', gustavo.getNome());
console.log('Telefone:', gustavo.getTelefone());
console.log();
gustavo.listarAnimais();

console.log('\n=== ANIMAIS ===');
for (const animal of gustavo.getAnimais()) {
    const p = animal.getProntuario();
    console.log(`\n${animal.getNome()} (${animal.getEspecie()})`);
    console.log(`Prontuário nº ${p.getNumero()}: ${p.getObservacoes()}\n`);
    animal.listarVeterinarios();
}

console.log('\n=== INFORMAÇÕES COMPLETAS ===');
console.log(animal1.getInformacoes());
console.log(animal2.getInformacoes());

console.log('\n=== REFERÊNCIAS CRUZADAS ===');
console.log('animal1.getCliente() === gustavo:', animal1.getCliente() === gustavo);
console.log('prontuario1.getAnimal() === animal1:', prontuario1.getAnimal() === animal1);
console.log('prontuario2.getAnimal() === animal2:', prontuario2.getAnimal() === animal2);
console.log('animal2.getProntuario() === prontuario2:', animal2.getProntuario() === prontuario2);
for (const vet of [vet1, vet2]) {
    const nomes = vet.getAnimais().map(a => a.getNome()).join(', ');
    console.log(`${vet.getNome()} atende: ${nomes}`);
}
console.log('animal1 tem vet2:', animal1.getVeterinarios().includes(vet2));
console.log('animal2 tem vet2:', animal2.getVeterinarios().includes(vet2));