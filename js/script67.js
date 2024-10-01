let maior = null
let menor = null

while (true) {
  let valor = parseInt(prompt("Digite um valor inteiro positivo (ou um valor negativo para sair):"))

  if (valor < 0) {
    break
  }

  if (maior == null || valor > maior) {
    maior = valor
  }

  if (menor == null || valor < menor) {
    menor = valor
  }
}

if (maior !== null && menor !== null) {
  console.log("Maior valor informado: " + maior)
  console.log("Menor valor informado: " + menor)
} else {
  console.log("Nenhum valor positivo foi informado.")
}