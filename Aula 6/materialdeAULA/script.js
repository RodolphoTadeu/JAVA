// window.alert ("BOM DIA!");

// var clienteum = "Cristina";
// var clienteCPF = "184.081.888.000";
// var clienteAg = "123";
// var clienteConta= "4566";


//CRIAÇÃO DE UM OBJETO EM JS QUE RECEBE ATRIBUTOS, INFORMAÇÕES 

class Cliente{

        nome;
        cpf;
    

}

class conta{
    agencia;
    conta;
    saldo;

    sacar(valorSacado){
        if(this.saldo >= valorSacado){ 
            this.saldo = this.saldo - valorSacado;
            return valorSacado;
        }else{
            return;
        }
        
    }; // uma função se da pelo uso do () e {}
    depositar(valorDepositado){
        if(valorDepositado > 0){
            this.saldo += valorDepositado;
        return
        }else{
            return;
        }
    };
}
//objeto criado!
var contaMarina = new conta();
contaMarina.conta = 1;
contaMarina.agencia = 123;
contaMarina.saldo = 0;
console.log(contaMarina);

//controlando objeto SACAR
contaMarina = 3000;
console.log(contaMarina);
contaMarina.sacar(100);
console.log(contaMarina.saldo)


//controlando o objeto - DEPOSITO
contaMarina.depositar(3000)
console.log(contaMarina)




// var cliente1  = new Cliente()
// cliente1.nome = "Cristina";
// cliente1.agencia = 123;
// cliente1.cpf = 184.081.888.000;


// console.log(cliente1);