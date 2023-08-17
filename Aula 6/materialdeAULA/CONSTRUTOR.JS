class computador{
    perifericos;
    monitor;
    gabinete;
    sistema;
}

class dono{
    constructor(nome, idade){
    this.nome = nome
    this.idade = idade
    }
    

}
var meucomputador= new computador();
meucomputador.perifericos = ["Teclado", "Mouse", "webcam"];
meucomputador.gabinete = "Apple";
meucomputador.monitor = "27 polegadas, ACER";
meucomputador.sistema = "MAC OS";

var dono1 = new dono("Professor")
