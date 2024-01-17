// o nodemon faz uma atualização nos codigos sem que precise digitar no terminal

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<form action="/" method="POST"> Nome: <input type="text" name="nome"> <button>enviar</button> </form>');
});

app.post('/', (req, res) => {
    res.send('Recebi o formulario')
});

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('servidor executando');
});
