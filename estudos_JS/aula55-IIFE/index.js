(function(idade, peso, altura){

    const sobrenome = 'santos';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Matheus'));
    }

    falaNome();
    console.log(idade, peso, altura);
    
})(20, 60, 1.70);

