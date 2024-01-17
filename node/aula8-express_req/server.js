// o nodemon faz uma atualização nos codigos sem que precise digitar no terminal

const express = require('express');
const app = express();

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);

app.get('/', (req, res) => {
    res.send('<form action="/" method="POST"> Nome: <input type="text" name="nome"> <button>enviar</button> </form>');
});

app.get('/teste/:idUsuarios?', (req, res) => {
    // req.params é o valor capturados na url
    // req.query captura valores definidos na url
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.idUsuarios)
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`Foi digitado: ${req.body.nome}`)
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('servidor executando');
});
