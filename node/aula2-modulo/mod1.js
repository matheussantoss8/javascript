// module.exports = (x, y) => {
//     return x * y;
// };

// console.log(module.exports(2, 3))

module.exports = class Niver {
    constructor(idade) {
        this.idade = idade; 
    }

    aniversario() {
        const novaIdade = this.idade + 1;
        return novaIdade
    }
}