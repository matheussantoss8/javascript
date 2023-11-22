document.querySelector('.form').addEventListener('submit', function (evento) {
    evento.preventDefault()


const usuario = document.querySelector('.usuario').value;
const senha = document.querySelector('.senha').value;

if (usuario === 'matheussantos@gmail.com' && senha === '123456' ){
    document.querySelector('.mensagem').innerHTML = 'login bem-sucedido'
} else {
    document.querySelector('.mensagem').innerHTML = 'credenciais inválidas. tente novamente.'
}
});
