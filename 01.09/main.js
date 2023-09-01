const btnSortear = document.querySelector(".sortear");
const textarea = document.querySelector("textarea");
const tagResultado = document.querySelector(".resultado p");
const popUpResultado = document.querySelector(".resultado");

function pegarDadosFormulario() {
    const valorCampo = textarea.value;
    const listaNomes = valorCampo.split(",")
    const tamanhoArray = listaNomes.length;
    const posicaoNome = gerarNomeAleatorio(tamanhoArray);
    const nome = listaNomes[posicaoNome]
    mostrarResultado(nome);

    textarea.value = ""
}
btnSortear.addEventListener("click", pegarDadosFormulario)

function gerarNomeAleatorio(tamanhoArray) {
    return Math.floor(Math.random()*(tamanhoArray - 0) + 0)
}

function mostrarResultado(nome) {
    tagResultado.innerHTML = 'Resultado: $(nome)';
    popUpResultado.classList.add("mostrarResultado");
}

