// importando um arquivo com require temos acesso todo, caso queira executar algo coloque ponto .
const mod1 = require('./mod1')
// const mod1 = require('./mod1').fala  dessa forma importa somente uma chave
// console.log(mod1()) executa dessa forma
console.log(mod1.nome)


// uma desestruturação 
const {nome, sobrenome, fala} = require('./mod1');
console.log(fala())




const {Pessoa} = require('./mod1');
const p1 = new Pessoa ('matheus');
console.log(p1)