console.log("Вёрстка соответствует макету. Ширина экрана 768px 26/26 \n Ни на одном из разрешений до 640px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется 12/12 \n На ширине экрана 768рх реализовано адаптивное меню 12/12  \n")

const body = document.querySelector('.body-wrapper');
const header = document.querySelector('.header');
const burger = document.getElementById('burger')


function openMenu(event) {  
    document.querySelector('.header').classList.toggle('open')
}


burger.addEventListener('click', openMenu)

document.addEventListener('click', event => {
    
    const clickOnBurger = event.composedPath().includes(burger);
    const clickOnProfileIcon = event.composedPath().includes(iconProfile);
        if (!clickOnBurger && !clickOnProfileIcon) {
            header.classList.remove('open')
        }
      });