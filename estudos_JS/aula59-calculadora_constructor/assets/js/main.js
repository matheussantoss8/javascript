function Calculadora () {
    this.display = document.querySelector('.display');

    this.captura = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;
            if (el.classList.contains('button-num')) this.addBtn(el);
            if (el.classList.contains('button-clear')) this.clear();
            if (el.classList.contains('button-del')) this.del();
            if (el.classList.contains('button-eq')) this.realizaConta(el);
        });
    };

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);

            if(!conta) {
                alert('Conta invalida');
                return;
            }

            this.display.value = conta;

        } catch(e) {
            alert ('conta invalida');
            return;
        }
    }

    this.enter = () => {
        document.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }    
        });
    };

    this.addBtn = (el) => {
        this.display.value += el.innerText;
        this.display.focus();
    }

    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1);  
    this.inicia = () => this.captura(), this.enter();
};

const calculadora = new Calculadora();
calculadora.inicia();