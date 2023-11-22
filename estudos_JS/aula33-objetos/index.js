const pessoa = {
    nome: 'luiz',
    sobrenome: 'santos',
    idade: 30,
    endereco: { 
        rua: 'av santa cassia',
        numero: 412,
        cidade: 'sao caetano'
    }
}

const { endereco: {rua , cidade}} = pessoa

console.log(rua, cidade);