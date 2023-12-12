function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                console.log('erro')
                return
            }

            estoque = valor
        }
    });
} 

const p1 = new Produto('camisa', 20, 4);
//console.log(p1);
p1.estoque = 500;
console.log(p1.estoque);