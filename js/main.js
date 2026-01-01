// Hamburger menü JS
const burger = document.getElementById("burger"); 
const menu = document.getElementById("menu");     
const overlay = document.getElementById("overlay"); 
const header = document.getElementById("header");  

// Menü nyitva van-e
let menuOpen = false; 

// Megnyitása
const openMenu = () => {
  menuOpen = true;
  menu.classList.add("is-active");
  burger.classList.add("is-active");
  overlay.classList.add("is-active");
  // Görgetés tiltása
  document.body.style.overflow = "hidden"; 
};

// Bezárása
const closeMenu = () => {
  menuOpen = false;
  menu.classList.remove("is-active");
  burger.classList.remove("is-active");
  overlay.classList.remove("is-active");
  // Görgetés vissza
  document.body.style.overflow = ""; 
};

// Burger ikon kattintásra menü nyit/zár
burger.addEventListener("click", () => {
  menuOpen ? closeMenu() : openMenu();
});

// Overlay-re kattintva is záródik a menü
overlay.addEventListener("click", closeMenu);

// Menü linkre kattintva: smooth scroll és menü zárás
document.querySelectorAll(".menu-link").forEach(link => {
  link.addEventListener("click", function(e) {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      // Cél szekció
      const target = document.querySelector(href); 
      if (target) {
        target.scrollIntoView({ behavior: "smooth" }); //Görgetés
      }
      closeMenu();
    } else {
      closeMenu(); // Külső linknél is zárjon
    }
  });
});

// Görgetés: fejléc háttér változik, menüt nem nyitja ki soha
window.addEventListener("scroll", () => {
  if (menuOpen) return; // Ha menü nyitva, nem változtatunk

  window.scrollY > 60
    ? header.classList.add("on-scroll") // Sötét háttér, árnyék
    : header.classList.remove("on-scroll"); // Alap fejléc
});
