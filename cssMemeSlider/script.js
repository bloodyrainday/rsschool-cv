const images = document.querySelectorAll('.slider-line-image');
const captions = document.querySelectorAll('.slider-line-caption');
const sliderLineImages = document.querySelector('.slider-line-images');
const sliderLineText = document.querySelector('.slider-line-text');
const switchButton1 = document.getElementById('image-1');
const switchButton2 = document.getElementById('image-2');
const switchButton3 = document.getElementById('image-3');
const switchButton4 = document.getElementById('image-4');
const switchButton5 = document.getElementById('image-5');
const switchButton6 = document.getElementById('image-6');
const switchButton7 = document.getElementById('image-7');
let count = 0;
let width;
let widthText;

function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLineImages.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    })
    console.log(width);
    switchSlider()
}

function initText() {
    widthText = document.querySelector('.slider-text').offsetWidth;
    sliderLineText.style.width = widthText * captions.length + 'px';
    captions.forEach(item => {
        item.style.width = widthText + 'px';
        item.style.height = 'auto';
    })
    
    switchSlider()
}

window.addEventListener('resize', init);
window.addEventListener('resize', initText);

init();
initText();

/* hover on swicth buttons */

switchButton1.addEventListener('mouseover', () => {
    document.getElementById('button-1').style.backgroundColor = 'red'
})

switchButton1.addEventListener('mouseout', () => {
    if (!document.getElementById('button-1').classList.contains('active')) {
        document.getElementById('button-1').style.backgroundColor = 'white'
    } else {
        document.getElementById('button-1').style.backgroundColor = 'rgb(145, 143, 143)'
    }
    
})

switchButton2.addEventListener('mouseover', () => {
    document.getElementById('button-2').style.backgroundColor = 'red'
})

switchButton2.addEventListener('mouseout', () => {
    if (!document.getElementById('button-2').classList.contains('active')) {
        document.getElementById('button-2').style.backgroundColor = 'white'
    } else {
        document.getElementById('button-2').style.backgroundColor = 'rgb(145, 143, 143)'
    }
    
})

switchButton3.addEventListener('mouseover', () => {
    document.getElementById('button-3').style.backgroundColor = 'red'
})

switchButton3.addEventListener('mouseout', () => {
    if (!document.getElementById('button-3').classList.contains('active')) {
        document.getElementById('button-3').style.backgroundColor = 'white'
    } else {
        document.getElementById('button-3').style.backgroundColor = 'rgb(145, 143, 143)'
    }
    
})

switchButton4.addEventListener('mouseover', () => {
    document.getElementById('button-4').style.backgroundColor = 'red'
})

switchButton4.addEventListener('mouseout', () => {
    if (!document.getElementById('button-4').classList.contains('active')) {
        document.getElementById('button-4').style.backgroundColor = 'white'
    } else {
        document.getElementById('button-4').style.backgroundColor = 'rgb(145, 143, 143)'
    }
    
})

switchButton5.addEventListener('mouseover', () => {
    document.getElementById('button-5').style.backgroundColor = 'red'
})

switchButton5.addEventListener('mouseout', () => {
    if (!document.getElementById('button-5').classList.contains('active')) {
        document.getElementById('button-5').style.backgroundColor = 'white'
    } else {
        document.getElementById('button-5').style.backgroundColor = 'rgb(145, 143, 143)'
    }
    
})

switchButton6.addEventListener('mouseover', () => {
    document.getElementById('button-6').style.backgroundColor = 'red'
})

switchButton6.addEventListener('mouseout', () => {
    if (!document.getElementById('button-6').classList.contains('active')) {
        document.getElementById('button-6').style.backgroundColor = 'white'
    } else {
        document.getElementById('button-6').style.backgroundColor = 'rgb(145, 143, 143)'
    }
    
})

switchButton7.addEventListener('mouseover', () => {
    document.getElementById('button-7').style.backgroundColor = 'red'
})

switchButton7.addEventListener('mouseout', () => {
    if (!document.getElementById('button-7').classList.contains('active')) {
        document.getElementById('button-7').style.backgroundColor = 'white'
    } else {
        document.getElementById('button-7').style.backgroundColor = 'rgb(145, 143, 143)'
    }
    
})


/* click on switch buttons */

switchButton1.addEventListener('click', () => {

    count--;
    document.getElementById('button-1').classList.add('active');
    document.getElementById('button-2').classList.remove('active');
    document.getElementById('button-3').classList.remove('active');
    document.getElementById('button-4').classList.remove('active');
    document.getElementById('button-5').classList.remove('active');
    document.getElementById('button-6').classList.remove('active');
    document.getElementById('button-7').classList.remove('active');
    if (count > 0 || count < 0) {
        count = 0;
    }
    document.getElementById('button-2').style.backgroundColor = 'white';
    document.getElementById('button-3').style.backgroundColor = 'white';
    document.getElementById('button-4').style.backgroundColor = 'white';
    document.getElementById('button-5').style.backgroundColor = 'white';
    document.getElementById('button-6').style.backgroundColor = 'white';
    document.getElementById('button-7').style.backgroundColor = 'white';
    switchSlider();
})

