let numeros = [1, 2, 3, 4];

let novos = [...numeros, 5, 6, 7, 8]

console.log(novos)

function convidados(...nomes) {
  console.log(nomes)
}

convidados('matheus', 'maria', 'lucas');

// percorrer um array

let lista = ['matheus', 'maria', 'joao', 'carol'];
//         nomes  indices
lista.map((item, index) => {
  console.log(item, index)
})