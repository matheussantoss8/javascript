/* const texto = document.querySelector('#texto');
const data = new Date();

function getSemana(diaSemana){
    const dia = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado']
    return dia[diaSemana];
}

function getMes (numMes){
    const mes = ['janeiro', 'fevereiro', 'março','abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    return mes[numMes];
}

function criaData (data){
    const numDia = data.getDay();
    const numMes = data.getMonth();

    const nomeDia = getSemana(numDia);
    const nomeMes = getMes(numMes);
    
    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
        ` de ${data.getFullYear()} ` +
        `${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`
    );
}

function zeroEsquerda (n){
    return n >= 10 ? n : `0${n}`;
}

texto.innerHTML = criaData(data); */

const texto = document.querySelector('#texto');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};
 
texto.innerHTML = data.toLocaleString('pt-BR', opcoes);