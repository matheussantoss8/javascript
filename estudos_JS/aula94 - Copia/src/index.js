
// o as tem a funcao de trocar o nome da constante importada
import{idade as idada2, nome2, soma} from './modulo1' // o from é o local que eu quero importar no caso é o modulo1

//dessa forma ele importa tudo do outro arquivo, mas somente aqueles que recebam o export
//import * meuModulo from './modulo1';

//caso nao utilize chaves o valor de outro recebe o valor do default
import outro from './modulo1'

const idade = 23 // executa um erro por tentar redeclarar uma constante com o mesmo nome

console.log(nome2,soma, idade, idada2)