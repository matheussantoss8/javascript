import GeraCPF from './modules/GeraCPF'

import './assets/css/style.css';

(function ()  { // criando uma funcao imediata e sendo executada
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCPF();
})()