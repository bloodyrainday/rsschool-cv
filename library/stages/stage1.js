let offset = 0;

const aboutSlider = document.querySelector('.about-slider')

document.querySelector('.about-switcher-button-wrapper.left').addEventListener('click', (leftButton) => {
    offset += 475;
    if (offset > 0) {
        offset = -950;
    }
    aboutSlider.style.left = offset + 'px'
})

/*document.querySelector('.about-switcher-button-left').addEventListener('click', () => {
    offset += 450;
    aboutSlider.style.left = -offset + 'px'
})*/

document.querySelector('.about-switcher-button-wrapper.right').addEventListener('click', () => {
    offset -= 475;
    if (offset < -950) {
        offset = 0;
    }
    aboutSlider.style.left = offset + 'px'
})