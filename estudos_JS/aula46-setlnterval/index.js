function hora () {
    let data = new Date();

    return data.toLocaleTimeString('pt-br')
}

const timer = setInterval(function funcaoHora (){
    console.log(hora());
}, 1000); 

setTimeout(function termina ()  {
    clearInterval(timer);
}, 5100);


