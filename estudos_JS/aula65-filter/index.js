
//               0  1   2   3  4  5  6  7  8  9   10  11  12 indice
/* const numeros = [5, 50, 80, 1, 2, 3, 6, 8, 7, 11, 15, 22, 27];
//    array                    valores

/* function call (valor, indice, array) {
    return valor > 10;   
} */

/* const maior10 = numeros.filter(valor => valor > 10);

console.log(maior10); */ 

const pessoas = [
    {nome: 'matheus', idade: 20},
    {nome: 'maria', idade: 50},
    {nome: 'joao', idade: 30},
    {nome: 'santos', idade: 25},
    {nome: 'souza', idade: 57},
    {nome: 'lucas', idade: 72}
];

const num5 = pessoas.filter(valor => valor.nome.length >= 5);
const idade = pessoas.filter(valor => valor.idade >= 50);
const terminaA = pessoas.filter(valor => valor.nome.endsWith('a'));

console.log(terminaA);