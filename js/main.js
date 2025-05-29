

const btnMenu = document.getElementById('btnMenu');
const btnClose = document.getElementById('btnClose');
const menu = document.querySelector('.menu');
const imgHero = document.querySelector('.hero__img');
function showMenu() {
    menu.classList.add('menu--active');
}

function hiddenMenu() {
    menu.classList.remove('menu--active');
}


function imagesChange() {
    if (window.innerWidth >= 1024) {
        imgHero.src = './assets/images/image-web-3-desktop.jpg';
    } else if (window.innerWidth < 1024) {
        imgHero.src = './assets/images/image-web-3-mobile.jpg'
    }
}


btnMenu.addEventListener('click', showMenu);
btnClose.addEventListener('click', hiddenMenu);

window.addEventListener('resize', imagesChange);