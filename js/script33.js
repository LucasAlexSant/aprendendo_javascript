let horaInicial = parseInt(prompt("Digite a hora de início (0 a 23):"));
let horaFim = parseInt(prompt("Digite a hora de fim (0 a 23):"));

let duracao;

if (horaInicial < 0 || horaInicial >= 24 || horaFim < 0 || horaFim >= 24) {
    alert("As horas devem estar entre 0 e 23.");
} else {
    if (horaFim < horaInicial) {
        duracao = (24 - horaInicial) + horaFim;
    } else {
        duracao = horaFim - horaInicial;
    }
    
    alert("a duração da partida foi de " + duracao +" horas");
}