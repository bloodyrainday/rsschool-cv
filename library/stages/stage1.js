let offset = 0;
const images = document.querySelectorAll('.about-slider-item');
const sliderLine = document.querySelector('.about-slider');
const leftArrowButton = document.querySelector('.about-slider-arrow.left');
const rightArrowButton = document.querySelector('.about-slider-arrow.right');
const winterBooks = document.querySelectorAll('.favorites-wrapper.winter');
const springBooks = document.querySelectorAll('.favorites-wrapper.spring');
const summerBooks = document.querySelectorAll('.favorites-wrapper.summer');
const autumnBooks = document.querySelectorAll('.favorites-wrapper.autumn');
const winterClickButton = document.querySelector('.favorites-radio-name.winter');
const springClickButton = document.querySelector('.favorites-radio-name.spring');
const summerClickButton = document.querySelector('.favorites-radio-name.summer');
const autumnClickButton = document.querySelector('.favorites-radio-name.autumn');
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
        offset -= (2 * itemWidth);
        if (offset < -(2 * itemWidth)) {
            offset = -(2 * itemWidth);
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
    
        offset -= (3 * itemWidth);
        if (offset < -(3 * itemWidth)) {
            offset = -(3 * itemWidth);
        }
    
    
    
    sliderLine.style.left = offset + 'px';
    document.querySelector('.about-switcher-button-left').classList.remove('about-buttons-color');
    document.querySelector('.about-switcher-button-center').classList.remove('about-buttons-color');
    document.querySelector('.about-switcher-button-right').classList.remove('about-buttons-color');
    document.querySelector('.about-switcher-button.second').classList.remove('about-buttons-color');
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

/* the arrow buttons */

const clickLeftArrowButton = () => {
    offset += itemWidth;
    
    if (offset > 0) {
        offset = 0;
    } else if (offset === - (3 * itemWidth)) {
        document.querySelector('.about-switcher-button-right').classList.remove('about-buttons-color');
        document.querySelector('.about-switcher-button.fourth').classList.add('about-buttons-color');
    } else if (offset === - (2 * itemWidth)) {
        document.querySelector('.about-switcher-button.fourth').classList.remove('about-buttons-color');
        document.querySelector('.about-switcher-button-center').classList.add('about-buttons-color');
    } else if (offset === - itemWidth) {
        document.querySelector('.about-switcher-button.second').classList.add('about-buttons-color');
        document.querySelector('.about-switcher-button-center').classList.remove('about-buttons-color');
    } else if (offset === 0) {
        document.querySelector('.about-switcher-button.second').classList.remove('about-buttons-color');
        document.querySelector('.about-switcher-button-left').classList.add('about-buttons-color');
    }
    
    sliderLine.style.left = offset + 'px';
    
}

leftArrowButton.addEventListener('click', clickLeftArrowButton)

const clickRightArrowButton = () => {
    offset -= itemWidth;
    
    if (offset < -(sliderLineWidth - itemWidth)) {
        offset = -(sliderLineWidth - itemWidth);
    } else if (offset === - itemWidth) {
        document.querySelector('.about-switcher-button.second').classList.add('about-buttons-color');
        document.querySelector('.about-switcher-button-left').classList.remove('about-buttons-color');
    } else if (offset === - (2 * itemWidth)) {
        document.querySelector('.about-switcher-button.second').classList.remove('about-buttons-color');
        document.querySelector('.about-switcher-button-center').classList.add('about-buttons-color');
    } else if (offset === - (3 * itemWidth)) {
        document.querySelector('.about-switcher-button-center').classList.remove('about-buttons-color');
        document.querySelector('.about-switcher-button.fourth').classList.add('about-buttons-color');
    } else if (offset === - (4 * itemWidth)) {
        document.querySelector('.about-switcher-button.fourth').classList.remove('about-buttons-color');
        document.querySelector('.about-switcher-button-right').classList.add('about-buttons-color');
    }

    sliderLine.style.left = offset + 'px';
}

rightArrowButton.addEventListener('click', clickRightArrowButton);

/* the books in the favorite section */

/* the winter button */

winterClickButton.addEventListener('click', () => {
    springBooks.forEach(item => {
        item.style.display = 'none';
    });
    summerBooks.forEach(item => {
        item.style.display = 'none';
    });
    autumnBooks.forEach(item => {
        item.style.display = 'none';
    });
    winterBooks.forEach(item => {
        item.style.display = 'flex';
    })
})

/* the spring button */

springClickButton.addEventListener('click', () => {
    winterBooks.forEach(item => {
        item.style.display = 'none';
        
    });
    summerBooks.forEach(item => {
        item.style.display = 'none';
    });
    autumnBooks.forEach(item => {
        item.style.display = 'none';
    });
    springBooks.forEach(item => {
        item.style.display = 'flex';
    })
});

/* the summer button */

summerClickButton.addEventListener('click', () => {
    winterBooks.forEach(item => {
        item.style.display = 'none';
    });
    springBooks.forEach(item => {
        item.style.display = 'none';
    });
    autumnBooks.forEach(item => {
        item.style.display = 'none';
    });
    summerBooks.forEach(item => {
        item.style.display = 'flex';
    })
});

/* the autumn button */

autumnClickButton.addEventListener('click', () => {
    winterBooks.forEach(item => {
        item.style.display = 'none';
    });
    summerBooks.forEach(item => {
        item.style.display = 'none';
    });
    springBooks.forEach(item => {
        item.style.display = 'none';
    });
    autumnBooks.forEach(item => {
        item.style.display = 'flex';
    })
});