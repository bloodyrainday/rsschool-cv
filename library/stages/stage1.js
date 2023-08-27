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


const itemWidth = document.querySelector('.about-slider-item.first').offsetWidth;
const sliderLineWidth = document.querySelector('.about-slider').offsetWidth

/* the first button */

document.querySelector('.about-switcher-button-wrapper.left').addEventListener('click', () => {
  
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
        offset += (4 * itemWidth);
        if (offset > 0) {
            offset = 0;
        }
    }
    

    sliderLine.style.left = offset + 'px';
    document.querySelector('.about-switcher-button-center').classList.remove('about-buttons-color');
    document.querySelector('.about-switcher-button-right').classList.remove('about-buttons-color');
    document.querySelector('.about-switcher-button.second').classList.remove('about-buttons-color');
    document.querySelector('.about-switcher-button.fourth').classList.remove('about-buttons-color');
    
})

/* the second button*/

document.querySelector('.about-switcher-button-wrapper-fourth').addEventListener('click', () => {
    

    document.querySelector('.about-switcher-button.second').classList.add('about-buttons-color');
    
        offset -= (1 * itemWidth );
        if (offset < -(1 * itemWidth)) {
            offset = -(1 * itemWidth);
        }
    
    
    
    sliderLine.style.left = offset + 'px';
    document.querySelector('.about-switcher-button-left').classList.remove('about-buttons-color');
    document.querySelector('.about-switcher-button-center').classList.remove('about-buttons-color');
    document.querySelector('.about-switcher-button.fourth').classList.remove('about-buttons-color');
    document.querySelector('.about-switcher-button-right').classList.remove('about-buttons-color');
    })

    /* the third button*/

    document.querySelector('.about-switcher-button-wrapper.center').addEventListener('click', () => {
        
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
        offset -= (2 * itemWidth + 35);
        if (offset < -(2 * itemWidth + 35)) {
            offset = -(2 * itemWidth + 35);
        }
    }

    sliderLine.style.left = offset + 'px';
    document.querySelector('.about-switcher-button-left').classList.remove('about-buttons-color');
    document.querySelector('.about-switcher-button-right').classList.remove('about-buttons-color');
    document.querySelector('.about-switcher-button.second').classList.remove('about-buttons-color');
    document.querySelector('.about-switcher-button.fourth').classList.remove('about-buttons-color');
})

/* the fourth button*/

document.querySelector('.about-switcher-button-wrapper-fifth').addEventListener('click', () => {
    

    document.querySelector('.about-switcher-button.fourth').classList.add('about-buttons-color');
    
        offset -= (3 * itemWidth + 35);
        if (offset < -(3 * itemWidth + 35)) {
            offset = -(3 * itemWidth + 35);
        }
    
    
    
    sliderLine.style.left = offset + 'px';
    document.querySelector('.about-switcher-button-left').classList.remove('about-buttons-color');
    document.querySelector('.about-switcher-button-center').classList.remove('about-buttons-color');
    document.querySelector('.about-switcher-button-right').classList.remove('about-buttons-color');
    })

    /* the fifth button */

    document.querySelector('.about-switcher-button-wrapper.right').addEventListener('click', () => {

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
        offset -= -(4 * itemWidth);
        if (offset > -(4 * itemWidth)) {
            offset = -(4 * itemWidth);
        }
    }


    sliderLine.style.left = offset + 'px';
    document.querySelector('.about-switcher-button-left').classList.remove('about-buttons-color');
    document.querySelector('.about-switcher-button-center').classList.remove('about-buttons-color');
    document.querySelector('.about-switcher-button.second').classList.remove('about-buttons-color');
    document.querySelector('.about-switcher-button.fourth').classList.remove('about-buttons-color');
})
