let error = document.createElement("i");
error.classList.add('wrong');
let textError;
var campoSenha = document.getElementById('novaSenha').parentNode;
var br = 0;

function confirmarSenha(senha, repeatSenha){
  if (senha == repeatSenha && senha != "")
    return senha
  else if (senha == "")
    return 1
  else
    return 0
}

function Cadastrar() {
  if (confirmarSenha(register.novaSenha.value, register.repeatSenha.value) == 1){
    if (br == 0) {
      textError = document.createTextNode('Insira uma senha');
      error.appendChild(textError);
      campoSenha.insertBefore(error, document.getElementById('novaSenha'));
      br = 1;
    }
    else if (br == 2) {
      error.removeChild(textError);
      textError = document.createTextNode('Insira uma senha');
      error.appendChild(textError);
      campoSenha.insertBefore(error, document.getElementById('novaSenha'));
      br = 1;
    }
    
  }
  else if (confirmarSenha(register.novaSenha.value, register.repeatSenha.value) == 0){
    if (br == 0) {
      textError = document.createTextNode('As senhas não são iguais.');
      error.appendChild(textError);
      campoSenha.insertBefore(error, document.getElementById('novaSenha'));
      br = 2;
    }
    else if (br == 1){
      error.removeChild(textError);
      textError = document.createTextNode('As senhas não são iguais.');
      error.appendChild(textError);
      campoSenha.insertBefore(error, document.getElementById('novaSenha'));
      br = 2;
    }
  }
  else {
    cadastro = {
    discente: register.discenteCheckBox.checked,
    doscente: register.doscenteCheckBox.checked,
    nomeCompleto: register.nome.value,
    cpf: register.cpf.value,
    email: register.novoEmail.value,
    estado: register.Estado.value,
    senha: confirmarSenha(register.novaSenha.value, register.repeatSenha.value),
  }
  console.log(JSON.stringify(cadastro))
}
}
