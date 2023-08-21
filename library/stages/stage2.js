
const iconProfile = document.querySelector('.icon-profile');
const headerIconProfile = document.querySelector('.header-icon-profile');
const popUpLogin = document.querySelector('.icon-profile-popup');
const iconsWrapper = document.querySelector('.icons-wrapper');
const registerClick = document.querySelector('.icon-profile-popup-text.register');
const popupRegister = document.querySelector('.popup-register');
const registerCloseButton = document.querySelector('.popup-register-content-close-icon');
const signUpButton = document.querySelector('.digital_library_card-account-btn');
const inputFirstName = document.getElementById('input-first-name');
const inputLastName = document.getElementById('input-last-name');
const inputEmail = document.getElementById('input-email');
const inputPassword = document.getElementById('input-password');
const signUpButtonRegister = document.querySelector('.popup-register-content-button');


/*open menu of profile icon*/

function clickIconProfile(event) {
    iconsWrapper.classList.toggle('active');
}

headerIconProfile.addEventListener('click', clickIconProfile);


/*open register menu*/

registerClick.addEventListener('click', (event) => {
    popupRegister.classList.toggle('hidden');
    iconsWrapper.classList.toggle('active')
})

popupRegister.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup-register')) {
        popupRegister.classList.toggle('hidden')
    }
})

registerCloseButton.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup-register-content-close-icon')) {
        popupRegister.classList.toggle('hidden')
    }
})

signUpButton.addEventListener('click', () => {
    popupRegister.classList.toggle('hidden');
})

/*Sign Up button in register menu */

signUpButtonRegister.addEventListener('click', () => {
    
    localStorage.setItem('user-first-name', inputFirstName.value);
    localStorage.setItem('user-last-name', inputLastName.value);
    localStorage.setItem('user-email', inputEmail.value);
    localStorage.setItem('user-password', inputPassword.value);

    let firstLetterOfName
    let firstLetterofLastname
   
    

    if (inputEmail.value !== '' && (inputPassword.value !== '') && inputPassword.value.length >= 8) {
        firstLetterOfName = inputFirstName.value[0].toUpperCase();
        firstLetterofLastname = inputLastName.value[0].toUpperCase();

        iconProfile.innerHTML = firstLetterOfName + firstLetterofLastname
    }
    
    console.log(firstLetterOfName, firstLetterofLastname)
    
        console.log('fill in the gaps')
    

    
})

console.log(localStorage)