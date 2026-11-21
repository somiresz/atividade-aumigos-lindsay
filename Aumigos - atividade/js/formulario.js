const formulario = document.querySelector("#formulario-adocao");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault()
    const campoTelefone = document.querySelector("#telefone");

    const telefoneLimpo = campoTelefone.value.replace(/\D/g, "");

    if (telefoneLimpo !== "" && telefoneLimpo.length !== 10 && telefoneLimpo.length !== 11) {
        alert("Digite um telefone com 10 ou 11 números.");
        return;
    }

    campoTelefone.value = telefoneLimpo;

    const campoData = document.querySelector("#data");
    const dataEscolhida = campoData.value;

    const hoje = new Date();
    const dataAtual = hoje.getFullYear() + "-" +
        String(hoje.getMonth() + 1).padStart(2, "0") + "-" +
        String(hoje.getDate()).padStart(2, "0");

    if (dataEscolhida !== "" && dataEscolhida < dataAtual) {
        alert("Escolha uma data de hoje em diante.");
        return;
    }

    const mensagemFormulario = document.querySelector("#mensagem-formulario");
    mensagemFormulario.textContent = "Formulário validado! Esta é uma demonstração. Nenhuma solicitação foi enviada à equipe.";
});