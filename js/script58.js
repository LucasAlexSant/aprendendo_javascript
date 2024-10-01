let soma = 0
let i = 1

while (i <= 500) {
    if (i % 2 == 0) {  
        soma += i
    }
    i++
}

console.log("O somatório dos valores pares entre 1 e 500 é: " + soma)