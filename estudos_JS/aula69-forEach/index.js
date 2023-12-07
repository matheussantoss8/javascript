const a1 = [10, 20, 30];
let i = 0;
// é um tipo de for pode ser utilizado diversos dele como for in, of e entre outros
a1.forEach(element => {
    i += element;
});

console.log(i)


/* a1.forEach((valor, indice, array) => {
    console.log(indice, valor)
}) */