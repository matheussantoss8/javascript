
//               0  1   2   3  4  5  6  7  8  9   10  11  12 indice
// const numeros = [5, 50, 80, 1, 2, 3, 6, 8, 7, 11, 15, 22, 27];
//    array                    valores

/* function call (valor, indice, array) {
    return valor > 10;   
}  */
/* 
const maior10 = numeros.map(valor => valor * 2);

console.log(maior10);  */

 const pessoas = [
    {nome: 'matheus', idade: 20},
    {nome: 'maria', idade: 50},
    {nome: 'joao', idade: 30},
    {nome: 'santos', idade: 25},
    {nome: 'souza', idade: 57},
    {nome: 'lucas', idade: 72}
];

const nome = pessoas.map(valor => valor.nome);
const idade = pessoas.map(valor => ({idade: valor.idade}));
const id = pessoas.map((valor, indice) => {
    valor.id = indice++;
    return valor;
});

console.log(id); 