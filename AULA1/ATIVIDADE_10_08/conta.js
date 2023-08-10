// 1-calcule conta, faça uma aplicação js que pegue o número
//  de clientes em uma mesa, o valor total da conta e após isso
//  divida a conta de forma igual a todos os clientes

window.alert("Calculadora para rachar a conta do boteco")
//pode ubsar a TAG Number

let conta = Number(window.prompt("Infome o valor total da conta:")) 
let nu1 =  Number(window.prompt("Informe a quantidade de pessoas na mesa:")) 

const resultado = (conta / nu1).toFixed(2)


window.alert(`O total do rateio foi de R$ ${resultado}`)