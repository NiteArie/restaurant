function checkPage(element) {
    if (
        element.classList.contains("menu") ||
        element.classList.contains("home") ||
        element.classList.contains("home__hero") ||
        element.classList.contains("contact") ||
        element.classList.contains("contact__title")
    )
        return true;
    else 
        return false;
}

export function removePage() {
    const content = document.getElementById('content');

    let contentChildren = Array.from(content.children);

    for ( let i = 0; i < contentChildren.length; i++ ) {
        if ( checkPage(contentChildren[i]) )
            contentChildren[i].remove();
    }
}

export function highlightLink(link) {
    const homeLink = document.querySelector(".header__nav__links__items__home");
    const menuLink = document.querySelector(".header__nav__links__items__menu");
    const contactLink = document.querySelector(".header__nav__links__items__contact");

    homeLink.classList.remove("active");
    menuLink.classList.remove("active");
    contactLink.classList.remove("active");

    if ( link == "homeLink") {
        homeLink.classList.add("active");
    } else if ( link == "menuLink") {
        menuLink.classList.add("active");
    } else if ( link == "contactLink") {
        contactLink.classList.add("active");
    }

    
}

