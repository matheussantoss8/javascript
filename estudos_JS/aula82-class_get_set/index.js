const _velocidade = Symbol('velocidade');
class Carro {
    constructor(nome, velocidade) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor) { // aqui é um forma de adicionar um valor com um limite aplicado
        if(typeof valor !== "number") return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor
    }
    
    get velocidade() { // aqui deixa um valor fixo para ele
        return this[_velocidade]
    }

    acelerar() {
        if(this[_velocidade] >= 150) {
            return '[_velocidade] maxima'
        }
        ++this[_velocidade];
    }

    freiar() {
        if(this[_velocidade] <= 0) return;
        --this[_velocidade];
    }
}

const c1 = new Carro('fusca');

for(let i = 0; i <= 200; i++) {
    c1.acelerar();
}

c1.velocidade = 55


console.log(c1.velocidade)