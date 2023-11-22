//como podemos ver sao a mesma coisa, e as duas contem objeto no typeof
/* 
function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome};
}

const p1 = criaPessoa('matheus', 'santos');
const p2 = {
    nome: 'maria',
    sobrenome: 'santos'
};

console.log(typeof p1)
console.log(typeof p2) */

/* function falaFrase(comeco) {
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const ola = falaFrase('ola');
console.log(ola()); */

function criaMultiplicador (Multiplicador) {
    return function multplicacao (n) {
        return n * Multiplicador
    }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quatriplica = criaMultiplicador(4);

console.log(duplica(2))
console.log(triplica(3))
console.log(quatriplica(4))