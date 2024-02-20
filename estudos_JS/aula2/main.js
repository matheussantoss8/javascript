
// um exemplo para inserir um usuario e sair
/* var area = document.getElementById('area');

function entrar() {

  var nome = prompt('digite seu nome:');

  if (nome === null || nome === "") {
    area.innerHTML = 'Carregue a pagina e digite seu nome'
  } else {
    area.innerHTML = "Bem vindo " + nome + ' ';

    let botaoSair = document.createElement("button");
    botaoSair.innerText = " sair da conta";
    botaoSair.onclick = sair;
    area.appendChild(botaoSair);
  }
}

function sair() {
  area.innerHTML = 'Você saiu!'
}

function mediaAluno(nota1, nota2) {
  var media = (nota1 + nota2) / 2;

  if (media >= 7) {
    console.log("aluno aprovado" + media);
  } else {
    console.log('aluno reprovado' + media);
  }
}

function aluno(nome, curso) {
  var mensagem = `Seja Bem-vindo ${nome}, seu curso é ${curso}`

  console.log(mensagem)
}
*/

// adicionando mais tarefas
/* var tarefas = ['limpe a casa', 'ir ao mercado', 'comprar picole'];

tarefas.push('aprender JS', 'ir na feira', 'criar aplicativos')

console.log(tarefas) */

// LOOPS

/* var x = 0;

while (x <= 10) {
  document.write(`<br> o valor do x é: ${x}`);
  x++;
}  */ 

// 

/* var valor = prompt("digite um valor");

for(i = 0; i <= valor; i++) {
  document.write(`<br> o valor de I é: ${i}`)
} */

var lista = document.getElementById('lista');
var input = document.getElementById('input');
var mensagem = 'Item escolhido: '

function pedir() {
  var valor = input.value;

  let texto = document.createElement('p');
  lista.appendChild(texto)

  switch (Number(valor)){
    case 1:
    lista.innerHTML = `<p>${mensagem} Suco</p>`
    break;
    case 2:
    lista.innerHTML = `<p>${mensagem} Agua Gelada</p>`
    break;
    case 3:
    lista.innerHTML = `<p>${mensagem} Sorvete</p>`
    break;
    case 4:
    lista.innerHTML = `<p>${mensagem} Chamar Garçom</p>`
    break;
    default:
    lista.innerHTML =  `<p>Escolha entre 1 a 4</p>`
  }
}



