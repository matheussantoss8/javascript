/// produto = aumento e desconto
// camiseta = cor, caneca = material
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
};

function Camiseta (nome, preco, cor) {
    Produto.call(this, nome, preco); // este call esta vinculando a funcao 'Produto' dessa forma pega os objetos sem necessitar escrever novamente
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);// dessa forma usa os prototypes de desconto e aumento
Camiseta.prototype.constructor = Camiseta;

function Caneca (nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
        if (typeof valor !== 'number') return;
        estoque = valor
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;



const camisa = new Camiseta('nike', 56.8, 'branca');
camisa.desconto(20);
console.log(camisa);
const caneca = new Caneca('caneca', 47, 'porcelana', 4);
console.log(caneca)