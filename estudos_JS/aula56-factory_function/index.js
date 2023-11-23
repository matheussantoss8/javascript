function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        set nomeCompleto(valor) {
            valor = valor.split(' '); // divite  um array em string cada palavra
            this.nome = valor.shift();// pega o primeiro elemento e remove
            this.sobrenome = valor.join(' ');// ter espaço entre as strings
        },

        fala (assunto) {
            return `${this.nome} está ${assunto}`;
        },

        altura,
        peso,

        //aqui o imc se tornou um atributo do objeto (getter)
        get imc () {
           return this.peso / this.altura ** 2
        }
    };
}

const p1 = criaPessoa('matheus', 'couto', 1.7, 60);
p1.nomeCompleto = 'maria santos souza'
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala('esta falando sobre JS'));
