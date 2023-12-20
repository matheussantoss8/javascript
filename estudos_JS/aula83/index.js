class DispositvoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' ligado');
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' desligado');
            return;
        }

        this.ligado = false;
    }
}

class smartphone extends DispositvoEletronico {
    constructor(nome, cor) {
        super(nome);
        this.cor = cor;
    }
}

class Tablet extends DispositvoEletronico {
    constructor(nome, wifi) {
        super(nome);
        this.wifi = wifi
    }

    ligar() {
        console.log('conectado no wifi')
    }
}

const i1 = new Tablet('iphone', 'branco');
console.log(i1.ligar())