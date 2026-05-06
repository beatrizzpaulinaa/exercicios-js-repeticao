let saldo = 1000;
let saque = 1; 

while (saldo > 0 && saque > 0) {
    alert(`Saldo disponível: R$ ${saldo.toFixed(2)}`);
    saque = parseFloat(prompt("Valor do saque:"));

    if (isNaN(saque)) {
        alert("Por favor, digite um número válido.");
        saque = 1; // Reseta para não sair do loop por erro de digitação
    } else if (saque > saldo) {
        alert("Saldo insuficiente!");
    } else if (saque > 0) {
        saldo -= saque;
        alert("Saque realizado.");
    }
}
alert("Encerrando: Saldo zerado ou operação finalizada.");