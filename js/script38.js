let quantidadeAtual = parseInt(prompt("Digite a quantidade atual em estoque:"))
let quantidadeMaxima = parseInt(prompt("Digite a quantidade máxima em estoque:"))
let quantidadeMinima = parseInt(prompt("Digite a quantidade mínima em estoque:"))

let quantidadeMedia = (quantidadeMaxima + quantidadeMinima) / 2

alert("Quantidade média em estoque: "+ quantidadeMedia)

if (quantidadeAtual >= quantidadeMedia) {
    alert("Não efetuar compra")
} else {
    alert("Efetuar compra")
}