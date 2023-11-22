function conômetro () {
    function criasegundos (segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-br',{
            hour12: false,
            timeZone: 'UTC'
        });
    }
    
    const time = document.querySelector('.time');
    let segundos = 0;
    let timer;
    
    function iniciaRelogio() {
        timer = setInterval(function() {
            segundos++;
            time.innerHTML = criasegundos(segundos);
        }, 1000);
    }
    
    document.addEventListener('click', function(e) {
        const elemento = e.target;
        
        if (elemento.classList.contains('iniciar')){
            clearInterval(timer);
            iniciaRelogio();
            time.classList.remove('pauser', 'zera') 
        };
        
        if (elemento.classList.contains('pausar')){
            clearInterval(timer);
            time.classList.add('pauser') 
        };
        
        if (elemento.classList.contains('zerar')){
            clearInterval(timer);
            time.innerHTML = '00:00:00'
            segundos = 0;
            time.classList.add('zera') 
        };
    });
}

conômetro();

/* const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar'); */
/* iniciar.addEventListener('click', function(event) {
    clearInterval(timer);
    iniciaRelogio();
    time.classList.remove('pauser', 'zera')
});

pausar.addEventListener('click', function (event) {
    clearInterval(timer);
    time.classList.add('pauser')
})

zerar.addEventListener('click', function (event) {
    clearInterval(timer);
    time.innerHTML = '00:00:00'
    segundos = 0;
    time.classList.add('zera')
}) */
