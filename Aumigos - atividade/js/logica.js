/*
Tema: Análise de cães disponíveis para adoção no AuMigos.

Entrada: Quantidade máxima de dias de espera informada pelo usuário.

Processamento: Analisar os cães cadastrados, classificar
seu tempo de espera e calcular um resumo dos dados.

Saída: Exibir a classificação dos cães, a quantidade
encontrada e o maior tempo de espera.

Pseudocódigo:
1. Criar uma lista com os cinco cães.
2. Solicitar ao usuário um limite de dias.
3. Validar o valor informado.
4. Percorrer a lista e classificar os cães.
5. Contar os cães que atendem ao limite.
6. Identificar o maior tempo de espera.
7. Exibir os resultados.
8. Permitir novas consultas até o usuário sair.
*/
const caes = [
    { id: 1, nome: "Nina", idade: 2, diasEspera: 15, porte: "Pequeno", selecionado: false },
    { id: 2, nome: "Fênix", idade: 3, diasEspera: 45, porte: "Grande", selecionado: false },
    { id: 3, nome: "Kiko", idade: 1, diasEspera: 10, porte: "Médio", selecionado: false },
    { id: 4, nome: "Stark", idade: 4, diasEspera: 90, porte: "Grande", selecionado: false },
    { id: 5, nome: "Tobby", idade: 2, diasEspera: 30, porte: "Pequeno", selecionado: false }
];
// Exibe os cães cadastrados em formato de tabela no Console.
console.table(caes);
function classificarEspera(dias) {
    const diasAnalisados = dias;
    if (diasAnalisados <= 15) {
        return "Espera recente";
    } else if (diasAnalisados <= 45) {
        return "Espera moderada";
    } else {
        return "Espera prolongada";
    }
}

    function estaDentroDoLimite(diasEspera, limiteDias = 30) {
        return diasEspera <= limiteDias;
}

const nomesCaes = caes.map(function(cao) {
    return cao.nome;
});
console.log("Cães cadastrados:", nomesCaes);

const caesAte30Dias = caes.filter(function(cao) {
    return cao.diasEspera <= 30;
});
console.log("Cães com até 30 dias de espera:", caesAte30Dias);

const somaDiasEspera = caes.reduce(function(total, cao) {
    return total + cao.diasEspera;
}, 0);

console.log("Soma dos dias de espera de todos os cães:", somaDiasEspera);
const listaAnalise = document.querySelector("#lista-analise");
/* Cria um item da lista com os dados e a classificação do cão. */
function criarItemCao(cao) {
    const item = document.createElement("li");
    // Identifica o cachorro para os eventos de clique.
    item.dataset.id = cao.id;

    const botao = document.createElement("button");
    botao.type = "button";
    botao.textContent = `${cao.nome} — ${cao.diasEspera} dias de espera`;
    // Recupera o estado de seleção salvo no objeto.
    botao.setAttribute("aria-pressed", String(cao.selecionado));

    if (cao.selecionado) {
        item.classList.add("cao-selecionado");
    }

    item.append(botao);

    if (cao.diasEspera <= 15) {
        item.classList.add("espera-recente");
    } else if (cao.diasEspera <= 45) {
        item.classList.add("espera-moderada");
    } else {
        item.classList.add("espera-prolongada");
    }

    return item;
}


function selecionarCao(evento) {
    const botaoClicado = evento.target.closest("button");

    if (botaoClicado === null) {
        return;
    }

    const itemClicado = botaoClicado.closest("li");
    const idCao = Number(itemClicado.dataset.id);

    const caoSelecionado = caes.find(function(cao) {
        return cao.id === idCao;
    });

    if (!caoSelecionado) {
        return;
    }

    // Atualiza a seleção nos dados do cachorro.
    caoSelecionado.selecionado = !caoSelecionado.selecionado;

    // Atualiza a aparência e a acessibilidade do botão.
    renderizarLista();
    const botaoAtualizado = listaAnalise.querySelector(
    `li[data-id="${idCao}"] button`
    );

    if (botaoAtualizado) {
    botaoAtualizado.focus();
    }

    console.log("Cachorro selecionado:", caoSelecionado.nome);
}
listaAnalise.addEventListener("click", selecionarCao);

const campoBusca = document.querySelector("#busca-cao");

// Atualiza a lista sempre que o usuário digita na pesquisa.
function pesquisarCao() {
    renderizarLista();
}

