function calcular(event) {
  event.preventDefault();

  var peso = document.getElementById('ipeso').value;
  var altura = document.getElementById('ialtura').value;
  var resultado = document.getElementById('resultado');

  var imc = Number(peso / (altura * altura)).toFixed(2);

  if (imc < 17) {
    resultado.innerHTML = `<p>Seu IMC é: ${imc} Cuidado você está muito abaixo do peso!</p>`;
  } else if (imc > 17 && imc <= 18.49) {
    resultado.innerHTML = `<p>Seu IMC é: ${imc} Cuidado você está abaixo do peso!</p>`;
  } else if (imc >= 18.5 && imc < 24.99) {
    resultado.innerHTML = `<p>Seu IMC é: ${imc} Você está com o peso normal!</p>`;
  } else if (imc > 25 && imc < 29.99) {
    resultado.innerHTML = `<p>Seu IMC é: ${imc} Cuidado você está acima do peso!</p>`;
  } else if (imc >= 30) {
    resultado.innerHTML = `<p>Seu IMC é: ${imc} Cuidado você está na obesidade!</p>`;
  }

  document.getElementById('ipeso').value = '';
  document.getElementById('ialtura').value = '';
}