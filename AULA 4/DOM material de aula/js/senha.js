var emailcadastrado =  "fulano@gmail.com";
var senhaUsuario = "adm";

var botaoLogar = document.getElementById ("logar");
botaoLogar.addEventListener('click',validar)


function validar(){

    var email= document.querySelector("#email").value;
    var senha= document.querySelector("#senha").value;
    
    if(email === emailcadastrado & senha === senhaUsuario){
        window.alert ("E isso ai caralho! acertou a senha");
        window.location.href ="https://google.com";
    }else{
    
        window.alert("Incorreto senha ou email, por favor repetir!");
    }
    
}


