// Arquivo criado em projeto no www.stackblitz.com denominado declvar.js

var x = 6;
console.log(x);

const y = "a";  // definição de variável const
// y = "b";
console.log(y);

// VARIÁVEIS GLOBAIS E LOCAIS
{
  let z = 4;
  console.log(x);
  console.log(y);
  console.log(z);
}

// console.log(z);  <-- Essa linha, se descomentada, gera erro pois z é local ao bloco acima