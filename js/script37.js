// Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e 
// escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior 
// ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'.

let numeroConta = prompt("Digite o numero da conta")
let saldo = parseFloat(prompt("Digite o saldo da sua conta"))
let debito= parseFloat(prompt("Digite o valor do debito"))
let credito= parseFloat(prompt("Digite o valor do credito"))

let saldoAtual = saldo - debito + credito

alert("Saldo atual: " + saldoAtual)

if(saldoAtual>= 0){
    alert("Saldo Positivo")
}else{
    alert("Saldo Negativo")
}