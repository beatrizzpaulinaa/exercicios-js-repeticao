let soma = 0;
let contador = 0;
let nota = 0; 

while (nota >= 0) {
    nota = parseFloat(prompt("Digite uma nota (0-10) ou negativo para sair:"));
    
    if (nota >= 0 && nota <= 10) {
        soma += nota;
        contador++;
    } else if (nota > 10) {
        console.log("Nota inválida! Use valores entre 0 e 10.");
    }
}

const media = contador > 0 ? soma / contador : 0;
console.log(`Média final: ${media.toFixed(2)}`);