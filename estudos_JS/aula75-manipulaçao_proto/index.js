/* const objA = {
    chaveA: 'A'
};

const objB = {
    chaveB: 'B'
};

Object.setPrototypeOf(objA, objB)
console.log(objB.chaveA) */

function Produto (nome, preco) {
    this.nome = nome;
    this.preco = preco;
} 

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('caneca', 100);

const p2 = {
    nome: 'camisa',
    preco: 60
};
Object.setPrototypeOf(p2, Produto.prototype);

const p3 = Object.create(Produto.prototype, {
   preco: {
    value: 45,
    enumerable: true
   },
   tamanho: {
    value: 54,
    enumerable: true
   }
});
p3.aumento(43);
console.log(p3);

p1.desconto(40);
p2.desconto(40);
//p1.aumento(40)
console.log(p1);
console.log(p2);