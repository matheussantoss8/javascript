// o trabalho desse arquivo é somente fazer a rota usando um controlador e cada controller trata algo especifico
const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController')

/* // o next deve ser inserido para que o site execute 
function meuMiddleware(req, res, next) { 
    req.session = {nome: 'matheus', idade: 34} // o req tera esse valor para todos
    console.log('passei aqui')
    console.log()
    next()
} */
// o middleware deve ser colocado aqui
route.get('/', homeController.paginaInicial);

route.post('/', homeController.trataPost);
route.get('/contato', contatoController.paginaInicial)

module.exports = route;
