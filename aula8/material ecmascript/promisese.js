const primeiraPromise = new Promise((resolve, reject) =>{
var nome = "Tadeu";

    if( nome === "Tadeu"){
        resolve("Usuário Encontrado");
    
    }else{
        reject("Usuário Não encontrado!")
    }
});

primeiraPromise.then((data) =>{

    console.log(data);
})