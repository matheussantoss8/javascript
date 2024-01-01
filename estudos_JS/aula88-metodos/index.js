function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('bad value');
                return;
            } 
            
            resolve(msg);
        }, tempo);
    });
}

function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.resolve('pagina em cache');
    } else {
        return esperaAi('baixei a pagina', 2500);
    }
}

baixaPagina().then(dadosPagina =>{
    console.log(dadosPagina)
}).catch(e => console.log(e))

const promises = [
    //'primeiro valor',
    esperaAi('promise 1', 5000), //somente eles tem valor
    esperaAi('promise 2', 1000), // de promises
    esperaAi('promise 3', 500),
    //esperaAi(1000, 500),
    //'outro valor'
];

/* Promise.all(promises)
    .then(valor  => {
        console.log(valor);
    })
    .catch(erro  => {
        console.log(erro)
    }) */

Promise.race(promises) // a primeira resolvida é executada
    .then(valor  => {
        console.log(valor);
    })
    .catch(erro  => {
        console.log(erro)
    })