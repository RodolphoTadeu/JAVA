//OPERADORES LÓGICOS
// > MAIOR QUE
//< MENOR QUE
//>= MAIOR OU IGUAL QUE
//<= MENOR OU IGUAL QUE
// != DIFERENTE 
// == IGUAL A

////ALTERNÁRIO/////

// && E 
// || OU 
// ! NÃO


////IF  (se)    ELSE(senão)

// if(condicao){
//     uma tarefa / um bloco de código
// } else{
//     uma tarefa / um bloco de codoigo
// }


// if(true){
//     console.log("VC está em um blco if verdadeiro");
// } else{
//     console.log("VC ESTÁ NUM BLOCO DE ELE FALSO");
// }

// MAIOR DE IDADE IF
var idade = Number(window.prompt("Bom dia informe a sua idade"));
//isNaN = não e um número
if  ( idade <= 0  || isNaN(idade)){
    window.alert("Idade invalida!");
    location.reload();
} else {
    if( idade >= 1 &  idade <= 17) {
        window.alert("Acesso não permitido");
        location.reload();
    }
    else{
        window.alert("Acesso permitido Seja bem vindo!")
    }
}