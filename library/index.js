
console.log("Вёрстка соответствует макету. Ширина экрана 768px 26/26 \n Ни на одном из разрешений до 640px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется 12/12 \n На ширине экрана 768рх реализовано адаптивное меню 12/12  \n")

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('burger').addEventListener('click', function() {
        document.querySelector('.header').classList.toggle('open')
    })
})
