//Inicializálás
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const header = document.getElementById("header");

let menuOpen = false;


const openMenu = () => {
  menuOpen = true;
  menu.classList.add("is-active");
  burger.classList.add("is-active");
  overlay.classList.add("is-active");
  document.body.style.overflow = "hidden";
};

const closeMenu = () => {
  menuOpen = false;
  menu.classList.remove("is-active");
  burger.classList.remove("is-active");
  overlay.classList.remove("is-active");
  document.body.style.overflow = "";
};

burger.addEventListener("click", () => {
  menuOpen ? closeMenu() : openMenu();
});

overlay.addEventListener("click", closeMenu);

document.querySelectorAll(".menu-link").forEach(link => {
  link.addEventListener("click", closeMenu);
});

/*  SCROLL SOHA NEM NYITHAT MENÜT, EZ BUG VOLT */
window.addEventListener("scroll", () => {
  if (menuOpen) return;

  window.scrollY > 60
    ? header.classList.add("on-scroll")
    : header.classList.remove("on-scroll");
});
