/*
var valor1, valor2, adicao, subtracao, multiplicacao, divisao, incrementacao;

valor1 = 5;
valor2 = 2;


São os sinais que usamos: + - * / = ++ -- += -= && || etc...

São separados em 6 "categorias":
1) Operadores Aritméticos

// adicao = valor1 + valor2; // Adição
// subtracao = valor1 - valor2; // Subtração
// multiplicacao = valor1 * valor2; // Multiplicação
// divisao = valor1 / valor2; // Divisão
// incrementacao = ++valor1; // Incrementação
// decremento = --valor1
alert("O valor ficou: " + valor1);

2) Operadores de Atribuição
valor1 = 5;
valor2 = 2;

valor1 += valor2; // valor = valor1 + valor2
valor1 -= valor2; // valor = valor1 - valor2
valo1 *= valor2; // valor = valor1 * valor2
valor1 /= valor2; // valor = valor1 / valor2

3) Operadores de Sequência

var valor1, valor2;

valor1 = "Dimitri";
valor2 = "Teixeira";

total = valor1 + " " + valor2;
alert(total);

4) Operadores de Comparação

var valor1, valor2, total;
valor1 = 8;
valor2 = 10;

// Vai dar valor booleano(true ou false)
total = (valor1 == valor2) // Vai comparar se é igual ao valor
total = (valor1 === valor2) // Vai comparar o valor e o tipo
total = (valor1 !== valor2) // Vai comparar se é diferente o valor e verifica o tipo
total = (valor1 > valor2) // Vai comparar se é maior
total = (valor1 < valor2) // Vai comparar se é menor
total = (valor1 >= valor2) // Vai comparar se é maior ou igual
total = (valor1 <= valor2) // Vai comparar se é menor ou igual
total = (valor1 != valor2) // Vai comparar se é diferente



alert(total)

5) Operadores Condicional (Ternário)

var idade, carteiraMotorista;
idade = 18;
carteiraMotorista = (idade < 18) ? "não pode dirigir":"pode dirigir";
alert("Ele(a)" + " " + carteiraMotorista + " " + "e a idade dele(a) é: " + idade + "!");

6) Operadores Lógicos


*/

var idade, eleitor, resultado;
idade = 71;
eleitor = (idade < 18) ? "Não, Eleitor" : "Sim, Eleitor";
resultado = !(idade === 65); // true // false
alert("A pessoa pode ser eleitor? " + eleitor);
alert("A idade da pessoa é maior que 65 anos? " + resultado);
