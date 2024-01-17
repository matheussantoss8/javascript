const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(3000, () => {
    console.log('Acessar https://localhost:3000');
    console.log('servidor executando');
});
