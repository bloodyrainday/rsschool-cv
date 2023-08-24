
const iconProfile = document.querySelector('.icon-profile');
const headerIconProfile = document.querySelector('.header-icon-profile');
const iconProfilePopup = document.querySelector('.icon-profile-popup');
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
const profileTitleMenu = document.querySelector('.icon-profile-popup-title');

/*open menu of profile icon*/

iconProfile.addEventListener('click', () => {
    iconProfilePopup.classList.toggle('active');
    
});

document.addEventListener('click', event => {
    const clickOnBurger = event.composedPath().includes(burger);
    const clickOnProfileIcon = event.composedPath().includes(iconProfile);
    
        if (!clickOnBurger && !clickOnProfileIcon) {
            iconProfilePopup.classList.remove('active');
        }
})

/*open register menu*/

registerClick.addEventListener('click', (event) => {
    popupRegister.classList.toggle('hidden');
    iconProfilePopup.classList.toggle('active')
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
    let cardNumber

    if ((inputEmail.value !== '') && (inputPassword.value !== '') && (inputPassword.value.length >= 8)) {
        let fullName = inputFirstName.value + ' ' + inputLastName.value
        firstLetterOfName = inputFirstName.value[0].toUpperCase();
        firstLetterofLastname = inputLastName.value[0].toUpperCase();

        iconProfile.textContent = firstLetterOfName + firstLetterofLastname;

        console.log(iconProfile.textContent = firstLetterOfName + firstLetterofLastname);

        iconProfile.classList.toggle('activated');

        iconProfile.setAttribute('title', fullName);

        /* clicking on the button 'My profile' */

        
        
        loginClick.textContent = 'My profile';

        loginClick.addEventListener('click', () => {
            popupLogin.classList.toggle('hidden');
            myProfileCard.classList.toggle('hidden');
            document.querySelector('.my-profile-card-content-info-card-number').textContent = localStorage.getItem('user-card-number')

            document.querySelector('.my-profile-card-content-icon-initials').textContent = iconProfile.textContent = firstLetterOfName + firstLetterofLastname;
            document.querySelector('.my-profile-card-content-icon-name').textContent = fullName
        })

        /* clicking on the button 'Log out' */

        
        
        registerClick.textContent = 'Log Out';
        
        registerClick.addEventListener('click', () => {
            popupRegister.classList.add('hidden');

            registerClick.textContent = 'Register';

            registerClick.addEventListener('click', () => {
                popupRegister.classList.remove('hidden');
            })

            iconProfile.classList.remove('activated');
            iconProfile.setAttribute('title', '');
            iconProfile.innerHTML = '<img class="header-icon-profile" src="icons/icon_profile.svg" alt="account-icon">'
            
            loginClick.textContent = 'Log In';

            loginClick.addEventListener('click', () => {
                popupLogin.classList.remove('hidden');
                myProfileCard.classList.add('hidden');
                iconProfile.innerHTML = '<img class="header-icon-profile" src="icons/icon_profile.svg" alt="account-icon">'
            })
        })

    
        
        /* card number */

        cardNumber = [];
        let randomNumbers;
        while (cardNumber.length < 9) {
            randomNumbers = Math.floor(Math.random() * 16).toString(16);
            cardNumber.push(randomNumbers)
        };
        profileTitleMenu.style.fontSize = 12 + 'px';

        profileTitleMenu.textContent = cardNumber.join('').toUpperCase();
        localStorage.setItem('user-card-number', cardNumber.join('').toUpperCase());


        console.log('Here is your card number ' + cardNumber.join('').toUpperCase())
    } else {
        console.log('fill in the gaps')
    }
    
    console.log(firstLetterOfName, firstLetterofLastname); 
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