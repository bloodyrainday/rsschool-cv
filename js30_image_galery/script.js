const accessKey = 'elHFFHsHTAmp9rDyM2XKM7dqn9mX3OPllbthMJT1xus';
const formElement = document.querySelector('form');
const inputElement = document.querySelector('.input');
const galleryWrapper = document.querySelector('.gallery-wrapper');
const showMoreButton = document.querySelector('.show_more');
const closeButton = document.querySelector('.input-close');
const galleryItem = document.querySelector('.gallery-item');
const popUp = document.querySelector('.pop-up');
const galleryItemImage = document.querySelector('.gallery-item-image');

let inputData = '';
let page = 1;

inputElement.focus()

async function searchImages() {
    inputData = inputElement.value;

    if (inputData !== '') {
        closeButton.style.display = 'block'
    } else {
        closeButton.style.display = 'none'
    }

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    
    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;
 
    if (page === 1) {
        galleryWrapper.innerHTML = '';
    }

    results.map((result) => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;
        
        galleryItem.appendChild(image);
        galleryWrapper.appendChild(galleryItem);
    });

    page++;
    if (page > 1) {
        showMoreButton.style.display = 'block';
    }

}

formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
});

showMoreButton.addEventListener('click', () => {
    searchImages();
})

closeButton.addEventListener('click', () => {
    inputElement.value = '';

    closeButton.style.display = 'none'
})


/*galleryItem.addEventListener('click', () => {
    popUp.classList.toggle('hidden');
    let popUpImage = document.querySelector('.pop-up_image');
    popUpImage.src = galleryItemImage.src
})

popUp.addEventListener('click', (event) => {
    if (event.target.classList.contains('pop-up')) {
        popUp.classList.toggle('hidden')
    }
})*/