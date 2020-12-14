export function createHeader() {
    let header = document.createElement('header');
    let nav = document.createElement('nav');
    let ul = document.createElement('ul');
    let linkContainer = document.createElement('div');

    let mainLink = document.createElement('li');
    mainLink.textContent = "Restaurant";

    let homeLink = document.createElement('li');
    homeLink.textContent = "Home";
    
    let menuLink = document.createElement('li');
    menuLink.textContent = "Menu";

    let contactLink = document.createElement('li');
    contactLink.textContent = "Contact us";

    header.classList.add("header");
    nav.classList.add("header__nav");
    ul.classList.add("header__nav__links");
    linkContainer.classList.add("header__nav__links__items");

    ul.appendChild(mainLink);
    linkContainer.appendChild(homeLink);
    linkContainer.appendChild(menuLink);
    linkContainer.appendChild(contactLink);
    ul.appendChild(linkContainer);

    nav.appendChild(ul);
    header.appendChild(nav);

    document.querySelector("#content").appendChild(header);
}

