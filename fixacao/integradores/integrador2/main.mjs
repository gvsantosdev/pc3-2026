
import IEclss, { IEfunc, IEjson } from "./objetos/IE.mjs";
import PJ from "./pessoas/PJ.mjs";

function mostrarIE(ie) {
    const pj = ie.getPJ();
    console.log("=== Inscrição Estadual ===");
    console.log(`Número: ${ie.getNumero()}`);
    console.log(`Estado: ${ie.getEstado()}`);
    console.log(`Data de Registro: ${ie.getDataRegistro()?.toLocaleString("pt-BR")}`);
    console.log(`Pessoa Jurídica: ${pj ? pj.getRazaoSocial() : "(não associada)"}`);
}

function mostrarPJ(pj) {
    console.log("=== Pessoa Jurídica ===");
    console.log(`Nome: ${pj.getNome()}`);
    console.log(`E-mail: ${pj.getEmail()}`);
    console.log(`CNPJ: ${pj.getCNPJ()}`);
    console.log(`Razão Social: ${pj.getRazaoSocial()}`);
}


const pj1 = new PJ("Padaria Pão Quente", "contato@paoquente.com", "12345678000190", "Pão Quente Alimentos LTDA");
const pj2 = new PJ("Tech Solutions", "ti@techsolutions.com", "98765432000110", "Tech Solutions Informática ME");


console.log("===== TESTES DOS SETTERS DA PJ (herdados + próprios) =====");
console.log("setNome('Padaria Pão Quente'):", pj1.setNome("Padaria Pão Quente")); 
console.log("setNome('Ab'):", pj1.setNome("Ab"));                                
console.log("setEmail('novo@paoquente.com'):", pj1.setEmail("novo@paoquente.com")); 
console.log("setEmail('invalido'):", pj1.setEmail("invalido"));                 
console.log("setCNPJ('123'):", pj1.setCNPJ("123"));                           
console.log("setCNPJ('12345678000190'):", pj1.setCNPJ("12345678000190"));         
console.log("setRazaoSocial(''):", pj1.setRazaoSocial(""));                       
console.log("setRazaoSocial('Pão Quente Alimentos LTDA'):", pj1.setRazaoSocial("Pão Quente Alimentos LTDA"));


const dataRegistro = new Date(2024, 2, 15, 9, 30, 0); // 15/03/2024 09:30


const ie1 = new IEclss();
ie1.setNumero("123456789");
ie1.setEstado("go");
ie1.setDataRegistro(dataRegistro);


const ie2 = IEfunc(); 
ie2.setNumero("987654321");
ie2.setEstado("DF");
ie2.setDataRegistro(new Date(2023, 10, 5, 14, 0, 0));


IEjson.setNumero("555444333");
IEjson.setEstado("MG");
IEjson.setDataRegistro(new Date(2022, 6, 20, 8, 15, 0));


const objetoInvalido = { nome: "Empresa Inválida" };

console.log("\n===== TESTE DO instanceof (objeto inválido) =====");
console.log("IEclss.setPJ(objetoInvalido): ", ie1.setPJ(objetoInvalido));     
console.log("IEfunc().setPJ(objetoInvalido):", ie2.setPJ(objetoInvalido));    
console.log("IEjson.setPJ(objetoInvalido): ", IEjson.setPJ(objetoInvalido));  


console.log("\n===== TESTE DO instanceof (objeto PJ válido) =====");
console.log("IEclss.setPJ(pj1): ", ie1.setPJ(pj1));     
console.log("IEfunc().setPJ(pj2):", ie2.setPJ(pj2));   
console.log("IEjson.setPJ(pj1): ", IEjson.setPJ(pj1));  

console.log("\n===== RELATÓRIO FINAL =====\n");

console.log("##### Usando IEclss #####");
mostrarPJ(ie1.getPJ());
console.log();
mostrarIE(ie1);

console.log("\n##### Usando IEfunc() #####");
mostrarPJ(ie2.getPJ());
console.log();
mostrarIE(ie2);

console.log("\n##### Usando IEjson #####");
mostrarPJ(IEjson.getPJ());
console.log();
mostrarIE(IEjson);

console.log("\n===== DESAFIO EXTRA 2: getPJ() em implementações diferentes =====");
console.log(`IEclss  -> Razão Social: ${ie1.getPJ().getRazaoSocial()}`);  
console.log(`IEfunc() -> Razão Social: ${ie2.getPJ().getRazaoSocial()}`); 

console.log("\n===== DESAFIO AVANÇADO: mostrarIE() =====");
mostrarIE(ie1);
console.log();
mostrarIE(ie2);
console.log();
mostrarIE(IEjson);


console.log("\n===== VALIDAÇÃO DE DATA (instanceof Date) =====");
console.log("setDataRegistro('15/03/2024'):", ie1.setDataRegistro("15/03/2024")); 
console.log("setDataRegistro(new Date()):  ", ie1.setDataRegistro(new Date()));   
