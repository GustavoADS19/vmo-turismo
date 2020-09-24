var sliderIndex = 1;
var delay;

const slides = document.querySelector(".overflow");
const leftArrow = document.querySelector(".slide-left");
const rightArrow = document.querySelector(".slide-right");

init();

slides.addEventListener("transitionend", event => {
    if (slides.style.transform == `translateX(0vw)`) {
        slides.style.transition = `0ms`;
        sliderIndex = 2;
        slides.style.transform = `translateX(-200vw)`;
        setTimeout(() => {
            slides.style.transition = `500ms`;
        });
    }

    if (slides.style.transform == `translateX(-300vw)`) {
        slides.style.transition = `0ms`;
        sliderIndex = 1;
        slides.style.transform = `translateX(-100vw)`;
        setTimeout(() => {
            slides.style.transition = `500ms`;
        });
    }

    clearInterval(delay);

    delay = setInterval(() => {
        sliderIndex++;
        checkCurrent();
    }, 3000);

    console.log(sliderIndex);
});

leftArrow.addEventListener("click", event => {
    sliderIndex--;
    checkCurrent();
    clearInterval(delay);
});

rightArrow.addEventListener("click", event => {
    sliderIndex++;
    checkCurrent();
    clearInterval(delay);
});

function init() {
    delay = setInterval(() => {
        sliderIndex++;
        checkCurrent();
    }, 3000);
}

function checkCurrent() {
    if (sliderIndex == 0) {
        slides.style.transform = `translateX(0vw)`;
    }

    if (sliderIndex == 1) {
        slides.style.transform = `translateX(-100vw)`;
    }

    if (sliderIndex == 2) {
        slides.style.transform = `translateX(-200vw)`;
    }

    if (sliderIndex == 3) {
        slides.style.transform = `translateX(-300vw)`;
    }

    if (sliderIndex < 0) {
        sliderIndex = 0;
    }

    if (sliderIndex > 3) {
        sliderIndex = 3;
    }
}