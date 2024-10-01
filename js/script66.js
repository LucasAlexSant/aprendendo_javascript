let areaTotal = 0
let continuar = true

while (continuar) {
  let nome = prompt("Digite o nome do cômodo:")
  let largura = parseFloat(prompt("Digite a largura do cômodo (em metros):"))
  let comprimento = parseFloat(prompt("Digite o comprimento do cômodo (em metros):"))
  
  let area = largura * comprimento
  areaTotal += area
  
  console.log("Área do cômodo " + nome + ": " + area + " m²")

  let resposta = prompt("Deseja calcular a área de outro cômodo? (Digite 'SIM' ou 'NAO')").toUpperCase()
  
  if (resposta === "NAO") {
    continuar = false
  }
}

console.log("Área total da residência: " + areaTotal + " m²")