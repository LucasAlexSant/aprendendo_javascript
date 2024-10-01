let soma = 0
let contador = 0
let numero = 50

while (numero <= 70) {
  if (numero % 2 == 0) {
    soma += numero
    contador++
  }
  numero++
}

let media = contador > 0 ? soma / contador : 0

console.log("Soma dos valores pares: " + soma)
console.log("Média dos valores pares: " + media)