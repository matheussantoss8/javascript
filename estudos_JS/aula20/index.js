function meuEscopo() {
    const form = document.querySelector('.form');
    const dados = document.querySelector('.dados');

    /* form.onsubmit = function (evento) { //UMA FORMA DE CAPTURAR E TAMBEM NAO ENVIAR
        evento.preventDefault();
        alert('cara de cu');
        console.log('enviado');
    }; */

    const pessoas = [];

    function recebe(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        
        console.log(pessoas);
        
        dados.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`

    }

    form.addEventListener('submit', recebe);
};
meuEscopo();



