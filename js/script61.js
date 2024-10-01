let base = prompt("Digite a base")
let expoente = prompt("Digite o expoente")
let resultado = 1

base = parseFloat(base) 
expoente = parseInt(expoente)

if (expoente < 0) {
    base = 1 / base
    expoente = -expoente
}

let i = 0
while (i < expoente) {
    resultado *= base
    i++
}

alert(base + " elevado a " + expoente + " é " + resultado)