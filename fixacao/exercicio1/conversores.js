function celsiusParaFahrenheit (x) {
    return ((9/5) * x + 32);
}

function horasParaMinutos(x) {
    return x  * 60;
}

function idadeEmDias(x) {
    return x * 365;
}

function kmParaMetros(x) {
    return x * 1000;
}

function consumoMedio (x, y) {
    return x / y;
}

module.exports = {
    celsiusParaFahrenheit, horasParaMinutos, idadeEmDias, kmParaMetros, consumoMedio
}