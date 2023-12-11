const burgerMenuButton = document.querySelector('.nav-menu');
const burgerMenuItems = document.querySelectorAll(".burger-menu-links-list-item");
const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuCloseButton = document.querySelector('.nav-menu-burger');
const slider = document.querySelector('.favorite_coffee-slider-center');
const slides = document.querySelectorAll(".favorite_coffee-slider-center-slide");
const sliderLine = document.querySelector('.favorite_coffee-slider-center-slide_line'); 
const progressBarFirst = document.getElementsByClassName('favorite_coffee-switch')[0];
const progressBarSecond = document.getElementsByClassName('favorite_coffee-switch')[1]; 
const progressBarThird = document.getElementsByClassName('favorite_coffee-switch')[2];  
let count = 0;
let width;


/* BURGER MENU START */

burgerMenuButton.addEventListener('click', (event) => {
    burgerMenu.classList.toggle('active');
    burgerMenuCloseButton.classList.toggle('active');
});

    
/*for (let i = 0; i <= burgerMenuItems.length; i++) {
    burgerMenuItems[i].addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        burgerMenuCloseButton.classList.toggle('active');
    })
}*/

/* BURGER MENU END */

/* SLIDER START */

function init() {
    width = slider.offsetWidth;
    sliderLine.style.width = width * slides.length + 'px';
    slides.forEach( item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    })
    console.log(width)
    rollSlider();
}

window.addEventListener('resize', init)

init();

document.querySelector('.favorite_coffee-slider-arrow.right').addEventListener('click', function() {
    count++;
    if (count >= slides.length) {
        count = 0;
    }
    rollSlider();
})

document.querySelector('.favorite_coffee-slider-arrow.left').addEventListener('click', function() {
    count--;
    if (count < 0) {
        count = slides.length - 1;
    }
    rollSlider();
})

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}

/*slider rolls automatically*/

      let myInterval = setInterval(function() {
            count++;
                if (count >= slides.length) {
                    count = 0;
                } 
                rollSlider();
                
}, 5000)


sliderLine.addEventListener('mouseover', (event) => {
    if (!(event.target = 'favorite_coffee-slider-center-slide_line')) {
        myInterval
    } else {
        clearInterval(myInterval);
    }
})

sliderLine.addEventListener('mouseout', (event) => {
    if ((event.target = 'favorite_coffee-slider-center-slide_line')) {
        myInterval = setInterval(function() {
            count++;
                if (count >= slides.length) {
                    count = 0;
                }
                rollSlider();
}, 5000)
    }
})

/* progress bar */

setInterval(() => {
    

    if (count == 1) {
        progressBarFirst.style.setProperty('--width', 0);
        progressBarThird.style.setProperty('--width', 0);
        const computedStyle = getComputedStyle(progressBarSecond);
        const width = parseFloat(computedStyle.getPropertyValue('--width' || 0));
        progressBarSecond.style.setProperty('--width', width + .1)
    } else if ( count == 2) {
        progressBarFirst.style.setProperty('--width', 0);
        progressBarSecond.style.setProperty('--width', 0);
        const computedStyle = getComputedStyle(progressBarThird);
        const width = parseFloat(computedStyle.getPropertyValue('--width' || 0));
        progressBarThird.style.setProperty('--width', width + .1)
    } else if (count == 0) {
        progressBarThird.style.setProperty('--width', 0);
        progressBarSecond.style.setProperty('--width', 0);
        const computedStyle = getComputedStyle(progressBarFirst);
        const width = parseFloat(computedStyle.getPropertyValue('--width' || 0));
        progressBarFirst.style.setProperty('--width', width + .1)
    }
    
}, 5) 

    /*if (count == 0) {

       setInterval(() => {
        const computedStyle = getComputedStyle(progressBarFirst);
        const width = parseFloat(computedStyle.getPropertyValue('--width' || 0));
        progressBarFirst.style.setProperty('--width', width + .1)
        
    }, 4) 

    } else if (count == 1) {

        setInterval(() => {
            const computedStyle = getComputedStyle(progressBarSecond);
            const width = parseFloat(computedStyle.getPropertyValue('--width' || 0));
            progressBarSecond.style.setProperty('--width', width + .1)
            
        }, 4) 

    }*/
    



/* SLIDER END */




    
