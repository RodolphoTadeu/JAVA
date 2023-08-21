// 2) faça uma página de cadastramento de filmes onde o usuario possa 
// salvar um filme e suas informações como nome, descrição,data, diretor e 
// categoria e liste ela de alguma forma em algum elemento HTML!

var nome = document.querySelector ("#nome");
var descrição = document.querySelector ("#descricão");
var categoria = document.querySelector ("#categoria");
var diretor = document.querySelector ("#diretor");
var data = document.querySelector ("#data");
const filmecadsatrado = document.querySelector ("#data")
const cadatrarBtn = document.querySelector ("#filme");

cadatrarBtn.addEventListener('click', cadastrar );

function cadastrar(){
    class Filme{
        constructor(nome, descricao, data, direitor, categoria ){
            this.nome = nome;
            this.descricao = descricao;
            this.data = data;
            this.direitor = direitor;
            this.categoria = categoria
        }
    }

    let nome
    var filmeTeste = new Filme (aaa,aaaa,aaaaa,aaaa,aaaa);
    console.log(filmeTeste)
}
