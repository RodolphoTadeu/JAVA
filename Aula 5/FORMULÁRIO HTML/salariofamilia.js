const nome = document.getElementById("nome");
const filhos = document.getElementById("filhos");
const salario = document.getElementById("salario");
var botao = document.getElementById ("botao");
const resultado = document.getElementById("resultado")
var familia = 0;

botao.addEventListener('click',validar); //<-- A fUNÇÃO PARA FAZER O BOTÃO VERIFICAR 
function validar(){
    if(nome.value === null || nome.value === undefined || nome.value === ""){    //a
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
                if( salario.value >= 806.81 & salario.value <= 1212.64){

            }
        }
        window.alert = '$(filhos.value), o salario familia e de R$: $( resultado)';
            }
        }
    }  
}



