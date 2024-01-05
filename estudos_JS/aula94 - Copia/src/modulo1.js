// ja pode criar uma constante e exportala ao mesmo tempo
export const nome = 'matheus';
const sobrenome = 'santos';
const idade = 20;

// o default faz se torna a exportação padrão
export default function soma (x, y) {
    return x + y
}


//podemos mudar o nome da constante aqui tambem utilizando o as
export{nome as nome2, soma, idade} // estou exportando uma parte do codigo para outro arquivo, pode ser exportado mais de uma codificação