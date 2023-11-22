const elementos = [
    {tag: 'p', texto: 'frase 1'}, // 0 objetos
    {tag: 'div', texto: 'frase 2'}, //1 objetos
    {tag: 'footer', texto: 'frase 3'}, //2 objetos
    {tag: 'section', texto: 'frase 4'}, //3 objetos
]


const corpo = document.querySelector('.container');
const div = document.createElement('div')

    for (let i = 0; i < elementos.length; i++) {
        const tags = document.createElement(elementos[i].tag);
        tags.innerHTML = elementos[i].texto;
        corpo.appendChild(tags); 
    }