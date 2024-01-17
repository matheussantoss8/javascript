const fs = require('fs').promises;

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, {flag: 'w'}) // flag: w reescreve o arquivo se ele ja existir, caso utilize 'a' ele acrescenta novamente o que sera escrito

}
