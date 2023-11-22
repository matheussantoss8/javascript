/* function ePaisagem (largura, altura){
    if (largura > altura) {
        return true
    } if  ( altura > largura){
        return false
    } 
} */

function ePaisagem (largura, altura){
    return largura >= altura ? true : false
}

console.log(ePaisagem(1920, 1920))