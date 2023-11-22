try {
    console.log('abrindo...');
    try {
        console.log('aguarde o processo de verificação...');
    } catch (e) {
        console.log('erro na verificação');
    }finally {
        console.log('sempre executado');
    }
    console.log(a)
    console.log('arquivo concluido');
} catch (e) { 
    console.log('execução incompleta');
} finally {
    console.log('finally: sempre será executado');
}

function hora (data) {
    if (!(data instanceof Date)) {
        console.log('falso');
    }
}

hora(new Date(0));

