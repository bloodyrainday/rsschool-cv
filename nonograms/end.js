const endPopupElement = document.createElement('div');
const endPopupContentElement = document.createElement('div');
const endTitleElement = document.createElement('h1');
const endButtonElement = document.createElement('button');

endPopupElement.setAttribute('class', 'end-pop-up');
body.append(endPopupElement);

endPopupContentElement.setAttribute('class', 'end-pop-up__content');
endPopupElement.prepend(endPopupContentElement);

endPopupContentElement.prepend(endTitleElement);
endTitleElement.setAttribute('class', 'end-pop-up__title');
endTitleElement.textContent = 'YOU WON!';

endPopupContentElement.append(endButtonElement);
endButtonElement.setAttribute('class', 'end-pop-up__button');
endButtonElement.textContent = 'START AGAIN';