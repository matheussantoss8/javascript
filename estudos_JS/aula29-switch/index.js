function getDiaSemanaTexto(diasemana) {
    let diasemanatexto;

    switch (diasemana) {
    case 0:
        diasemanatexto = 'domingo'
        return diasemanatexto;
    case 1:
        diasemanatexto = 'segunda'
        return diasemanatexto;
    case 2:
        diasemanatexto = 'terça'
        return diasemanatexto;
    case 3:
        diasemanatexto = 'quarta'
        return diasemanatexto;
    case 4:
        diasemanatexto = 'quinta'
        return diasemanatexto;
    case 5:
        diasemanatexto = 'sexta'
        return diasemanatexto;
    case 6:
        diasemanatexto = 'sábado'
        return diasemanatexto;
    default:
        diasemanatexto = 'algum dia da semana';
        return diasemanatexto;
    }
}

const data = new Date('1964-08-04 21:42:42');
const diasemana = data.getDay();
const diasemanatexto = getDiaSemanaTexto(diasemana);


console.log(diasemana, diasemanatexto);