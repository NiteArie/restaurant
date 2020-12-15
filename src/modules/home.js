import { highlightLink, removePage } from './utils';

function createHomeHero() {
    let homeHero = document.createElement('div');
    let slogan = document.createElement('h1');
    let cta = document.createElement('button');

    homeHero.classList.add("home__hero");
    slogan.classList.add("home__hero__slogan");
    cta.classList.add("home__hero__cta");

    slogan.textContent = "Taste the rainbow";
    cta.textContent = "Order Now!";

    homeHero.append(slogan, cta);
    return homeHero;
}

function createHomeContent() {
    let home = document.createElement('div');

    home.classList.add("home");

    let foodSection = document.createElement('section');
    let tableSection = document.createElement('section');
    let waiterSection = document.createElement('section');

    foodSection.classList.add("home__food");
    tableSection.classList.add("home__table");
    waiterSection.classList.add("home__waiter");

    let foodImg = document.createElement('img');
    let tableImg = document.createElement('img');
    let waiterImg = document.createElement('img');

    foodImg.classList.add("home__food__img");
    tableImg.classList.add("home__table__img");
    waiterImg.classList.add("home__waiter__img");

    foodImg.src = "../assets/images/cooking.svg";
    tableImg.src = "../assets/images/dinner-table.svg";
    waiterImg.src = "../assets/images/waiter.svg";

    let foodContent = document.createElement('p');
    let tableContent = document.createElement('p');
    let waiterContent = document.createElement('p');

    foodContent.classList.add("home__food__content");
    tableContent.classList.add("home__table__content");
    waiterContent.classList.add("home__waiter__content");

    foodContent.textContent = "Our restaurant has quality rated food. We are proud to be the local finest restaurant.";
    tableContent.textContent = "Our restaurant has 60 tables for booking. Book now for delicious food that you have never tried before.";
    waiterContent.textContent = "Our restaurant has the finest waiters. Waiters that are ready to serve and handle every situation well.";

    foodSection.append(foodImg, foodContent);
    tableSection.append(tableImg, tableContent);
    waiterSection.append(waiterImg, waiterContent);

    home.append(foodSection, tableSection, waiterSection);

    return home;
}

function createHome() {
    let homeContent = createHomeContent();
    let homeHero = createHomeHero();

    const content = document.querySelector("#content")

    highlightLink("homeLink");
    removePage();

    content.append(homeHero, homeContent);
}

export default createHome;