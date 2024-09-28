let N1 = parseFloat(prompt("Digite a nota da 1ª verificação:"));
let N2 = parseFloat(prompt("Digite a nota da 2ª verificação:"));
let N3 = parseFloat(prompt("Digite a nota da 3ª verificação:"));

let mediaExercicios = parseFloat(prompt("Digite a média dos exercícios:"));

let mediaAproveitamento = (N1 + N2 * 2 + N3 * 3 + mediaExercicios) / 7;

let conceito;
if (mediaAproveitamento >= 9.0) {
    conceito = "A";
} else if (mediaAproveitamento >= 7.5) {
    conceito = "B";
} else if (mediaAproveitamento >= 6.0) {
    conceito = "C";
} else {
    conceito = "D";
}

alert("Média de Aproveitamento: " + mediaAproveitamento.toFixed(2));
alert("Conceito: " + conceito);