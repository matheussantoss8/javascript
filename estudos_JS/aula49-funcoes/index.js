function falaOi() {
    console.log('oie');
}
falaOi();

const souUmDado = function() {
    console.log('sou um dado');
};


function executaFuncao(funcao){
    funcao();
}

executaFuncao(souUmDado);

const funcaoArrow = () => {
    console.log('sou uma arrow function')
}
funcaoArrow();

const obj = {
    falar(){
        console.log('function no objeto')
    }
};

obj.falar();