const pilha = [];

const elementoPilha = (valor) => {
    const caixa = document.createElement("div");
    caixa.classList.add("caixa");
    caixa.textContent = valor;
    return caixa;
};

const adicionar = () => {
    const valor = document.getElementById("valor").value;
    if (!valor) return;
    pilha.push(valor);
    const caixa = elementoPilha(valor);
    document.getElementById("pilha").appendChild(caixa);
};

const remover = () => {
    if (!pilha.length) return;
    const valor = pilha.pop();
    document.getElementById("pilha").removeChild(document.getElementById("pilha").lastChild);
};

document.getElementById("adicionar").addEventListener("click", adicionar);
document.getElementById("remover").addEventListener("click", remover);
