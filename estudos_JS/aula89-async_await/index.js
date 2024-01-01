function rand(min = 0, max = 4) {
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
            
            resolve(msg.toUpperCase());
        }, tempo);
    });
}

/* esperaAi('fase 1', rand())
    .then(valor => {
        console.log(valor);
        return esperaAi('fase 2', rand());
    })
    .then(fase => {
        console.log(fase);
        return esperaAi('fase 3', rand());
    })
    .then(encerrar => {
        console.log(encerrar);
    })
    .catch(e => console.log(e)) */

async function executa() { // adicionando o try podemos encontrar um erro ao ser executado
    try {
        const fase1 = await esperaAi('fase 1', rand());
        console.log(fase1);

        const fase2 = await esperaAi(6, rand());
        console.log(fase2);

        const fase3 = await esperaAi('fase 3', rand());
        console.log(fase3);

        console.log('terminamos na fase:', fase3)
    } catch(e) {
        console.log(e)
    }
}

executa();
