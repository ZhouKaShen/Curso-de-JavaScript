/*

É como uma pequena "fábrica" onde você faz uma entrada e ele te dá uma saída.

Pode ser encarado como "mini-programas" projetados para fazer uma tarefa
que vai constribuir para todo código.

Uma função JavaScript é executada quando "algo" a invoca (chama-a).
*/

function soma(valor1, valor2) {
    return valor1 + valor2;
}

// Função da cotação do dólar
function realParaDolar(real, cotacaoDolar) {
    return real * cotacaoDolar;
}

function alertaHello() {
    alert("Olá pessoal")
}

function paraCelsius(valorFahrenheit) {
    return (5/9) * (valorFahrenheit - 32);

}

alertaHello();

var valorReal = 7.89;
var cotacao = 5.08;

var total = realParaDolar(valorReal, cotacao);

function teste() {
    var x = 10;
    console.log(x)
}

teste()

alert("O valor em real é R$: " + valorReal + " o valor em dólar é $: " + parseFloat(total.toFixed(2)));

var x = paraCelsius(77);
alert("A temperatura é de " + x + " graus celsius");
