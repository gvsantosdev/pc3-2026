class Conversor {

     celsiusParaFahrenheit (x) {
        return ((9/5) * x + 32);
    }
    
     minutosParaHoras(x) {
        return x  / 60;
    }
    
    
    quilometrosParaMilhas(x) {
        return x * 0.621371
    }
    

    
}
module.exports = Conversor;