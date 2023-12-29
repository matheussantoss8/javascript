class ControleRemoto {
    constructor(tv, ) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() {
        this.volume += 1;
    }

    diminuirVolume() {
        this.volume -= 1;
    }

    static troca() {
        console.log(`troque o controle`);
    }
}

const controle1 = new ControleRemoto('SAMSUNG');
controle1.diminuirVolume();
console.log(controle1);
ControleRemoto.troca();