import { createHeader } from './modules/page';
import createHome from './modules/home';
import createMenu from './modules/menu';

function init() {
    createHeader();
    createMenu();
}

init();

