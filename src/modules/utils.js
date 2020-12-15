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


