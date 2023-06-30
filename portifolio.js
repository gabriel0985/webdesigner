function Validar(){
    //obtençao de valores inseridos pelo ususario
    var nome = document.getElementById('nome').value
    var email = document.getElementById('email').value
    var msg = document.getElementById('mensagem').value

//validacao dos campos do form
if(nome == ''){
    alert('Por favor, digite seu nome');
    return false; //impede o envio do formulario
}
if(email == ''){
    alert('por favor, digite o email correto');
    return false;
}
if(msg == ''){
    alert('por favor, nos de seu feedback');
    return false;
}
//gravar cookie codificado
document.cookie = `nome=${encodeURIComponent(nome)}`;
document.cookie = `email=${encodeURIComponent(email)}`;
document.cookie = `msg=${encodeURIComponent(msg)}`;

//enviar form valido
return true;
}