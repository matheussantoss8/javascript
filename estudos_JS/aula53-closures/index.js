function retornaFuncao(nome) {
    return function () {
        return nome;
    }
}

const funcao = retornaFuncao('matheus');

console.log(funcao())