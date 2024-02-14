const btnOpen = document.querySelector('[data-btn-open]');
const btnClose = document.querySelector('[data-btn-close]');

// checking the width of the device on which the website was first loaded on
const media = window.matchMedia('(width < 40em)');
const topNavMenu = document.querySelector('.topnav__menu');
const mainElem = document.querySelector('main');

const links = document.querySelectorAll('.topnav--link');

function setupTopNav(e) {
    if (e.matches) {
        console.log('is mobile');
        topNavMenu.setAttribute('inert', '');

        // to prevent menu from appearing on load or changing of the screen sizes
        topNavMenu.style.transition = 'none';
    } else {
        console.log('is desktop');
        
        closeMobileMenu();
        // the line below must be after closeMobileMenu functionality to not set inert on topnav__menu elem if site is loaded on desktop
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

    btnClose.focus();
}

function closeMobileMenu() {
    btnOpen.setAttribute('aria-expanded', 'false');

    topNavMenu.setAttribute('inert', '');

    // to prevent menu from appearing on load or changing screen sizes
    setTimeout(() => {
        topNavMenu.style.transition = 'none';
    }, 500);

    mainElem.removeAttribute('inert');

    btnOpen.focus();
}

setupTopNav(media);

btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);

links.forEach(link => link.addEventListener('click', () => {
    closeMobileMenu();
    setupTopNav(media);
}));

// handling the inert attribut in cases where the user changes the viewports
media.addEventListener('change', e => setupTopNav(e));