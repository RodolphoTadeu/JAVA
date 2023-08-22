//INDEX RETORNA INDICE 
const aprovados = [ "PEPE", "RODOLPHO", "LEO" , "MARIA", "JULIA"];

const pesquisaNome = aprovados.indexOf("PP");
if(pesquisaNome === -1){
    console.log("Não aprovado");
}else{
    console.log("PARABÉNS CARALHO" )
}

//INCLUDES RETORNA BOLEANDO 
const banca = [ "uva", "pera", "abacaxi"];

const pesquisa = banca.includes("maçca");
if(pesquisa === false){
    console.log("não tem");
}else{
    console.log("tem" )
}
