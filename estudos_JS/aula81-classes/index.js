class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        return `${this.nome} está falando.`
    }  
}

function Pessoa2(nome, sobrenome) {
    this.nome = nome,
    this.sobrenome = sobrenome
}

Pessoa2.prototype.falar = function () {
    return `${this.nome} esta falando.`
}




const p1 = new Pessoa('matheus', 'santos');
const p2 = new Pessoa2('maria', 'souza');

console.log(p1)
console.log(p2)