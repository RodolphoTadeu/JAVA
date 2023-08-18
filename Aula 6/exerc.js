// class carro {
//     marca;
//     modelo;
//     ano;
//     cor;
//     velocidadeMaxima;
//     velocidadeAtual;
// }

// class carro1{
//     constructor(nome, idade){
//     this.nome = nome
//     this.idade = idade
//     }



    class carro{

        constructor(marca, modelo, ano, cor, velocidadeMaxima){
            this.marca = marca;
            this.modelo = modelo;
            this.ano = ano;
            this.cor = cor;
            this.velocidadeMaxima = velocidadeMaxima;
            this.velocidadeAtual = 0;
//PODE SER COLOCADO UMA FUNÇÃO DENTRO DE UMA CONDIÇÃO//
            this.acelerar =  function(valor){

                if(valor > this.velocidadeMaxima){
                    return "velocidade não permetida! Velocidade suprior a configurada"
                } else{
                    thiis.velocidadeAtual += valor;
                    return 'A velocidade aumentou  $(valor) km/h' 
                }

            } 
            this.desacelerar =  function(valor){

                if(valor <= this.velocidadeAtual){
                    return "velocidade não permetida! Velocidade suprior a configurada"
                } else{
                    thiis.velocidadeAtual -= valor;
                    return 'A velocidade foi reduzida   $(valor) km/h' 
                }

            }
            this.freiar = function(){
                this.velocidadeAtual = 0
                return "Você parou o carro";
            }
        }
       
    }


    var rcz = new carro("Peugeot", 206, 2001, 180);