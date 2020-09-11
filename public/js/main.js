//VMO Turismo - main.js
//Codificado por Matheus Ibrahim, 2020

//Set de variáveis
const fades = document.querySelectorAll(".section-fade");

const menuMobile = document.querySelector(".menu-mobile");
const botaoHamburger = document.querySelector(".botao-hamburger");
const menuClose = document.querySelector(".menu-close");

//Funções para rodar inicialmente
scrollCheck();

//Menu sumindo
window.addEventListener("scroll", event => {
    if (event.path[1].pageYOffset != 0 && document.querySelector("header")) {
        document.querySelector("header").classList.add("offset");
    } else {
        document.querySelector("header").classList.remove("offset");
    }
    
    scrollCheck();
});

//Detectar se objeto está no viewport
function isInViewport(element) {
    const bounding = element.getBoundingClientRect();
    return (
        bounding.top < 700
    );
}

//Checagem ao scrollar a tela
function scrollCheck(event) {
    for (var fade of fades) {
        if (isInViewport(fade)) {
            fade.classList.remove("section-fade");
        }
    }
}

menuClose.addEventListener("click", event => {
    menuMobile.classList.add("offset-2");
});

botaoHamburger.addEventListener("click", event => {
    menuMobile.classList.remove("offset-2");
});