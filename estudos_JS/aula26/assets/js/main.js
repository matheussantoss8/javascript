const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
    if (!peso){
        idResultado('Peso invalido', false);
        return;
    }
    
    if (!altura){
        idResultado('Altura invalida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = escalaImc(imc);

    const valid = `Seu IMC é ${imc} ${nivelImc}.`;

    idResultado(valid, true);
});

function escalaImc (imc) {
    const nivel = ['Obesidade grau 3', 'Obesidade grau 2', 'Obesidade grau 1', 'Sobrepeso', 'Peso normal', 'Abaixo do peso'];

    if (imc >= 39.9) return nivel[0];
    if (imc >= 34.9) return nivel[1];
    if (imc >= 29.9) return nivel[2];
    if (imc >= 24.9) return nivel[3];
    if (imc >= 18.5) return nivel[4];
    if (imc < 18.5) return nivel[5];
}

function getImc (peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP () { 
    const p = document.createElement('p');
    return p;
}

function idResultado (valid, inValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    
    const p = criaP();

    if (inValid){
        p.classList.add('paragrafo')
    } else {
        p.classList.add('paragrafo2')
    }
    
    p.innerHTML = valid;
    resultado.appendChild(p)
}