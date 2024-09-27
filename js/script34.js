const horaSemanal = 160
let horasTrabalhadas = parseInt(prompt("Digite a quantidade de horas trabalhadas"))
let salarioHora = parseFloat(prompt ("Digite o valor do salario por hora"))
let salarioFinal

if (horasTrabalhadas > horaSemanal){
    salarioFinal = (salarioHora * horaSemanal) + ((horasTrabalhadas - 160) * 1.5)
}
else{
    salarioFinal = salarioHora * horasTrabalhadas
}

alert("O seu salário atualizado é de: "+ salarioFinal)