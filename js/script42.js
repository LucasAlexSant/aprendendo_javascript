const valor1 = parseFloat(prompt("Digite o primeiro valor:"));
const valor2 = parseFloat(prompt("Digite o segundo valor:"));
const valor3 = parseFloat(prompt("Digite o terceiro valor:"));

let menor, medio, maior;

if (valor1 < valor2 && valor1 < valor3) {
    menor = valor1;
    if (valor2 < valor3) {
        medio = valor2;
        maior = valor3;
    } else {
        medio = valor3;
        maior = valor2;
    }
} else if (valor2 < valor1 && valor2 < valor3) {
    menor = valor2;
    if (valor1 < valor3) {
        medio = valor1;
        maior = valor3;
    } else {
        medio = valor3;
        maior = valor1;
    }
} else {
    menor = valor3;
    if (valor1 < valor2) {
        medio = valor1;
        maior = valor2;
    } else {
        medio = valor2;
        maior = valor1;
    }
}

alert("Valores em ordem crescente: " + menor + ", " + medio + ", " + maior);