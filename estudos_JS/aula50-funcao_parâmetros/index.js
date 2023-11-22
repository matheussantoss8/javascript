// arguments que sustenta todos os argumentos enviados como índece
/* function funcao(a, b = 10, c= 5) {
    console.log(a + b + c);
}
funcao(2, undefined, 5); */

/* const conta = function (operador, acumulador, ...numeros) {
    for(let numero of numeros) {
      if  (operador === '+') acumulador += numero;
      if  (operador === '-') acumulador -= numero;
      if  (operador === '*') acumulador *= numero;
      if  (operador === '/') acumulador /= numero;
    }

    console.log(acumulador);
};

conta('+', 0, 20, 30, 40, 50);
conta('-', 0, 20, 30, 40, 50);
conta('*', 1, 20, 30, 40, 50);
conta('/', 1, 20, 30, 40, 50); */

const conta = (operador, acumulador, ...numeros) => {
    console.log(operador, acumulador, numeros); 
};

conta('+', 0, 20, 30, 40, 50);