const endPopupElement = document.createElement('div');
const endPopupContentElement = document.createElement('div');
const endTitleElement = document.createElement('h1');
const endButtonElement = document.createElement('button');

endPopupElement.setAttribute('class', 'end-pop-up hidden');
body.prepend(endPopupElement);

endPopupContentElement.setAttribute('class', 'end-pop-up__content');
endPopupElement.prepend(endPopupContentElement);

endPopupContentElement.prepend(endTitleElement);
endTitleElement.setAttribute('class', 'end-pop-up__title');
endTitleElement.textContent = 'YOU WON!';

endPopupContentElement.append(endButtonElement);
endButtonElement.setAttribute('class', 'end-pop-up__button');
endButtonElement.textContent = 'EXIT';

endButtonElement.addEventListener('click', () => {
  endPopupElement.classList.add('hidden');
  startPopupElement.classList.remove('hidden');
  wrapperElement.style.display = 'none';
  cellsTable.forEach((elem, index) => {
    if ((index >= 16 && index <= 20) || (index >= 23 && index <= 27) || (index >= 30 && index <= 34) || (index >= 37 && index <= 41) || (index >= 44 && index <= 48)) {
      elem.classList.remove('black');
      if (elem.firstChild) {
      const clearElement = elem.firstChild;
      clearElement.remove();
      }
    } 
  })
})