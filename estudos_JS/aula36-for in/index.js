const frutas = ['banana', 'maça', 'maracuja', 'uva'];

/* for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);

} */

/* for (let i in frutas) { 
    console.log(frutas[i])
} */

const pessoa = {
    nome: 'matheus',
    sobrenome: 'santos',
    idade: 20
};

//const chave = 'nome';

//console.log(pessoa[chave])

for ( let i in pessoa) {
    console.log(i, ':', pessoa[i])


}