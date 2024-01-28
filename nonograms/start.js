const body = document.querySelector('body');
const startPopupElement = document.createElement('div');
const startPopupContentElement = document.createElement('div');
const startTitleElement = document.createElement('h1');
const startButtonElement = document.createElement('button');


startPopupElement.setAttribute('class', 'start-pop-up');
body.prepend(startPopupElement);

startPopupContentElement.setAttribute('class', 'start-pop-up__content');
startPopupElement.prepend(startPopupContentElement);

startPopupContentElement.prepend(startTitleElement);
startTitleElement.setAttribute('class', 'start-pop-up__title');
startTitleElement.textContent = 'WELCOME TO THE NONOGRAM GAME!';

startPopupContentElement.append(startButtonElement);
startButtonElement.setAttribute('class', 'start-pop-up__button');
startButtonElement.textContent = 'START GAME';

startButtonElement.addEventListener('click', () => {
  startPopupElement.classList.add('hidden');
  wrapperElement.style.display = 'flex';
})