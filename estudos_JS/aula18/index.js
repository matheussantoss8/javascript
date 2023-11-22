OBJETOS

/* const pessoa1 = {
    nome: 'matheus',
    sobrenome: 'santos',
    idade: 20
};

const pessoa2 = {
    nome: 'maria',
    sobrenome: 'souza',
    idade: 40
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade); */

/* function criaPessoa (nome, sobrenome, idade){
    return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('matheus', 'santos', 20);
const pessoa2 = criaPessoa('maria', 'souza', 26);
const pessoa3 = criaPessoa('joao', 'alves', 24);
const pessoa4 = criaPessoa('nicolas', 'silva', 34);
const pessoa5 = criaPessoa('melissa', 'vieira', 45);

console.log(pessoa5.sobrenome);  */

const pessoal = {
    nome: 'matheus',
    sobrenome: 'santos',
    idade: 22,

    comente(){
        console.log(`minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        ++this.idade ;
    }
};

pessoal.comente();
pessoal.incrementaIdade();
pessoal.comente();