function criaCalculadora() {

    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.button-clear'),
        btnDel: document.querySelector('.button-del'),
        btnEq: document.querySelector('.button-eq'),

        inicia() { // this = calculadora
            this.clickBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    this.resultado();
                }
            });
        },

        resultado() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (!conta) {
                    alert('conta invalida');
                    return;
                }

                this.display.value = conta;
            } catch (e) {
                alert ('conta invalida');
                return;
            }
        },

        clearDisplay() {
            this.display.value  = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },


        clickBotoes() {
            // this = calculadora
            document.addEventListener('click', (e) => { // caso utilize uma arrow function o this nao muda o valor sempre sera calculadora mas retire o bind


                // this = document
                const el = e.target; // aonde estou clicando

                if (el.classList.contains('button-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('button-clear')){
                    this.clearDisplay();
                }

                if (el.classList.contains('button-del')){
                    this.apagaUm();
                }

                if (el.classList.contains('button-eq')){
                    this.resultado();
                }

                this.display.focus();
            }); // ao inves de usar o this documentm, utilize o this da calculadora atraves do 'bind'
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();