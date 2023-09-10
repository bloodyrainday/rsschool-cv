const profileCardIcon = document.querySelectorAll('.my-profile-card-content-icon-initials');
const myProfileCard = document.querySelector('.my-profile-card');
const myProfileCardCloseButton = document.querySelector('.my-profile-card-content-info-close-btn');
const logInButtonEmail = document.getElementById('input-login-email');
const logInButtonPassword = document.getElementById('input-login-password');
const logInPopUpButton = document.querySelector('.popup-login-content-button');



/*loginClickLogged.addEventListener('click', () => {
    myProfileCard.classList.toggle('hidden');
})*/

myProfileCard.addEventListener('click', (event) => {
    if (event.target.classList.contains('my-profile-card')) {
        myProfileCard.classList.toggle('hidden');
    };
});

myProfileCardCloseButton.addEventListener('click', () => {
    myProfileCard.classList.toggle('hidden');
})


/* 'My profile' button */

    /*if (loginClickLogged.classList.contains('my-profile')) {
        document.querySelector('.icon-profile-popup-text.login.my-profile').addEventListener('click', () => {
        popupLogin.classList.add('hidden');
        myProfileCard.classList.toggle('hidden');
        document.querySelector('.my-profile-card-content-info-card-number').textContent = localStorage.getItem('user-card-number');

        document.querySelector('.my-profile-card-content-icon-initials').textContent = iconProfile.textContent = localStorage.getItem('user-first-name')[0] + localStorage.getItem('user-last-name')[0];
        document.querySelector('.my-profile-card-content-icon-name').textContent = localStorage.getItem('user-first-name') + ' ' + localStorage.getItem('user-last-name')
    }

)}*/

/* 'Log Out' button */

    

    /*if (registerClick.classList.contains('logout')) {
        document.querySelector('.icon-profile-popup-text.register.logout').addEventListener('click', () => {
        popupLogin.classList.remove('hidden');
        popupRegister.classList.remove('hidden');
        myProfileCard.classList.add('hidden');


        loginClick.textContent = 'Log In';
        loginClick.classList.remove('my-profile');

        registerClick.classList.remove('logout');
        registerClick.textContent = 'Register';
})
}*/
    
/* modal library card*/

document.querySelector('.popup-library-card').addEventListener('click', (event) => {
    if (event.target.classList.contains('popup-library-card')) {
        document.querySelector('.popup-library-card').classList.toggle('hidden')
    }
})

document.querySelector('.popup-library-card-content-header-close-btn').addEventListener('click', () => {
    if (event.target.classList.contains('popup-library-card-content-header-close-btn')) {
        document.querySelector('.popup-library-card').classList.toggle('hidden')
    }
});


/* 'Log In' button in the login menu */

logInPopUpButton.addEventListener('click', () => {

    let firstLetterOfName
    let firstLetterofLastname
    let cardNumber

    if ((logInButtonEmail.value === localStorage.getItem('user-email') || logInButtonEmail.value === localStorage.getItem('user-card-number')) && (logInButtonPassword.value === localStorage.getItem('user-password'))) {
        logInButtonEmail.value = '';
        logInButtonPassword.value = '';
        popupLogin.classList.add('hidden');

        let fullName = localStorage.getItem('user-first-name') + ' ' + localStorage.getItem('user-last-name');

        firstLetterOfName = localStorage.getItem('user-first-name')[0].toUpperCase();
        firstLetterofLastname = localStorage.getItem('user-last-name')[0].toUpperCase();

        iconProfile.textContent = firstLetterOfName + firstLetterofLastname;

        iconProfile.classList.toggle('activated');

        iconProfile.setAttribute('title', fullName);

        /* clicking on the button 'Buy' */

        favoritesButtons.forEach(item => {
            item.addEventListener('click', () => {
            popupLogin.classList.add('hidden');
            document.querySelector('.popup-library-card').classList.toggle('hidden');
        })
        })

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
            document.querySelector('.icon-profile-popup-title').textContent = 'Profile';
            document.querySelector('.icon-profile-popup-title').style.fontSize = 15 + 'px'

            loginClick.textContent = 'Log In';

            loginClick.addEventListener('click', () => {
                popupLogin.classList.remove('hidden');
                myProfileCard.classList.add('hidden');
                iconProfile.innerHTML = '<img class="header-icon-profile" src="icons/icon_profile.svg" alt="account-icon">'
            })

            /* clicking on the button 'Buy' */

            favoritesButtons.forEach(item => {
                item.addEventListener('click', () => {
                    popupLogin.classList.remove('hidden');
                    document.querySelector('.popup-library-card').classList.add('hidden');         
            })

            
                
            })
        })

        /* LibraryCard after login in account */

        
            
                checkCard.style.display = 'none';
                document.querySelector('.users-info').style.display = 'flex';

                document.querySelector('.digital_library_card-form-title').textContent = 'Your Library card';

                document.querySelector('.digital_library_card-account-title').textContent = 'Visit your profile';

                document.querySelector('.digital_library_card-account-text').textContent = 'With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.';

                document.getElementById('digital_library_card-signup').style.display = 'none';

                document.getElementById('digital_library_card-login').textContent = 'Profile';

                document.getElementById('input-readers-name').value = localStorage.getItem('user-first-name');
                document.getElementById('input-card-number').value = localStorage.getItem('user-card-number');

                document.getElementById('digital_library_card-login').addEventListener('click', () => {
                    popupLogin.classList.toggle('hidden');
                    myProfileCard.classList.toggle('hidden');
                    document.querySelector('.my-profile-card-content-info-card-number').textContent = localStorage.getItem('user-card-number')

                    document.querySelector('.my-profile-card-content-icon-initials').textContent = iconProfile.textContent = firstLetterOfName + firstLetterofLastname;
                    document.querySelector('.my-profile-card-content-icon-name').textContent = fullName;

    
                })
                
             
                
            

        

    } 
})

            /* Already have an account? Login */

            document.querySelector('.popup-register-content-subtext-link').addEventListener('click', () => {
                popupLogin.classList.toggle('hidden');
                popupRegister.classList.toggle('hidden');
            })

            /* Don’t have an account? Register */

            document.querySelector('.popup-login-content-subtext-link').addEventListener('click', () => {
                popupLogin.classList.toggle('hidden');
                popupRegister.classList.toggle('hidden');
            })

            /* clicking on the button 'Log In' in the Digital-Lybrary-Card section */

            document.getElementById('digital_library_card-login').addEventListener('click', () => {
                popupLogin.classList.toggle('hidden');
            });

            