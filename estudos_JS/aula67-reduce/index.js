//reduce pode ser utilizados para somar alguns indices ou todos

//               0  1   2   3  4  5  6  7  8  9   10  11  12 
const numeros = [5, 50, 80, 1, 2, 3, 6, 8, 7, 11, 15, 22, 27];
//                           (acumulador, valor, indice, array)
/* const total = numeros.reduce( (acumulador, valor) => {
    acumulador += valor;
    return acumulador;
   
}, 0); */ // valor do acumulador 

const total = numeros.reduce( (acumulador, valor) => {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
   
}, []); // é utilizado um array por separar os pares fazendo um array de pares

console.log(total)
// o papel do reduce é reduzir a função em um único elemento






const pessoas = [
    {nome: 'matheus', idade: 20},
    {nome: 'maria', idade: 50},
    {nome: 'joao', idade: 30},
    {nome: 'santos', idade: 25},
    {nome: 'souza', idade: 57},
    {nome: 'lucas', idade: 72}
];

const maior = pessoas.reduce((acumulador,valor) => {
    if(acumulador.idade > valor.idade) {
        return acumulador;
    } return valor;
});

console.log(maior);