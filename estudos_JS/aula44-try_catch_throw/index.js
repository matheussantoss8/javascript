/* let naoExisto = 1;


try{
    console.log(naoExisto);
} catch (erro) {
    console.log('erro');
} */

function soma(x, y) {
    if ( typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser numeros');
    }

    return x + y;
}

try {
    console.log(soma(1, 6));
    console.log(soma('1', 6));
} catch (error) { 
    console.log(error); 
}