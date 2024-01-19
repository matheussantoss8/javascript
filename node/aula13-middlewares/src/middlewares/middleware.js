exports.middlewareGlobal = (req, res, next) => {
    if (req.body.cliente) {
        console.log();
        console.log(`você postou ${req.body.cliente}`);
        console.log();
    }
    next();
};

exports.middlewareSegundo = (req, res, next) => {
    console.log('este é meu middleware segundario');
    next();
}