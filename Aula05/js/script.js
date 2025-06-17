/*
Uma função JavaScript é um bloco de código projetado para executar uma tarefa específica.

É como uma pequena "fábrica" onde você faz uma entrada e ele te dá uma saída.

Pode ser encarado como "mini-programas" projetados para fazer uma tarefa
que vai constribuir para todo código.

Uma função JavaScript é executada quando "algo" a invoca (chama-a).
*/

// // Função de soma
// function soma (valor1, valor2) {
//     return valor1 + valor2;
// }

// // Função de cotação do dólar
// function realParaDolar(real, cotacaoDolar) {
//     return real * cotacaoDolar;
// }

// var valorReal = 7.89;
// var cotacao = 5.08;

// // document.getElementById("texto").innerHTML = soma(10, 23);

// var total = realParaDolar(valorReal, cotacao);

// alert("O valor em real é R$: " + valorReal + " o valor em dólar U$ é: " + total);

function alertaHello() {
     alert("Olá pessoal");
}

function paraCelsius(valorFahrenheit) {
    return (5/9) * (valorFahrenheit - 32);
}

var x = paraCelsius(77);
alert("A temperatura é de " + x + " graus celsius");

function minhaFuncao() {
    var x = 2;
}