campoBusca.addEventListener("input", pesquisarCao);
// Atualiza a lista quando a alteração do campo é confirmada.
campoBusca.addEventListener("change", pesquisarCao);

// Adiciona um cachorro de exemplo temporariamente.
const botaoAdicionar = document.querySelector("#adicionar-cao");

function adicionarCao() {
    // Verifica se a Mel já foi adicionada.
    const melJaExiste = caes.some(function(cao) {
    return cao.nome === "Mel";
    });

    if (melJaExiste) {
    alert("A Mel já foi adicionada à lista!");
    return;
    }

    const novoCao = {
        id: Date.now(),
        nome: "Mel",
        idade: 2,
        diasEspera: 20,
        porte: "Pequeno",
        selecionado: false
    };

    caes.push(novoCao);

    // Limpa a pesquisa para mostrar todos os cachorros.
    campoBusca.value = "";

    // Atualiza a lista e o resumo.
    renderizarLista();
}

botaoAdicionar.addEventListener("click", adicionarCao);


function renderizarLista() {
    const textoBusca = campoBusca.value.toLowerCase();

    const caesFiltrados = caes.filter(function(cao) {
        return cao.nome.toLowerCase().includes(textoBusca);
    });

    listaAnalise.replaceChildren();

    if (caesFiltrados.length === 0) {
        const mensagem = document.createElement("li");
        mensagem.textContent = "Nenhum cachorro encontrado.";
        listaAnalise.append(mensagem);
    }

    caesFiltrados.forEach(function(cao) {
        listaAnalise.append(criarItemCao(cao));
    });

    const totalDiasFiltrados = caesFiltrados.reduce(function(total, cao) {
        return total + cao.diasEspera;
    }, 0);

    resumoAnalise.textContent =
        `Total de cães encontrados: ${caesFiltrados.length} | Soma dos dias de espera: ${totalDiasFiltrados}`;
}
const resumoAnalise = document.querySelector("#resumo-analise");
renderizarLista();

let entrada = prompt("Digite a quantidade máxima de dias de espera (0 a 365):");

do {
    // Encerra a consulta se o usuário cancelar ou digitar "sair".
    if (entrada === null || entrada.trim().toLowerCase() === "sair") {
        break;
    }

    // Verifica se o usuário deixou o campo vazio.
    if (entrada.trim() === "") {
        alert("Digite um número entre 0 e 365.");
    } else {
        const limiteDias = Number(entrada);

        // Só realiza a análise se o valor informado for válido.
        if (!Number.isFinite(limiteDias) || limiteDias < 0 || limiteDias > 365) {
            alert("Digite um número válido entre 0 e 365.");
        } else {
            alert(`Você escolheu o limite de ${limiteDias} dias.`);

            let quantidadeCaes = 0;
            let totalDias = 0;
            let maiorEspera = 0;
    /*
    Teste de mesa — limite informado: 30 dias

    Iteração 1: Nina (15 dias)
    Quantidade: 1 | Soma: 15 | Maior espera: 15

    Iteração 2: Fênix (45 dias)
    Quantidade: 1 | Soma: 15 | Maior espera: 45

    Iteração 3: Kiko (10 dias)
    Quantidade: 2 | Soma: 25 | Maior espera: 45
    */
            for (const cao of caes) {
                const classificacao = classificarEspera(cao.diasEspera);

                console.log(`${cao.nome}: ${classificacao}`);

                switch (cao.porte) {
                    case "Pequeno":
                        console.log("Cão de pequeno porte.");
                        break;

                    case "Médio":
                        console.log("Cão de médio porte.");
                        break;

                    case "Grande":
                        console.log("Cão de grande porte.");
                        break;

                    default:
                        console.log("Porte não informado.");
                        break;
                }

                if (estaDentroDoLimite(cao.diasEspera, limiteDias)) {
                    quantidadeCaes++;
                    totalDias += cao.diasEspera;
                }

                if (cao.diasEspera > maiorEspera) {
                    maiorEspera = cao.diasEspera;
                }
            }

            console.log(`Cães dentro do limite: ${quantidadeCaes}`);
            console.log(`Total de dias de espera: ${totalDias}`);
            console.log(`Maior tempo de espera: ${maiorEspera} dias`);
        }
    }

    entrada = prompt(
        "Digite outro limite de dias (0 a 365) ou escreva 'sair' para encerrar:"
    );

} while (entrada !== null && entrada.trim().toLowerCase() !== "sair");
