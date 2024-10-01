let termos = 15
let a = 1 // Primeiro termo
let b = 1 // Segundo termo

console.log("Série de Fibonacci até o décimo quinto termo:")

let i = 1
while (i <= termos) {
    console.log(a) 
    let proximo = a + b 
    a = b 
    b = proximo 
    i++ 
}