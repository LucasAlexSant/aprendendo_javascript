let A = true 
let B = true
let C = false

let resultadoA = (A && B) || (A !== B)
alert("Resultado a: " + resultadoA)

let resultadoB = (A || B) && (A && C)
alert("Resultado b: " + resultadoB)

let resultadoC = A || (C && B) !== (A && !B)
alert("Resultado c: " + resultadoC)