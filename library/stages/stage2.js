
const iconProfile = document.querySelector('.icon-profile');
const popUpLogin = document.querySelector('.icon-profile-popup');
const iconsWrapper = document.querySelector('.icons-wrapper');
const registerClick = document.querySelector('.icon-profile-popup-text.register');
const popupRegister = document.querySelector('.popup-register');
const registerCloseButton = document.querySelector('.popup-register-content-close-icon')

/*open menu of profile icon*/

function clickIconProfile(event) {
    iconsWrapper.classList.toggle('active');
}

iconProfile.addEventListener('click', clickIconProfile);

/*open register menu*/

registerClick.addEventListener('click', (event) => {
    popupRegister.classList.toggle('hidden')
})

popupRegister.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup-register')) {
        popupRegister.classList.toggle('hidden')
    }
})

registerCloseButton.addEventListener('click', () => {
    if (event.target.classList.contains('popup-register-content-close-icon')) {
        popupRegister.classList.toggle('hidden')
    }
})