let valor1 = parseFloat(prompt("Digite o primeiro valor:"))
let valor2 = parseFloat(prompt("Digite o segundo valor:"))
let valor3 = parseFloat(prompt("Digite o terceiro valor:"))

let maior, segundoMaior

if (valor1 > valor2 && valor1 > valor3) {
    maior = valor1
    segundoMaior = (valor2 > valor3) ? valor2 : valor3
} else if (valor2 > valor1 && valor2 > valor3) {
    maior = valor2
    segundoMaior = (valor1 > valor3) ? valor1 : valor3
} else {
    maior = valor3
    segundoMaior = (valor1 > valor2) ? valor1 : valor2
}

let somaDosMaiores = maior + segundoMaior

alert("A soma dos dois maiores valores é: "+ somaDosMaiores)