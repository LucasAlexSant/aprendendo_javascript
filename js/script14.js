var salarioAtual = parseFloat(prompt("Salário atual:"));
var percentualReajuste = parseFloat(prompt("Percentual de reajuste:"));

var novoSalario = tofix()(salarioAtual * (1 + percentualReajuste / 100));

alert("novo salario $"+ novoSalario);