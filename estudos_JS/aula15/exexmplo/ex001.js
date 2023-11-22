let numero = Number(prompt('digite um número:'));
const numeroTitulo = document.getElementById('numero1');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>seu numero + 2 é ${numero + 2}. </p>`;