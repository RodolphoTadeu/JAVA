var input = document.querySelector("#inputpagina");
input.addEventListener('focus', focoInput);
input.addEventListener('blur', perdeFocoinput);

function focoInput(){
    input.style.backgroundColor = "yellow";
}

function  perdeFocoinput(){
    input.value;
    if(input.value.length < 3){
        input.style.backgroundColor = "red";
    }
else{
    input.style.backgroundColor = "green";
}

}