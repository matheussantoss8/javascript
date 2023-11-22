/* const nome = 'matheus';

let i = 0;

while (i < nome.length){
    console.log(nome[i]);
    i = i + 1;
}

console.log('loop concluido'); */

function aleatorio (max, min){
    let r = Math.random() * (max - min) + min;
    r = Math.floor(r) ;
    return r;
}

const min = 1
const max = 50
let rand = aleatorio(min, max);
console.log((rand !== 10))

/* while (rand !== 10){
    rand = aleatorio(min, max);
    console.log(rand);
} */

do {
    rand = aleatorio(min, max);
    console.log(rand);
} while (rand !== 10);