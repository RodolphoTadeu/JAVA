const nome = document.getElementById("nome");
const filhos = document.getElementById("filhos");
const salario = document.getElementById("salario");
var botao = document.getElementById ("Calcular");
var familia = 0;

botao.addEventListener('click',validar);
function validar(){
    if(nome.value === null || nome.value === undefined || nome.value === ""){
    window.alert ("Informe seu nome!");
}
else{
    if(filhos.value.value === null || filhos.valuee === undefined || filhos.value === ""){
        window.alert("Informe a quantidade de filhos!")
    }
    else{
        if(salario.value.value === null || salario.valuee === undefined || salarios.value === ""){
            window.alert("Informe o salário corretamente")
            }
            //CALCULAR
            else{
            if (salario <= 806.89){
                var familia = filho.value *41.37
            }
            else{
                if( salario.value >= 806.81 & salario.value <= 1212.64)
            }
            }
        }
    }  
}

// function validar(){

//     var nome= document.getElementById("#nome").value;
//     var filhos= document.getElementById("#filhos").value;
//     var salario = document.getElementById("salario").value;

// if(nome ! )




//     if(email === emailcadastrado & senha === senhaUsuario){
//         window.alert ("E isso ai caralho! acertou a senha");
//         window.location.href ="https://google.com";
//     }else{
    
//         window.alert("Incorreto senha ou email, por favor repetir!");
//     }
    
// }

