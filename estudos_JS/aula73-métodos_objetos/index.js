/* const produto = {nome: 'caneca', preco: 425};
const outro = Object.assign({}, produto, {material: 'porcelana'})

const outro = {
    ...produto,
    material: 'algodao'
}; 
outro.preco = 2
console.log(produto)
console.log(outro) */

const produto = {nome: 'caneca', preco: 425};
Object.freeze(produto);
console.log(Object.entries(produto))