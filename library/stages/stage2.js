
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
const checkCard = document.querySelector('.digital_library_card-form-btn');


/*open menu of profile icon*/

function clickIconProfile(event) {
    popUpLogin.classList.toggle('active');
}

iconProfile.addEventListener('click', clickIconProfile);


/*open register menu*/

registerClick.addEventListener('click', (event) => {
    popupRegister.classList.toggle('hidden');
    popUpLogin.classList.toggle('active')
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

        iconProfile.textContent = firstLetterOfName + firstLetterofLastname;

        iconProfile.classList.add('activated')

        /* card number */

        let cardNumber = [];
        let randomNumbers;
        while (cardNumber.length < 9) {
            randomNumbers = Math.floor(Math.random() * 16).toString(16);
            cardNumber.push(randomNumbers)
        }
        localStorage.setItem('user-card-number', cardNumber.join('').toUpperCase())
        /*console.log('Here is your card number ' + cardNumber.join('').toUpperCase())*/
    } else {
        console.log('fill in the gaps')
    }
    
    console.log(firstLetterOfName, firstLetterofLastname)
})

/* check-the-card button*/

checkCard.addEventListener('click', () => {
    if ((document.getElementById('input-readers-name').value === localStorage.getItem('user-first-name')) && (document.getElementById('input-card-number').value === localStorage.getItem('user-card-number'))) {
        checkCard.style.display = 'none';
        document.querySelector('.users-info').style.display = 'flex'
        setTimeout(() => {
            checkCard.style.display = 'block';
            document.querySelector('.users-info').style.display = 'none';
            document.getElementById('input-readers-name').value = '';
            document.getElementById('input-card-number').value = '';
        }, 10000)
    } else {
        console.log('this name or card number does not exist!')
    }
    
    
})