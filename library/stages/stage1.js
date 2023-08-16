let offset = 0;

const aboutSlider = document.querySelector('.about-slider')

document.querySelector('.about-switcher-button-wrapper.left').addEventListener('click', () => {
    document.querySelector('.about-switcher-button-left').classList.add('about-buttons-color');
    offset += 950;
    if (offset > 0) {
        offset = 0;
    }
    aboutSlider.style.left = offset + 'px';
    document.querySelector('.about-switcher-button-center').classList.remove('about-buttons-color');
    document.querySelector('.about-switcher-button-right').classList.remove('about-buttons-color');
    
})

document.querySelector('.about-switcher-button-wrapper.center').addEventListener('click', () => {
    document.querySelector('.about-switcher-button-center').classList.add('about-buttons-color');
    offset -= 475;
    if (offset < -475) {
        offset = -475;
    }
    aboutSlider.style.left = offset + 'px';
    document.querySelector('.about-switcher-button-left').classList.remove('about-buttons-color');
    document.querySelector('.about-switcher-button-right').classList.remove('about-buttons-color');
})

document.querySelector('.about-switcher-button-wrapper.right').addEventListener('click', () => {
    document.querySelector('.about-switcher-button-right').classList.add('about-buttons-color');
    offset -= 950;
    if (offset < -950) {
        offset = -950;
    }
    aboutSlider.style.left = offset + 'px';
    document.querySelector('.about-switcher-button-left').classList.remove('about-buttons-color');
    document.querySelector('.about-switcher-button-center').classList.remove('about-buttons-color')
})