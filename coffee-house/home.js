const burgerMenuButton = document.querySelector('.nav-menu');
const burgerMenuItems = document.querySelectorAll(".burger-menu-links-list-item");
const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuCloseButton = document.querySelector('.nav-menu-burger');
const slider = document.querySelector('.favorite_coffee-slider-center');
const slides = document.querySelectorAll(".favorite_coffee-slider-center-slide");
const sliderLine = document.querySelector('.favorite_coffee-slider-center-slide_line');
let count = 0;
let width;

/* BURGER MENU START */

burgerMenuButton.addEventListener('click', (event) => {
    burgerMenu.classList.toggle('active');
    burgerMenuCloseButton.classList.toggle('active');
});

    
/*for (let i = 0; i <= burgerMenuItems.length; i++) {
    burgerMenuItems[i].addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        burgerMenuCloseButton.classList.toggle('active');
    })
}*/

/* BURGER MENU END */

/* SLIDER START */

function init() {
    width = slider.offsetWidth;
    sliderLine.style.width = width * slides.length + 'px';
    slides.forEach( item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    })
    console.log(width)
    rollSlider();
}

window.addEventListener('resize', init)

init();

document.querySelector('.favorite_coffee-slider-arrow.right').addEventListener('click', function() {
    count++;
    if (count >= slides.length) {
        count = 0;
    }
    rollSlider();
})

document.querySelector('.favorite_coffee-slider-arrow.left').addEventListener('click', function() {
    count--;
    if (count < 0) {
        count = slides.length - 1;
    }
    rollSlider();
})

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}
/* SLIDER END */