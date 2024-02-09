const btnOpen = document.querySelector('[data-btn-open]');
const btnClose = document.querySelector('[data-btn-close]');

// checking the width of the device on which the website was first loaded on
const media = window.matchMedia('(width < 40em)');
const topNavMenu = document.querySelector('.topnav__menu');

function setupTopNav(e) {
    if (e.matches) {
        console.log('is mobile');
        topNavMenu.setAttribute('inert', '');
    } else {
        console.log('is desktop');
        topNavMenu.removeAttribute('inert');
    }
}
console.log(media);

function openMobileMenu() {
    btnOpen.setAttribute('aria-expanded', 'true');
    topNavMenu.removeAttribute('inert');
}

function closeMobileMenu() {
    btnOpen.setAttribute('aria-expanded', 'false');
    topNavMenu.setAttribute('inert', '');
}

setupTopNav(media);

btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);

// handling the inert attribu in cases where the uses changes the viewports
media.addEventListener('change', e => setupTopNav(e));