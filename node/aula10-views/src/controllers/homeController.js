exports.paginaInicial = (req, res) => {
    res.render('index');
};

exports.trataPost = (rep, res) => {
    res.send('rota do POST')
}