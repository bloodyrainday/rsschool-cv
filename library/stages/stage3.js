const loginClick = document.querySelector('.icon-profile-popup-text.login');
const popupLogin = document.querySelector('.popup-login');
const loginCloseButton = document.querySelector('.popup-login-content-close-icon');
const favoritesButtons = document.querySelectorAll('.favorites-book-btn');
const libraryCardBuyButton = document.querySelector('.popup-library-card-content-column1-button');

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

        /* clicking on the Buy button in the buy-a-library-card */

        libraryCardBuyButton.addEventListener('click', () => {
            const bankCardNumber = document.getElementById('bank-input');
            const expirationCode1 = document.getElementById('expiration-input');
            const expirationCode2 = document.getElementById('expiration-input2');
            const cvc = document.getElementById('cvc-input');
            const cardholderName = document.getElementById('cardholder-input');
            const postalCode = document.getElementById('postal-input');
            const city = document.getElementById('city-input');

            if ((bankCardNumber.value.length === 16) && (expirationCode1.value.length === 2) && (expirationCode2.value.length === 2) && (cvc.value.length === 3) && (cardholderName.value.length !== '') && (postalCode.value.length !== '') && (city.value.length !== '')) {
                
                document.querySelector('.popup-library-card').classList.add('hidden');

                item.textContent = 'Own';
                item.setAttribute('disabled', '');
                item.style.pointerEvents = 'none';
            }
            
        })

});

    

})