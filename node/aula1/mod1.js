const nome = 'matheus';
const sobrenome = 'santos';
 
const fala = () => nome + ' ' + sobrenome

/* module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.nomeCompleto = fala 
o exports faz a mesma função 
*/

this.diga = nome; /* o this é um atalho que faz igual ao exports  */
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.fala = fala;

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;