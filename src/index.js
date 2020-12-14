import { createHeader } from './modules/page';
import createHome from './modules/home';
import createMenu from './modules/menu';

function init() {
    createHeader();
    initNavigation();
    createMenu();
}

function initNavigation() {
    const homeLink = document.querySelector(".header__nav__links__items__home");
    const menuLink = document.querySelector(".header__nav__links__items__menu");
    const contactLink = document.querySelector(".header__nav__links__items__contact");

    homeLink.addEventListener('click', createHome);
    menuLink.addEventListener('click', createMenu);
}

init();

