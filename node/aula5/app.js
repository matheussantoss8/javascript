const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'test.json'); // criando um arquivo 
const escreve = require('./modules/escreve')
const ler = require('./modules/ler')

// const pessoas = [
//     {nome: 'joao'},
//     {nome: 'maria'},
//     {nome: 'matheus'},
//     {nome: 'luiza'}
// ];
// const json = JSON.stringify(pessoas, '', 2) // transformando um objeto em json
// escreve(caminhoArquivo, json)

async function leArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val))
}

leArquivo(caminhoArquivo)