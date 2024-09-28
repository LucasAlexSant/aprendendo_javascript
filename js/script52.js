let nomeProduto = prompt("Digite a descrição do produto:")

let quantidade = parseInt(prompt("Digite a quantidade adquirida:"))

let precoUnitario = parseFloat(prompt("Digite o preço unitário:"))

let total = quantidade * precoUnitario

let desconto
if (quantidade <= 5) {
    desconto = total * 0.02
} else if (quantidade > 5 && quantidade <= 10) {
    desconto = total * 0.03
} else {
    desconto = total * 0.05
}

let totalAPagar = total - desconto

alert("Descrição do produto: " + nomeProduto)
alert("Total: R$ " + total.toFixed(2))
alert("Desconto: R$ " + desconto.toFixed(2))
alert("Total a pagar: R$ " + totalAPagar.toFixed(2))