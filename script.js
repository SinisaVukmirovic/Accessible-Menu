const btnOpen = document.querySelector('[data-btn-open]');
const btnClose = document.querySelector('[data-btn-close]');

// checking the width of the device on which the website was first loaded on
const media = window.matchMedia('(width < 40em)');
const topNavMenu = document.querySelector('.topnav__menu');
const mainElem = document.querySelector('main');

function setupTopNav(e) {
    if (e.matches) {
        console.log('is mobile');
        topNavMenu.setAttribute('inert', '');

        // to prevent menu from appearing on load or changing of the screen sizes
        topNavMenu.style.transition = 'none';
    } else {
        console.log('is desktop');
        topNavMenu.removeAttribute('inert');
    }
}
console.log(media);

function openMobileMenu() {
    btnOpen.setAttribute('aria-expanded', 'true');
    topNavMenu.removeAttribute('inert');

    // to prevent menu from appearing on load or changing screen sizes
    topNavMenu.removeAttribute('style');
    mainElem.setAttribute('inert', '');
}

function closeMobileMenu() {
    btnOpen.setAttribute('aria-expanded', 'false');
    topNavMenu.setAttribute('inert', '');

    // to prevent menu from appearing on load or changing screen sizes
    setTimeout(() => {
        topNavMenu.style.transition = 'none';
    }, 500);

    mainElem.removeAttribute('inert');
}

setupTopNav(media);

btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);

// handling the inert attribu in cases where the uses changes the viewports
media.addEventListener('change', e => setupTopNav(e));