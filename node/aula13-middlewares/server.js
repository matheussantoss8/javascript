const express = require('express');
const app = express();
const routes = require('./routes')
const path = require('path')
const { middlewareGlobal, middlewareSegundo } = require('./src/middlewares/middleware')

app.use(express.urlencoded({ extended: true }));

app.use(express.static('./public'))

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(middlewareGlobal);
app.use(middlewareSegundo);
app.use(routes)

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('servidor executando');
});
