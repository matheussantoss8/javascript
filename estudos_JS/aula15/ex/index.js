const numero = Number(prompt('Digite um número:'));
const numero1 = document.getElementById('num1');
const inteiro = document.getElementById('int');

numero1.innerHTML += numero;
inteiro.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}.</p>`;
inteiro.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
inteiro.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.</p>`;
inteiro.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}.</p>`;
inteiro.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}.</p>`;
inteiro.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;

