let kgMorango = parseFloat(prompt("Digite a quantidade de morangos (em Kg):"))
let kgMaca = parseFloat(prompt("Digite a quantidade de maçãs (em Kg):"))

let precoMorango = kgMorango <= 5 ? 2.50 : 2.20
let precoMaca = kgMaca <= 5 ? 1.80 : 1.50

let totalMorango = kgMorango * precoMorango
let totalMaca = kgMaca * precoMaca
let valorTotal = totalMorango + totalMaca

if (kgMorango + kgMaca > 8 || valorTotal > 25) {
    valorTotal *= 0.90;
}

alert("O valor total a ser pago pelo cliente é: R$ " + valorTotal.toFixed(2))