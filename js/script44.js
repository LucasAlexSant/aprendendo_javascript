let time1 = prompt("Digite o nome do primeiro time:");
let time2 = prompt("Digite o nome do segundo time:");
let golsTime1 = parseInt(prompt("Digite o número de gols do " +time1));
let golsTime2 = parseInt(prompt("Digite o número de gols do " +time2));

if (golsTime1 > golsTime2) {
    alert("Vencedor: "+ time1);
} else if (golsTime2 > golsTime1) {
    alert("Vencedor: "+ time2);
} else {
    alert("EMPATE");
}