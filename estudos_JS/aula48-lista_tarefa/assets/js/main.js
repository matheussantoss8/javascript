const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function limpaInput() {
    inputTarefa.value = '';
}

function criaBtnApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    li.appendChild(botaoApagar);
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    botaoApagar.setAttribute('class', 'Apagar');
}

function criaTarefa(textoinput) {
    const li = criaLi();
    li.innerText= textoinput
    tarefas.appendChild(li);
    limpaInput();
    criaBtnApagar(li);
    salvarTarefas();
}

btnTarefa.addEventListener('click', function(){
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('Apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas () {
    const liTarefas = tarefas.querySelectorAll('li'); //  capturo todas as listas (li)
    const listaDeTarefas = []; // 

    for(let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText; 
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim() // estou substituindo a palavra Apagar com uma string vazia (replace), e o trim tira o espaço
        listaDeTarefas.push(tarefaTexto); // push adiciona um ou mais elementos
    }
    // JSON faz uma troca de dados, fez a troca para string como podemos ver
    const tarefasJSON = JSON.stringify(listaDeTarefas); 
    localStorage.setItem('tarefas', tarefasJSON);
    // localStorage é um local que salva coisas do navegador, e set item salva o item desejado 
}

function adicionaTarefasSalvas () {
    const tarefas = localStorage.getItem('tarefas'); // obtendo os itens salvos que é tarefas
    const listaDeTarefas = JSON.parse(tarefas); //converteu as tarefas de volta para um array no caso o parse

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();