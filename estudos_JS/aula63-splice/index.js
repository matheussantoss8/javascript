//               -5        -4         -3       -2      -1
//                0         1          2        3       4
const nomes = ['maria', 'matheus', 'santos', 'joao', 'lucas'];

const deletados = nomes.splice(nomes.length, 1, 'luiz');
console.log(nomes, deletados);