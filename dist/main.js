(()=>{"use strict";function e(){const e=document.getElementById("content");let t=Array.from(e.children);for(let e=0;e<t.length;e++)((n=t[e]).classList.contains("menu")||n.classList.contains("home")||n.classList.contains("home__hero")||n.classList.contains("contact")||n.classList.contains("contact__title"))&&t[e].remove();var n}function t(e){const t=document.querySelector(".header__nav__links__items__home"),n=document.querySelector(".header__nav__links__items__menu"),a=document.querySelector(".header__nav__links__items__contact");t.classList.remove("active"),n.classList.remove("active"),a.classList.remove("active"),"homeLink"==e?t.classList.add("active"):"menuLink"==e?n.classList.add("active"):"contactLink"==e&&a.classList.add("active")}const n=function(){let n=function(){let e=document.createElement("div");e.classList.add("home");let t=document.createElement("section"),n=document.createElement("section"),a=document.createElement("section");t.classList.add("home__food"),n.classList.add("home__table"),a.classList.add("home__waiter");let c=document.createElement("img"),s=document.createElement("img"),d=document.createElement("img");c.classList.add("home__food__img"),s.classList.add("home__table__img"),d.classList.add("home__waiter__img"),c.src="../assets/images/cooking.svg",s.src="../assets/images/dinner-table.svg",d.src="../assets/images/waiter.svg";let i=document.createElement("p"),o=document.createElement("p"),l=document.createElement("p");return i.classList.add("home__food__content"),o.classList.add("home__table__content"),l.classList.add("home__waiter__content"),i.textContent="Our restaurant has quality rated food. We are proud to be the local finest restaurant.",o.textContent="Our restaurant has 60 tables for booking. Book now for delicious food that you have never tried before.",l.textContent="Our restaurant has the finest waiters. Waiters that are ready to serve and handle every situation well.",t.append(c,i),n.append(s,o),a.append(d,l),e.append(t,n,a),e}(),a=function(){let e=document.createElement("div"),t=document.createElement("h1"),n=document.createElement("button");return e.classList.add("home__hero"),t.classList.add("home__hero__slogan"),n.classList.add("home__hero__cta"),t.textContent="Taste the rainbow",n.textContent="Order Now!",e.append(t,n),e}();const c=document.querySelector("#content");t("homeLink"),e(),c.append(a,n)},a=[{image:"chips.jpg",title:"Chips And Hoisin Sauce",price:"$3.00"},{image:"hamburger.jpg",title:"Beef Hamburger",price:"$5.00"},{image:"pasta.jpg",title:"Fettuccine Alfredo",price:"$3.49"},{image:"pizza.jpg",title:"Sausage Pizza",price:"$7.99"}];const c=function(){const n=document.getElementById("content");t("menuLink"),e(),n.appendChild(function(){let e=document.createElement("div"),t=document.createElement("div");return e.classList.add("menu"),t.classList.add("menu__content"),a.forEach((e=>{t.appendChild(function({image:e,title:t,price:n}){let a=document.createElement("section");a.classList.add("menu__item");let c=document.createElement("img"),s=document.createElement("div"),d=document.createElement("h2"),i=document.createElement("p");return c.classList.add("menu__item__img"),s.classList.add("menu__item__desc"),d.classList.add("menu__item__title"),i.classList.add("menu__item__price"),c.src=`../assets/images/${e}`,d.textContent=t,i.textContent=n,s.append(d,i),a.append(c,s),a}(e))})),e.appendChild(function(){let e=document.createElement("h2");return e.textContent="Menu",e.classList.add("menu__title"),e}()),e.appendChild(t),e}())};function s(){let e=document.createElement("div");e.classList.add("contact");let t=document.createElement("form"),n=document.createElement("img"),a=document.createElement("label"),c=document.createElement("label"),s=document.createElement("label"),d=document.createElement("input"),i=document.createElement("input"),o=document.createElement("input"),l=document.createElement("button");return t.classList.add("contact__form"),n.classList.add("contact__img"),a.classList.add("contact__form__label"),c.classList.add("contact__form__label"),s.classList.add("contact__form__label"),d.classList.add("contact__form__input"),i.classList.add("contact__form__input"),o.classList.add("contact__form__input"),l.classList.add("contact__form__submit"),a.setAttribute("for","name"),c.setAttribute("for","email"),s.setAttribute("for",content),d.type="text",i.type="email",o.type="content",l.type="submit",n.src="../assets/images/contact.jpg",a.textContent="Name",c.textContent="Email",s.textContent="Message",l.textContent="Send",d.id="name",i.id="email",o.id="content",t.append(a,d,c,i,s,o),t.append(l),e.append(t,n),e}const d=function(){const n=document.getElementById("content"),a=function(){let e=document.createElement("h2");return e.textContent="Contact",e.classList.add("contact__title"),e}(),c=s();t("contactLink"),e(),n.append(a,c)};!function(){let e=document.createElement("header"),t=document.createElement("nav"),n=document.createElement("ul"),a=document.createElement("div"),c=document.createElement("li");c.textContent="Restaurant";let s=document.createElement("li");s.textContent="Home";let d=document.createElement("li");d.textContent="Menu";let i=document.createElement("li");i.textContent="Contact us",e.classList.add("header"),t.classList.add("header__nav"),n.classList.add("header__nav__links"),a.classList.add("header__nav__links__items"),s.classList.add("header__nav__links__items__home"),d.classList.add("header__nav__links__items__menu"),i.classList.add("header__nav__links__items__contact"),n.appendChild(c),a.appendChild(s),a.appendChild(d),a.appendChild(i),n.appendChild(a),t.appendChild(n),e.appendChild(t),document.querySelector("#content").appendChild(e)}(),function(){const e=document.querySelector(".header__nav__links__items__home"),t=document.querySelector(".header__nav__links__items__menu"),a=document.querySelector(".header__nav__links__items__contact");e.addEventListener("click",n),t.addEventListener("click",c),a.addEventListener("click",d)}(),d()})();