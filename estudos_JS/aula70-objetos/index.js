// OBJETO LITERAL
// aqui é o corpo do objeto, nome e sobrenome é uma chave que tem valores 
/* const pessoa = {
    nome: 'matheus',
    sobrenome: 'santos'
};

const id = 'nome'; // o id tem o valor da chave nome em pessoa
console.log(pessoa[id]); // para acessar os valores das chaves pode se utilizar [''] ou notação de ponto . */


// OBJETO CONSTRUTOR 
/* const pessoa1 = new Object();
pessoa1.nome = 'matheus';
pessoa1.sobrenome = 'santos';
pessoa1.idade = 20;
pessoa1.falar = function() { // é possivel utilizar funções em objetos
   return (`${this.nome} está falando seu nome`);
}

pessoa1.nascimento = function() {
    const data = new Date();
    return data.getFullYear() - this.idade;
}

console.log(pessoa1.falar());
console.log(pessoa1.nascimento());

for (let i in pessoa1) {
    console.log(i)
} */

// FACTORY FUNCTION
/* function criaPessoa(nome, sobrenome) {
    return{
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const id = criaPessoa('matheus', 'santos');
console.log(id.nomeCompleto); */


// CONSTRUCTOR FUNCTIONS    
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this) // dessa forma o this nao pode ser alterado de forma alguma
}

const p1 = new Pessoa('matheus', 'santos');
p1.nome = 'ola'; // nao estamos mudando o a variavel mas o valor dentro dela sim
const p2 = new Pessoa('joao', 'santos');
console.log(p1);
console.log(p2);
