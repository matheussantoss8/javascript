// 705.484.450-52
// 111.111.111-11
class ValidaCPF {
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    isSequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos); 
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1); 
        this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }

    static geraDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;
    
        for (let i of cpfSemDigitos) {
            total += reverso * Number(i);
            --reverso;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida() {
        if(!this.cpfLimpo) return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequencia()) return false;
        this.geraNovoCpf();
       
        return this.novoCPF === this.cpfLimpo;
    }
}

let cpf = new ValidaCPF('705.484.450-52');


if(cpf.valida()) {
    console.log('CPF valido');
} else {
    console.log('CPF invalido');
}