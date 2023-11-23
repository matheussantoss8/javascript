function nome (name) {
    if (name ? true : false) {
        alert ("Olá " + name);
    } else {
        alert("Olá convidado");
    }
}
  
function processaInput(callback) {
    var name = prompt("Por favor insira seu nome:");
    callback(name);
    
}
  
processaInput(nome);