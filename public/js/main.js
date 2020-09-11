//VMO Turismo - main.js
//Codificado por Matheus Ibrahim, 2020

//Set de variáveis
const fades = document.querySelectorAll(".section-fade");

const menuMobile = document.querySelector(".menu-mobile");
const botaoHamburger = document.querySelector(".botao-hamburger");
const menuClose = document.querySelector(".menu-close");

var mouseY = 0;
var pageYOffset = 0;

//Funções para rodar inicialmente
scrollCheck();

//Menu sumindo
window.addEventListener("scroll", event => {
    pageYOffset = event.path[1].scrollY;
    console.log(event);

    if (pageYOffset != 0 && document.querySelector("header") && window.innerWidth > 767 && mouseY > 200) {
        document.querySelector("header").classList.add("offset");
    } else {
        document.querySelector("header").classList.remove("offset");
    }
    
    scrollCheck();
    mouseMoveCheck(event.path[1].pageYOffset);
});

window.addEventListener("resize", event => {
    if (window.innerWidth < 767) {
        document.querySelector("header").classList.remove("offset");
    }
    
    scrollCheck();
});

window.addEventListener("mousemove", event => {
    mouseY = event.screenY;
    mouseMoveCheck(event.offsetY);
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

function mouseMoveCheck(offset) {
    if (mouseY <= 200 ||  pageYOffset == 0) {
        document.querySelector("header").classList.remove("offset");
    } else if (mouseY > 200) {
        document.querySelector("header").classList.add("offset");
    }
}