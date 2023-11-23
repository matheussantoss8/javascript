const nome = 'matheus';

function falaNome() {
    console.log(nome);
}

function falaDeNovo() {
    const nome = 'santos';
    falaNome();
}

falaDeNovo();