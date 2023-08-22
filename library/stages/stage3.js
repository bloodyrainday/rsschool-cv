const loginClick = document.querySelector('.icon-profile-popup-text.login');
const popupLogin = document.querySelector('.popup-login');
const loginCloseButton = document.querySelector('.popup-login-content-close-icon');
const favoritesButtons = document.querySelectorAll('.favorites-book-btn');

loginClick.addEventListener('click', () => {
    popupLogin.classList.toggle('hidden');
    iconProfilePopup.classList.toggle('active')
});

popupLogin.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup-login')) {
        popupLogin.classList.toggle('hidden')
    }
});

loginCloseButton.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup-login-content-close-icon')) {
        popupLogin.classList.toggle('hidden')
    }
})

favoritesButtons.forEach(item => {
    item.addEventListener('click', () => {
    popupLogin.classList.toggle('hidden');
})
})