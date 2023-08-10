console.log("100/100 Вёрстка валидная \n 10/10 Вёрстка семантическая \n 16/16 Вёрстка соответствует макету \n 54/54 Общие требования к верстке 20/20")

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('burger').addEventListener('click', function() {
        document.querySelector('.header').classList.toggle('open')
    })
})