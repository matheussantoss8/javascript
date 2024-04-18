let lista = ['Computador', 'Telefone', 'Mouse', 'Teclado'];

lista.splice(2, 1);
lista.splice(1, 1);

console.log(lista);

let busca = lista.find((item) => {
  if(item === 'Computador') {
    console.log(`Produto encontrado: ${item}`);
    return true;
  }
});

if(!busca) {
  console.log('Produto invalido');
}

let numeros = [1, 3, 5, 7, 0, 9];

numeros.sort()

console.log(numeros)

numeros.splice(0, 1)

console.log(numeros);

let hoje = '20/07/2019'

let [dia, mes, ano] = hoje.split('/');

console.log(dia, mes, ano)











