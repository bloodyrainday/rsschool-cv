const accessKey = 'elHFFHsHTAmp9rDyM2XKM7dqn9mX3OPllbthMJT1xus';
const formElement = document.querySelector('form');
const inputElement = document.querySelector('.input');
const galleryWrapper = document.querySelector('.gallery-wrapper');
const showMoreButton = document.querySelector('.show_more');

let inputData = '';
let page = 1;

async function searchImages() {
    inputData = inputElement.value;
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