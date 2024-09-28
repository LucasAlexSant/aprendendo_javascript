const codigoCorreto = 1234;
const senhaCorreta = 9999;

let codigoUsuario = parseInt(prompt("Digite o código do usuário:"))

if (codigoUsuario !== codigoCorreto) {
    alert("Usuário inválido!")
} else {
    let senhaUsuario = parseInt(prompt("Digite a senha:"))

    if (senhaUsuario !== senhaCorreta) {
        alert("Senha incorreta!")
    } else {
        alert("Acesso permitido!")
    }
}