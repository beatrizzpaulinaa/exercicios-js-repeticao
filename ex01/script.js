let numero = -1; 

while (numero < 0 || isNaN(numero)) {
    numero = parseFloat(prompt("Digite um número positivo:"));
    if (numero < 0) {
        console.log("Número inválido! Tente novamente.");
    }
}
console.log(`Valor válido: ${numero}`); 