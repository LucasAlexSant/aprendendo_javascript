let nome = prompt("Digite o seu nome")
let altura = parseFloat(prompt("Digite a sua altura"))
let sexo = prompt("Digite o seu sexo ( m,f )")

let pesoIdeal

if (sexo === "f") {
    pesoIdeal = (62.1 * altura) - 44.7;
} else if (sexo === "m") {
    pesoIdeal = (72.7 * altura) - 58;
} else {
    alert("Sexo inválido. Por favor, informe 'm' ou 'f'.");
}


alert("O peso Ideal é de " + pesoIdeal)