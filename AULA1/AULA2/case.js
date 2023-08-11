window.alert("CALCULADORA EM JAVA")
const n1 = Number( window.prompt("Digite o primeiro número!"));
const op = window.prompt ("Informe a operação  desejada");
const n2 = Number(window.prompt("Digite o segundo número!"));

switch(op){
    case "+" : var res = n1 +n2;
    break
    case "somar" : var res = n1 +n2;
    break
    case "-": var res = n1-n2;
    break

    case "/": var res = n1 / n2;
    break

    case"*": var res = n1*n2;
    break

    case"%": var res = n1%n2;
    
    default: 
    window.alert("Operador informado e invalido repita a operação!")
    //location.reload()
}

window.alert(`Resultado: ${res}`)
//location.reload()