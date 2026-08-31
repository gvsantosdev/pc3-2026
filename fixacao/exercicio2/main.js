const Conv = require('./Conversor.js')
const conversor = new Conv();

console.log(`25ºC = ${conversor.celsiusParaFahrenheit(25)}ºF`);
console.log(`10 km ${conversor.quilometrosParaMilhas(10)} milhas`);
console.log(`150 minutos ${conversor.minutosParaHoras(150)} horas`);
