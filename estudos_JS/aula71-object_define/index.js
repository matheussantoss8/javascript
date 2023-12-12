/* function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // mostra valor
        writable: false, // se pode alterar
        configurable: false // se pode ser configuravel
    });
} 

const p1 = new Produto('camisa', 20, 4);
console.log(p1); */

function Produto(nome, preco, estoque) {
    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // mostra valor
            writable: true, // se pode alterar
            configurable: true // se pode ser configuravel
        },

        preco: { 
            enumerable: true, // mostra a chave
            value: preco, // mostra valor
            writable: true, // se pode alterar
            configurable: true // se pode ser configuravel
        }
    });
    this.estoque = estoque
}

const p1 = new Produto('camisa', 20, 4);
console.log(p1);
