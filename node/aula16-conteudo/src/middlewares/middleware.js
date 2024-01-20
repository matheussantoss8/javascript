exports.middlewareGlobal = (req, res, next) => {
    res.locals.variavelLocal = 'este é o valor da variavel local'
    next();
};

exports.middlewareSegundo = (req, res, next) => {
    next();
}