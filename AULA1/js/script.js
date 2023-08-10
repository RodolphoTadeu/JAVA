console.log("Hello word! aqui e o Rodolpho Tadeu dos Santos Diniz");

//CAIXAS DE TEXTO 
// window.alert("Meu primeiro alerta");
// window.confirm("CONFIRMA?");
// window.prompt("Infome o seu nome");

//CONST e uma variavel  de escope global, NÃO SE SOBRESCREVE
const numero = 10;

//LET e uma variável de escopo global, SOBRESCREVE
let nome = "Moana";
console.log(nome)
//VAR e uma variável de escopo local que se SOBRESCREVE
var numero2 = 2;

//CONCATENÇÃO 
//window.alert("SEJA BEM VINDO,"+nome);
window.alert(`seja bem vindo, ${nome}`) // mesma forma do exemplo de cima