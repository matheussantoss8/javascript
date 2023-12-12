function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => 'ola mundo' + ' ' + this.sobrenome;
}

Pessoa.prototype.ola = 'ola';
Pessoa.prototype.nomeCompleto = () => {
   return this.nome + ' ' + this.sobrenome;
};

const pessoa1 = new Pessoa('matheus', 'santos');
const pessoa2 = new Pessoa('maria', 'souza');

console.dir(pessoa1)
console.dir(pessoa2)