// lista_exercicios.js

function exercicio1() {
    let numero = Number(prompt("Digite um número positivo: "));

    while (numero < 0) {
        numero = Number(prompt("Valor inválido! Digite um número positivo: "));
    }

    alert("Número válido: " + numero);
}

function exercicio2() {
    let soma = 0;
    let quantidade = 0;
    let nota = Number(prompt("Digite uma nota (negativo para sair): "));

    while (nota >= 0) {
        if (nota >= 0 && nota <= 10) {
            soma += nota;
            quantidade++;
        } else {
            alert("Nota inválida. Digite entre 0 e 10.");
        }

        nota = Number(prompt("Digite uma nota (negativo para sair): "));
    }

    if (quantidade > 0) {
        alert("Média: " + (soma / quantidade));
    } else {
        alert("Nenhuma nota válida foi digitada.");
    }
}

function exercicio3() {
    let total = 0;
    let valor = Number(prompt("Digite o valor da compra (0 para finalizar): "));

    while (valor !== 0) {
        total += valor;
        valor = Number(prompt("Digite o valor da compra (0 para finalizar): "));
    }

    alert("Total da compra: R$ " + total.toFixed(2));
}

function exercicio4() {
    let nome = prompt("Digite seu primeiro nome: ").trim();

    while (nome === "") {
        nome = prompt("Nome inválido! Digite seu primeiro nome: ").trim();
    }

    let sobrenome = prompt("Digite seu sobrenome: ").trim();

    while (sobrenome === "") {
        sobrenome = prompt("Sobrenome inválido! Digite seu sobrenome: ").trim();
    }

    alert("Nome completo: " + nome + " " + sobrenome);
}

function exercicio5() {
    let saldo = 1000;
    let saque = Number(prompt("Saldo: R$ " + saldo + "\nDigite o valor para saque: "));

    while (saldo > 0) {
        if (saque <= saldo) {
            saldo -= saque;
            alert("Saque realizado! Saldo atual: R$ " + saldo.toFixed(2));
        } else {
            alert("Saldo insuficiente!");
        }

        if (saldo <= 0) break;

        saque = Number(prompt("Saldo: R$ " + saldo + "\nDigite o valor para saque: "));
    }

    alert("Conta encerrada. Saldo final: R$ " + saldo.toFixed(2));
}

// MENU
let opcao = prompt(
    "=== MENU ===\n" +
    "1 - Número positivo\n" +
    "2 - Média de notas\n" +
    "3 - Soma de compras\n" +
    "4 - Nome completo\n" +
    "5 - Saque bancário\n" +
    "0 - Sair"
);

while (opcao !== "0") {
    if (opcao === "1") exercicio1();
    else if (opcao === "2") exercicio2();
    else if (opcao === "3") exercicio3();
    else if (opcao === "4") exercicio4();
    else if (opcao === "5") exercicio5();
    else alert("Opção inválida!");

    opcao = prompt(
        "\n=== MENU ===\n" +
        "1 - Número positivo\n" +
        "2 - Média de notas\n" +
        "3 - Soma de compras\n" +
        "4 - Nome completo\n" +
        "5 - Saque bancário\n" +
        "0 - Sair"
    );
}

alert("Programa encerrado!");
