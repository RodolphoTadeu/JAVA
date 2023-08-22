function sujeitoDemorado(){
    return new Promise ((resolve) => {
setTimeout(() => {
console.log("Espera concluida!")
resolve()
}, 2000);

    });
}
async function carregando(){
    console.log("Início");
    await sujeitoDemorado();
    console.log("Terminou");

}

carregando()