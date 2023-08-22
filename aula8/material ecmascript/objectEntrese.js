const curso = {
    HTML : 45,
    CSS : 55,
    BOOTSTRAP : 44,
    JS : 12,
    
}

const cursoskey = Object.keys(curso);
document.querySelector("#keysDiv").innerHTML = "Keys, apresenta o nome dos atributos: <br>"+`<ul>${cursoskey.map(cursos => `<li>${crusos}</li>`)}</ul>`;

const cursosEntries = Object.entries(cursos);
document.querySelector("#entriesDiv").innerHTML = `KEYS apresenta o nome dos atributos e seus valores<br>${cursosEntries}`


const mapVar = ["Kiwi", "Abacaxi", "Pera"];
const resultadoMap = mapVar.map((x) => "Fruta: " +x);
document.getElementById("map").innerHTML = resultadoMap