var anoAtual = new Date().getFullYear();
var anoNascimento = parseInt(prompt("Em qual ano você nasceu?"));

var idade = anoAtual - anoNascimento;

if (idade < 18) {
    alert("Você não pode votar.");
} else {
    alert("Você deve votar.");
}