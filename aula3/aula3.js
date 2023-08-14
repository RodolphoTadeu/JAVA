//var fruta1 = "morango";
// var fruta2 = "abacaxi";
//var fruta3 = "kiwi";

//ARRAY
//METODO 1
var frutas = Array();
frutas[0] = "Morango";
frutas[1] = "Abacaxi";
frutas[2] = "Kiwi";
frutas[3] = "Pêssego";

// METÓDO 2
var legumes = ["Repolho", "Berinjela", "Alface", "Abobora"];

console.log(frutas);
console.log(frutas[1]);

// COMANDOS DE ARRAY
// ADICIONAR ELEMENTOS NO FIM DO ARRAY
frutas.push("Abacate");
console.log(frutas);

// ADICIONAR ELEMENTOS NO COMEÇO DO ARRAY
frutas.unshift("Uva");
console.log(frutas);
//REMOVER ELEMENTOS NO FIM DO ARRAY
frutas.pop();
console.log(frutas);
//REMOVER ELEMENTOS DO INÍCIO DO ARRAY
frutas.shift();
console.log(frutas);
//ADICIONAR ELEMENTOS NO MEIO DO ARRAY
//SPLICE(INDICE, QUANTOS INDICES SOBRESCREVE, DADOS )
frutas.splice(1,0, "Goiaba");
//SOBRESCREVE UM ELEMENTO 
frutas[2]="Banana";
console.log(frutas);