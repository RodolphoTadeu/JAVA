                        //REPETIÇÕES
                        
//WHILE (VERIFICA E FAZ)
var rep1 = 0;
console.log("Início");
while(rep1 <= 10) {
    console.log (rep1)
    rep1++}
    //aplicação let
//     let teste = "Let funciona"
//     console.log(teste)
// }
// console.log(teste)


//DO WHILE (FAZ E VERIFICA)

var contador2 = 0
console.log("Início 2")
do{
    console.log(contador2)
    contador2++
}

while (contador2 <= 10)

//FOR
//for (variavel; condição; controle){
//}
console.log("Iniício")
for(var contador3 = 10; contador3 >= 0;  contador3--){
    console.log(contador3);
}

//FOR EACH
var exemplo = ["EX1", "EX2", "EX.3", "EX4", "EX5"];
console.log (exemplo [0]);
exemplo.forEach((Element) => console.log(Element));

//WHILE COM LENGHT

var exemplo2 = ["ELEMENTO", "ELEMENTO2", "ELEMENTO3", "ELEMENTO4", "ELEMENTO5"];
var contador4 = 0 
while(contador4 <= exemplo2.length){
    console.log(exemplo2[contador4])
    contador4++
}