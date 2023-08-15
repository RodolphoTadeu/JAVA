// window.alert("Bom dia e o caralho!")
var divteste = document.getElementById("teste");

divteste.addEventListener(`click`, alerta);
divteste.addEventListener(`mouseout`, mudaDiv);
divteste.addEventListener(`mouseenter`, function(){
        divteste.style.backgroundColor = "red"
        divteste.innerHTML= "<H1> VC SAIU DA DIV </H1>"
});


function alerta() {
    window.alert("Não clica na CARALHA da DIV!");
}

function mudaDiv(){
    divteste.style.backgroundColor = "white";
    // divteste.innerText="VC SAIU DA DIV"
    divteste.innerHTML= "<H1>VC ENTROU NA DIV</H1>"
}


