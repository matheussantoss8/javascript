function Pessoa(nome, idade) {
    // atributos privados nao sao utilizados no codigo global somente na function
    const ID = 12345;
    const metodoInt = () => {

    };

    // atributos publicos pode ser utilizado no codigo todo por conta de utilizar o this
    this.nome = nome;
    this.idade = idade;

    this.metodo = () => {
        console.log('ola ' + this.nome);
    } 
}

const p1 = new Pessoa('matheus', 'santos');
const p2 = new Pessoa('maria', 'souza');

p1.metodo();