switchButton2.addEventListener('click', () => {
    count++;
    document.getElementById('button-2').classList.add('active');
    document.getElementById('button-1').classList.remove('active');
    document.getElementById('button-3').classList.remove('active');
    document.getElementById('button-4').classList.remove('active');
    document.getElementById('button-5').classList.remove('active');
    document.getElementById('button-6').classList.remove('active');
    document.getElementById('button-7').classList.remove('active');
    if (count > 1 || count < 1) {
        count = 1
    };
    document.getElementById('button-1').style.backgroundColor = 'white';
    document.getElementById('button-3').style.backgroundColor = 'white';
    document.getElementById('button-4').style.backgroundColor = 'white';
    document.getElementById('button-5').style.backgroundColor = 'white';
    document.getElementById('button-6').style.backgroundColor = 'white';
    document.getElementById('button-7').style.backgroundColor = 'white';
    switchSlider()
})

switchButton3.addEventListener('click', () => {
    count++;
    document.getElementById('button-3').classList.add('active');
    document.getElementById('button-1').classList.remove('active');
    document.getElementById('button-2').classList.remove('active');
    document.getElementById('button-4').classList.remove('active');
    document.getElementById('button-5').classList.remove('active');
    document.getElementById('button-6').classList.remove('active');
    document.getElementById('button-7').classList.remove('active');
    if (count > 2 || count < 2) {
        count = 2
    };
    document.getElementById('button-1').style.backgroundColor = 'white';
    document.getElementById('button-2').style.backgroundColor = 'white';
    document.getElementById('button-4').style.backgroundColor = 'white';
    document.getElementById('button-5').style.backgroundColor = 'white';
    document.getElementById('button-6').style.backgroundColor = 'white';
    document.getElementById('button-7').style.backgroundColor = 'white';
    switchSlider()
})

switchButton4.addEventListener('click', () => {
    count++;
    document.getElementById('button-4').classList.add('active');
    document.getElementById('button-1').classList.remove('active');
    document.getElementById('button-2').classList.remove('active');
    document.getElementById('button-3').classList.remove('active');
    document.getElementById('button-5').classList.remove('active');
    document.getElementById('button-6').classList.remove('active');
    document.getElementById('button-7').classList.remove('active');
    if (count > 3 || count < 3) {
        count = 3
    };
    document.getElementById('button-1').style.backgroundColor = 'white';
    document.getElementById('button-3').style.backgroundColor = 'white';
    document.getElementById('button-2').style.backgroundColor = 'white';
    document.getElementById('button-5').style.backgroundColor = 'white';
    document.getElementById('button-6').style.backgroundColor = 'white';
    document.getElementById('button-7').style.backgroundColor = 'white';
    switchSlider()
})

switchButton5.addEventListener('click', () => {
    count++;
    document.getElementById('button-5').classList.add('active');
    document.getElementById('button-1').classList.remove('active');
    document.getElementById('button-2').classList.remove('active');
    document.getElementById('button-3').classList.remove('active');
    document.getElementById('button-4').classList.remove('active');
    document.getElementById('button-6').classList.remove('active');
    document.getElementById('button-7').classList.remove('active');
    if (count > 4 || count < 4) {
        count = 4
    };
    document.getElementById('button-1').style.backgroundColor = 'white';
    document.getElementById('button-3').style.backgroundColor = 'white';
    document.getElementById('button-4').style.backgroundColor = 'white';
    document.getElementById('button-2').style.backgroundColor = 'white';
    document.getElementById('button-6').style.backgroundColor = 'white';
    document.getElementById('button-7').style.backgroundColor = 'white';
    switchSlider()
})

switchButton6.addEventListener('click', () => {
    count++;
    document.getElementById('button-6').classList.add('active');
    document.getElementById('button-1').classList.remove('active');
    document.getElementById('button-2').classList.remove('active');
    document.getElementById('button-3').classList.remove('active');
    document.getElementById('button-4').classList.remove('active');
    document.getElementById('button-5').classList.remove('active');
    document.getElementById('button-7').classList.remove('active');
    if (count > 5 || count < 5) {
        count = 5
    };
    document.getElementById('button-1').style.backgroundColor = 'white';
    document.getElementById('button-3').style.backgroundColor = 'white';
    document.getElementById('button-4').style.backgroundColor = 'white';
    document.getElementById('button-5').style.backgroundColor = 'white';
    document.getElementById('button-2').style.backgroundColor = 'white';
    document.getElementById('button-7').style.backgroundColor = 'white';
    switchSlider()
})

switchButton7.addEventListener('click', () => {
    count++;
    document.getElementById('button-7').classList.add('active');
    document.getElementById('button-1').classList.remove('active');
    document.getElementById('button-2').classList.remove('active');
    document.getElementById('button-3').classList.remove('active');
    document.getElementById('button-4').classList.remove('active');
    document.getElementById('button-5').classList.remove('active');
    document.getElementById('button-6').classList.remove('active');
    if (count > 6 || count < 6) {
        count = 6
    };
    document.getElementById('button-1').style.backgroundColor = 'white';
    document.getElementById('button-3').style.backgroundColor = 'white';
    document.getElementById('button-4').style.backgroundColor = 'white';
    document.getElementById('button-5').style.backgroundColor = 'white';
    document.getElementById('button-6').style.backgroundColor = 'white';
    document.getElementById('button-2').style.backgroundColor = 'white';
    switchSlider()
})

function switchSlider() {
    sliderLineImages.style.transform = 'translate(-' + count * width + 'px)';
    sliderLineText.style.transform = 'translate(-' + count * widthText + 'px)';
}
