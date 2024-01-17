exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST"> Nome: <input type="text" name="nome"> <button>enviar</button> </form>
    `);
    
}

exports.trataPost = (rep, res) => {
    res.send('rota do POST')
}