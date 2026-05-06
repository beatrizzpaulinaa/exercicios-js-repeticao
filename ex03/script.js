let total = 0;
let valorCompra = -1; 

while (valorCompra !== 0) {
    valorCompra = parseFloat(prompt("Digite o valor do item (ou 0 para encerrar):"));

    if (!isNaN(valorCompra) && valorCompra > 0) {
        total += valorCompra;
        alert(`Adicionado: R$ ${valorCompra.toFixed(2)}`);
    } else if (valorCompra < 0) {
        alert("Valores negativos não são permitidos.");
    }
}


alert("Total final: R$ " + total.toFixed(2));
alert("Compra finalizada! O total é: R$ " + total.toFixed(2));
alert(`--- COMPRA FINALIZADA ---`);
