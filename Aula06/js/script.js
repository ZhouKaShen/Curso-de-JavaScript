/* OBJETOS
Objetos são basicamente variáveis com muitos valores dentro.

Ex: const carro = {marca:"ford", modelo: "ka", ano: 2015}

Os valores dentro de um objeto são chamados propriedades.

Objetos também podem ter métodos. Um Método é uma função colocada dentro de uma propriedade e elas podem ser invocadas.

Objeto -> Propriedades: valores -> métodos(função).

Convenção: escrever Objetos usando o const para não poder mudar o valor.
Objeto literal: valores definidos diretamente.
Ex: Objeto carro. Ele já possui os seus valores.


Importância do Objeto: são muito úteis para você colocar coleções ou conjunto de informações dentro de uma variável só ou em outras palavras, num Objeto.
Pegar um item do próprio objeto, usar o this e a propriedade que você quer.

*/

const carro = {
    marca: "ford",
    modelo: "ka",
    ano: 2015,
    placa: "ABC-1234",
    buzina: function() {
        alert("Buzinando")
    },
    completo: function() {
        return "A marca do carro é " + this.marca + " e o modelo do carro é " + this.modelo;
    }
};

console.log(carro.placa);
console.log(carro["marca"]);
carro.buzina();
console.log(carro.completo());