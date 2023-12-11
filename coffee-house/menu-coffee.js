const burgerMenuButton = document.querySelector('.nav-menu');
const burgerMenuItems = document.querySelectorAll(".burger-menu-links-list-item");
const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuCloseButton = document.querySelector('.nav-menu-burger');
const menuTeaButton = document.querySelector('.menu-tabs-tab.tea');
const menuCoffeeButton = document.querySelector('.menu-tabs-tab.coffee');
const menuDessertButton = document.querySelector('.menu-tabs-tab.dessert');
const menuLoadMoreButton = document.querySelector('.menu-button');
const popUp = document.querySelector('.pop_up');

/* burger menu */

burgerMenuButton.addEventListener('click', (event) => {
    burgerMenu.classList.toggle('active');
    burgerMenuCloseButton.classList.toggle('active');
});

    
burgerMenuItems.forEach(item => {
    item.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        burgerMenuCloseButton.classList.toggle('active');
    })
})

/* tea button */

menuTeaButton.addEventListener('click', () => {

    document.querySelectorAll('.menu-collection-item.coffee').forEach(item => {
        item.style.display = 'none'
    });
    document.querySelectorAll('.menu-collection-item.dessert').forEach(item => {
        item.style.display = 'none'
    })

    menuTeaButton.classList.add('clicked');
    menuDessertButton.classList.remove('clicked');
    menuCoffeeButton.classList.remove('clicked');

    document.querySelectorAll('.menu-collection-item.tea').forEach(item => {
        item.style.display = 'flex';
        item.style.transform = 'translateX(0)';
    })

    menuLoadMoreButton.style.display = 'none'
})

/* coffe button */

menuCoffeeButton.addEventListener('click', () => {

    document.querySelectorAll('.menu-collection-item.tea').forEach(item => {
        item.style.display = 'none'
    });
    document.querySelectorAll('.menu-collection-item.dessert').forEach(item => {
        item.style.display = 'none'
    });

    menuTeaButton.classList.remove('clicked');
    menuDessertButton.classList.remove('clicked');
    menuCoffeeButton.classList.add('clicked');

    document.querySelectorAll('.menu-collection-item.coffee').forEach(item => {
        item.style.display = 'flex';
        item.style.transform = 'translateX(0)';
    })

    if (document.querySelectorAll('.menu-collection-item.coffee').length < 8) {
        menuLoadMoreButton.style.display = 'flex'
    } else {
        menuLoadMoreButton.style.display = 'none'
    }

    
})

/* dessert button */

menuDessertButton.addEventListener('click', () => {

    document.querySelectorAll('.menu-collection-item.tea').forEach(item => {
        item.style.display = 'none'
    })
    document.querySelectorAll('.menu-collection-item.coffee').forEach(item => {
        item.style.display = 'none'
    })

    menuTeaButton.classList.remove('clicked');
    menuCoffeeButton.classList.remove('clicked');
    menuDessertButton.classList.add('clicked');

    document.querySelectorAll('.menu-collection-item.dessert').forEach(item => {
        item.style.display = 'flex';
        item.style.transform = 'translateX(0)';
    })

    if (document.querySelectorAll('.menu-collection-item.dessert').length < 8) {
        menuLoadMoreButton.style.display = 'flex'
    } else {
        menuLoadMoreButton.style.display = 'none'
    }
})

/* load-more button */

menuLoadMoreButton.addEventListener('click', () => {
    document.querySelectorAll('.menu-collection-item.coffee').forEach(item => {
        item.style.display = 'flex';
        item.style.transform = 'translateX(0)';
    })
    menuLoadMoreButton.style.display = 'none'
})

/* POP UPS*/

document.querySelectorAll('.menu-collection-item').forEach(item => {
    item.addEventListener('click', () => {
        popUp.classList.toggle('hidden')

        document.querySelector('.pop_up-content-image').src = 'images/coffee-1.png'
    })
})

popUp.addEventListener('click', (event) => {
    if (event.target.classList.contains('pop_up')) {
        popUp.classList.toggle('hidden')
    }
   
})