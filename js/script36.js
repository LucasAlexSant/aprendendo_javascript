let salarioFixo = parseFloat(prompt("Digite o salario fixo"))
let vendas = parseFloat(prompt("Digite o valor total das vendas"))

let comissao

if ( vendas <= 1500){
    comissao = vendas * 0.03
}else{
    comissao = (1500 * 0.03) + ((vendas - 1500) * 0.05)
}

let salarioTotal = salarioFixo + comissao

alert(" Seu salario foi de R$"+ salarioTotal)
