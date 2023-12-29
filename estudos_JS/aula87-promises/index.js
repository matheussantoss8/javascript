function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('bad value')
        setTimeout(() => {
            resolve(msg)
        }, tempo);
    });
}

esperaAi('Conexão com o Base de Dados', rand(1, 5))
    .then(resposta =>{
        console.log(resposta);
        return esperaAi('Buscando Dados da Base', rand(1, 4));
    })
    .then(resposta =>{
        console.log(resposta);
        return esperaAi(3131, rand(1, 4));
    })
    .then(resposta =>{
        console.log(resposta);
    }).then(() => {
        console.log('Exibe dados na tela');
    }).catch(e =>{
        console.log('erro:', e);
    })
