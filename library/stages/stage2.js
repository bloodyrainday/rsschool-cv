
const iconProfile = document.querySelector('.icon-profile');
const popUpLogin = document.querySelector('.icon-profile-popup');
const iconsWrapper = document.querySelector('.icons-wrapper')

function clickIconProfile(event) {
    iconsWrapper.classList.toggle('active');
}

iconProfile.addEventListener('click', clickIconProfile);

console.log('from stage2')