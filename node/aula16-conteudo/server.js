require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING)    
    .then(() => { 
        console.log('conectado')
        app.emit('pronto')
    })
    .catch(e => console.log(e))

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');


const routes = require('./routes')
const path = require('path')
const { middlewareGlobal, middlewareSegundo } = require('./src/middlewares/middleware')

app.use(express.urlencoded({ extended: true }));

app.use(express.static('./public'));

const sessionOptions = session({
    secret: 'd2hrg7283g4rbhjdb278r5g2b4tg257()',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});
app.use(sessionOptions);
app.use(flash());

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(middlewareGlobal);
app.use(middlewareSegundo);
app.use(routes)

app.on('pronto', () => { // o base de dados ira executar primeiro
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('servidor executando');
    });
})

