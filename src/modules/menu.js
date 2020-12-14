const _data = [
    {
        image: "chips.jpg",
        title: "Chips And Hoisin Sauce",
        price: "$3.00",
    },
    {
        image: "hamburger.jpg",
        title: "Beef Hamburger",
        price: "$5.00",
    },
    {
        image: "pasta.jpg",
        title: "Fettuccine Alfredo",
        price: "$3.49",
    },
    {
        image: "pizza.jpg",
        title: "Sausage Pizza",
        price: "$7.99",
    },
]

function createMenuItem({ image, title, price}) {
    let menuItem = document.createElement("section");

    menuItem.classList.add("menu__item");

    let itemImage = document.createElement("img");
    let itemDesContainer = document.createElement('div');
    let itemTitle = document.createElement("h2");
    let itemPrice = document.createElement("p");

    itemImage.classList.add("menu__item__img");
    itemDesContainer.classList.add("menu__item__desc");
    itemTitle.classList.add("menu__item__title");
    itemPrice.classList.add("menu__item__price");

    itemImage.src = `../assets/images/${image}`;
    
    itemTitle.textContent = title;
    itemPrice.textContent = price;

    itemDesContainer.append(itemTitle, itemPrice);
    menuItem.append(itemImage, itemDesContainer);

    return menuItem;
}

function createMenuHeader() {
    let title = document.createElement("h2");

    title.textContent = "Menu";

    title.classList.add("menu__title");

    return title;
}

function createMenuContent() {
    let menu = document.createElement("div");
    let menuContent = document.createElement("div");

    menu.classList.add("menu");
    menuContent.classList.add("menu__content");
    
    _data.forEach((item) => {
        menuContent.appendChild(createMenuItem(item));
    })
    
    menu.appendChild(createMenuHeader());
    menu.appendChild(menuContent);

    return menu;
}

function createMenu() {
    const content = document.getElementById('content');
    content.appendChild(createMenuContent());
}

export default createMenu;
