var salario_fixo = parseFloat(prompt("Digite o Salario: "))
var num_carros_vendidos =  parseFloat(prompt("digite a quantidade de carros vendidos"))
var valor_total_vendas = parseFloat(prompt("digite o valor total"))
var comissao_p_carro  = parseFloat(prompt("digite a comissao por carro"))

var comissaoTotal = num_carros_vendidos * comissao_p_carro
var percentualVendas = valor_total_vendas * comissao_p_carro
var salarioFinal = comissaoTotal + percentualVendas

alert ("salario alterado para " + salarioFinal)