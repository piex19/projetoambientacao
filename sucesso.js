
function validar(){
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;
    if(login === ''){
        alert("Preencha o login");
        return false;
    }else if(senha === ''){
        alert("Preencha a senha");
        return false;
    }else{
        return true;
    }
}