class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.evento();
    }

    evento() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.checkCampo();
        const senhasValidas = this.senhasSaoValidas();

        if(camposValidos && senhasValidas) {
            alert('login bem sucedito');
            this.formulario.submit();
        }
    }

    senhasSaoValidas() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha')
        const repetirSenha = this.formulario.querySelector('.repetirs')

        if(senha.value !== repetirSenha.value) {
            valid = false;
            this.criaErro(senha, 'campo senha e repetir senha precisa ser iguais')
            this.criaErro(repetirSenha, 'campo senha e repetir senha precisa ser iguais')
        }

        if(senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.criaErro(senha, 'senha precisa estar entre 6 e 12 caracteres.')
        }

        return valid;
    }

    checkCampo() {
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error')){
            errorText.remove();
        } /// para nao gerar mais erros

        for(let campo of this.formulario.querySelectorAll('.validar')) {

            if(!campo.value) {
               this.criaErro(campo, 'campo nao pode estar em branco');
               valid = false
            } // executa uma mensagem caso nao seja preenchido

            if(campo.classList.contains('cpf')) {
               if(!this.validaCPF(campo)) valid = false; 
            }

            if(campo.classList.contains('usuario')) {
                if(!this.validaUsuario(campo)) valid = false; 
             }
        } 

        return valid;
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;

        if(usuario.length < 3 || usuario.length > 12){
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres');
            valid = false;
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){ // um expressão regular para apenas letras e numeros
            this.criaErro(campo, 'Nome de usuário precisa conter letras ou números');
            valid = false;
        }

        return valid;
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);

        if(!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido');
            return false;
        }
        return true
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');

        div.innerHTML = msg;
        div.classList.add('error');
        campo.insertAdjacentElement('afterend', div); // aqui é adicionado depois se acontecer algum erro
    }
}

const valida = new ValidaFormulario();