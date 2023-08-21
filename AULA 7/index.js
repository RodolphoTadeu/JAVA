// 1) crie um sistema loja onde tem como atributos:
// nome;
// localidade;
// marca;
// dono;
// produtos;
// cadastrarProdutos();
// removerProdutos();

// *sendo que a função possa manipular a lista de produtos


class loja{
    constructor(nome, localidade, marca, dono){
    this.nome = nome;
    this.localidade= localidade;
    this.marca = marca;
    this.dono = dono;
    this.produtos = [];
    this.cadastrarp = function(){
    }
    
    this.removerp = function(){
    
    }
    }

}

class Produto{
    constructor(nome, cor, valor){
        this.nome = nome;
        this.cor = cor
        this.valor = valor;
    }
}

const dono = "Vi"
const netshoes = new loja("Netshoes", "W3SUL", "MIKE", dono)


