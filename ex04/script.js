let nome = "";
let sobrenome = "";

while (nome.trim() === "") {
    nome = prompt("Digite seu primeiro nome:");
}

while (sobrenome.trim() === "") {
    sobrenome = prompt("Digite seu sobrenome:");
}

alert(`Usuário: ${nome} ${sobrenome}`); 