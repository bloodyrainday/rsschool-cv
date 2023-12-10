const burgerMenuButton = document.querySelector('.nav-menu');
const burgerMenuItems = document.querySelectorAll(".burger-menu-links-list-item");
const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuCloseButton = document.querySelector('.nav-menu-burger');

burgerMenuButton.addEventListener('click', (event) => {
    burgerMenu.classList.toggle('active');
    burgerMenuCloseButton.classList.toggle('active');
});

    
for (let i = 0; i <= burgerMenuItems.length; i++) {
    burgerMenuItems[i].addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        burgerMenuCloseButton.classList.toggle('active');
    })
}