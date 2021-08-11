const menuBtn = document.querySelector(".nav__menu-button");
const menu = document.querySelector(".nav-panel");
const menuCloseBtn = document.querySelector(".close-menu");
const menuLinkOneBtn = document.querySelector(".nav__link");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle('is-open')
});
menuCloseBtn.addEventListener("click", () => {
  menu.classList.toggle('is-open')
});
menuLinkOneBtn.addEventListener("click", () => {
  menu.classList.toggle('is-open')
});