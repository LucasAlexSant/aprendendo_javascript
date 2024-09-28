let idade = parseInt(prompt("Digite a idade do empregado:"));

let anosTrabalho = parseInt(prompt("Digite quantos anos o empregado trabalhou:"));

let qualificado = false;

if (idade >= 65) {
    qualificado = true;
} else if (anosTrabalho >= 30) {
    qualificado = true;
} else if (idade >= 60 && anosTrabalho >= 25) {
    qualificado = true;
}

if (qualificado) {
    alert("O empregado está qualificado para a aposentadoria.");
} else {
    alert("O empregado não está qualificado para a aposentadoria.");
}