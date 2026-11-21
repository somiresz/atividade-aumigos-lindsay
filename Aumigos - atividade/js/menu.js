const botaoMenu = document.querySelector(".botao-menu");
const menuNavegacao = document.querySelector("#menu-navegacao");

botaoMenu.addEventListener("click", function () {
    menuNavegacao.classList.toggle("menu-aberto");

    const estaAberto = menuNavegacao.classList.contains("menu-aberto");

    botaoMenu.setAttribute("aria-expanded", String(estaAberto));
});