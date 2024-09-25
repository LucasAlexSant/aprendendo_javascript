var custoFabrica = parseFloat(prompt("Digite o custo de fábrica do carro:"));

var percentualDistribuidor = 0.28;
var percentualImpostos = 0.45;

var custoDistribuidor = custoFabrica * percentualDistribuidor;
var custoImpostos = custoFabrica * percentualImpostos;
var custoFinal = custoFabrica + custoDistribuidor + custoImpostos;

alert("Custo final ao consumidor: R$ " + custoFinal);