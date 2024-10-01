let soma = 0
let contador = 0

while (contador < 10) {
  let valor = parseFloat(prompt("Digite um número:"))
  soma += valor
  contador++
}

let media = soma / 10

console.log("Somatório: " + soma)
console.log("Média: " + media)