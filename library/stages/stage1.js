let offset = 0;
const images = document.querySelectorAll('.about-slider-item');
const sliderLine = document.querySelector('.about-slider');
let count = 0;
let width;


function init() {
    width = document.querySelector('.about-slider-wrapper').offsetWidth;
    console.log(width);
    if (width >= 1400) {
        sliderLine.style.width = width + 'px';
    } else if ((width < 1400) && (width >= 970)) {
        sliderLine.style.width = width * (images.length - 2.5) + 'px';
    } else if (width < 970) {
        sliderLine.style.width = width * (images.length) + 'px';
    }
    
        images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    })
    /*console.log(document.querySelector('.about-slider-item.first').offsetWidth)*/
}



window.addEventListener('resize', init);
init()

let minWidthScreen1011px = window.matchMedia('(min-width: 1011px)');
let maxWidthScreen768px = window.matchMedia('(max-width: 768px)');
console.log(Array.from(document.querySelectorAll('.about-slider-item')))

/*function rollSlider() {
    sliderLine.style.left = '-' + count * 475 + 'px';
}*/

const itemWidth = document.querySelector('.about-slider-item.first').offsetWidth;
const sliderLineWidth = document.querySelector('.about-slider').offsetWidth


document.querySelector('.about-switcher-button-wrapper.left').addEventListener('click', () => {
    /*count--;
    if (count <= images.length ) {
        count = 0
    }*/
    /*rollSlider()*/
    document.querySelector('.about-switcher-button-left').classList.add('about-buttons-color');
    if (width >= 1400) {
            offset += 950;
        if (offset > 0) {
            offset = 0;
        }

    } else if ((width < 1400) && (width >= 970)) {
        offset += (2 * itemWidth + 50)
        if (offset > 0 || offset < (2 * itemWidth + 50)) {
            offset = 0;
        }
    } else if (width < 970) {
        offset += 950;
        if (offset > 0) {
            offset = 0;
        }
    }
    

    sliderLine.style.left = offset + 'px';
    document.querySelector('.about-switcher-button-center').classList.remove('about-buttons-color');
    document.querySelector('.about-switcher-button-right').classList.remove('about-buttons-color');
    
})

    document.querySelector('.about-switcher-button-wrapper.center').addEventListener('click', () => {
        /*count++;
        if (count >= images.length ) {
            count = 1
        }*/
        /*rollSlider()*/
    document.querySelector('.about-switcher-button-center').classList.add('about-buttons-color');

    if (width >= 1400) {
        offset -= 475;
        if (offset < -475) {
            offset = -475;
        }
    } else if ((width < 1400) && (width >= 970)) {
        
        offset -= (2 * itemWidth + 50)
        if (offset < - (2 * itemWidth + 50)) {
            offset = - (2 * itemWidth + 50);
        }
    } else if (width < 970) {
        offset -= 475;
        if (offset < -475) {
            offset = -475;
        }
    }

    sliderLine.style.left = offset + 'px';
    document.querySelector('.about-switcher-button-left').classList.remove('about-buttons-color');
    document.querySelector('.about-switcher-button-right').classList.remove('about-buttons-color');
})

    document.querySelector('.about-switcher-button-wrapper.right').addEventListener('click', () => {
        /*count++;
    if (count >= images.length ) {
        count = 2
    }*/
    /*rollSlider()*/

    document.querySelector('.about-switcher-button-right').classList.add('about-buttons-color');

    if (width >= 1400) {
        offset -= 950;
        if (offset < -950) {
            offset = -950;
        }
    } else if ((width < 1400) && (width >= 970)) {
        offset -= (3 * itemWidth + 50)
        if (offset > -(itemWidth + 25) || offset < -(sliderLineWidth - itemWidth * 2)) {
            offset = -(sliderLineWidth - itemWidth * 2);
        }
    } else if (width < 970) {
        offset -= 950;
        if (offset < -950) {
            offset = -950;
        }
    }


    sliderLine.style.left = offset + 'px';
    document.querySelector('.about-switcher-button-left').classList.remove('about-buttons-color');
    document.querySelector('.about-switcher-button-center').classList.remove('about-buttons-color')
})

