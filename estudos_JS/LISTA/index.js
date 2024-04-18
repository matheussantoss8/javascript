let pessoa = {
  nome: 'matheus',
  idade: 23,
  profissao: 'programador',
}

console.log(pessoa);

let { nome, idade, profissao } = pessoa;

function criaNome() {
  let pessoa = {
    nome: 'maria',
    idade: 2,
    profissao: 'vendedora',
  }
  console.log(pessoa.nome);
}

let novo = ['sujeito', 'array', 42];

console.log(novo);

const { 0:sujeito} = novo;

console.log(sujeito)

const [ teste, array, num] = novo

console.log(teste)