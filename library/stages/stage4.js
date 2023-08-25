const profileCardIcon = document.querySelectorAll('.my-profile-card-content-icon-initials');
const myProfileCard = document.querySelector('.my-profile-card');
const loginClickLogged = document.querySelector('.icon-profile-popup-text.login');
const myProfileCardCloseButton = document.querySelector('.my-profile-card-content-info-close-btn');


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
})