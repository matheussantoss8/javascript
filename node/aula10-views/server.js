 // o nodemon faz uma atualização nos codigos sem que precise digitar no terminal

const express = require('express');
const app = express();
const routes = require('./routes')
const path = require('path')

app.use(express.urlencoded({ extended: true }));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(routes)

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('servidor executando');
});
