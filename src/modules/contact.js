import { removePage } from "./utils";

function createContactHeader() {
    let title = document.createElement("h2");

    title.textContent = "Contact";

    title.classList.add("contact__title");

    return title;
}

function createContactContent() {
    let contact = document.createElement('div');

    contact.classList.add("contact");

    let form = document.createElement('form');
    let img = document.createElement('img');
    let nameLabel = document.createElement('label');
    let emailLabel = document.createElement('label');
    let contentLabel = document.createElement('label');
    let nameInput = document.createElement('input');
    let emailInput = document.createElement('input');
    let contentInput = document.createElement('input');
    let submitButton = document.createElement('button');

    form.classList.add("contact__form");
    img.classList.add("contact__img");

    nameLabel.classList.add("contact__form__label");
    emailLabel.classList.add("contact__form__label");
    contentLabel.classList.add("contact__form__label");

    nameInput.classList.add("contact__form__input");
    emailInput.classList.add("contact__form__input");
    contentInput.classList.add("contact__form__input");

    submitButton.classList.add("contact__form__submit");

    nameLabel.setAttribute('for', 'name');
    emailLabel.setAttribute('for', 'email');
    contentLabel.setAttribute('for', content);

    nameInput.type = "text";
    emailInput.type = "email";
    contentInput.type = "content";

    submitButton.type = "submit";

    img.src = "../assets/images/contact.jpg";

    nameLabel.textContent = "Name";
    emailLabel.textContent = "Email";
    contentLabel.textContent = "Message";

    submitButton.textContent = "Send";

    nameInput.id = "name";
    emailInput.id = "email";
    contentInput.id = "content";

    form.append(nameLabel, nameInput, emailLabel, emailInput, contentLabel, contentInput);
    form.append(submitButton);

    contact.append(form, img);

    return contact;

}

function createContact() {
    const content = document.getElementById('content');
    const header = createContactHeader();
    const contact = createContactContent();

    removePage();

    content.append(header, contact);
}

export default createContact;