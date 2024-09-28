let a = parseFloat(prompt("Digite o valor de a:"))
let b = parseFloat(prompt("Digite o valor de b:"))
let c = parseFloat(prompt("Digite o valor de c:"))

let mensagem;

if (a < b + c && b < a + c && c < a + b) {

    if (a === b && b === c) {
        mensagem = "Triângulo Equilátero"
    } else if (a === b || b === c || a === c) {
        mensagem = "Triângulo Isósceles"
    } else {
        mensagem = "Triângulo Escaleno"
    }
} else {
    mensagem = "Não é possível formar um triângulo"
}

alert(mensagem);