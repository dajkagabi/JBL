// Inicializálás
const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");
const bgOverlay = document.querySelector(".overlay");

//Navigációs sáv elrejtése menüfunkció inicializálása
const toggleNavbarMenu = () => {
   navbarMenu.classList.toggle("is-active");
   burgerMenu.classList.toggle("is-active");
   bgOverlay.classList.toggle("is-active");
   
   // Blokkolja a scrollozást, ha menü nyitva van
   if (navbarMenu.classList.contains("is-active")) {
      document.body.style.overflow = "hidden";
   } else {
      document.body.style.overflow = "auto";
   }
};

// Zárva ha:
const closeNavbarMenu = () => {
   navbarMenu.classList.remove("is-active");
   burgerMenu.classList.remove("is-active");
   bgOverlay.classList.remove("is-active");
   document.body.style.overflow = "auto";
};

// Elrejtése kattintáskor
burgerMenu.addEventListener("click", () => {
   toggleNavbarMenu();
});

// Átfedés
bgOverlay.addEventListener("click", () => {
   closeNavbarMenu();
});

// Elrejtés, a hivatkozásokra kattintáskor
document.querySelectorAll(".menu-link").forEach((link) => {
   link.addEventListener("click", () => {
      closeNavbarMenu();
   });
});

// Regisztráció gomb eseménykezelő
document.querySelector(".menu-block a")?.addEventListener("click", (e) => {
   if (window.innerWidth < 768) {
      e.preventDefault();
      closeNavbarMenu();
      // Késleltetve navigáljon a regisztráció oldalra
      setTimeout(() => {
         window.location.href = e.target.closest("a").href;
      }, 300);
   }
});

// Fejléc hátterének módosítása görgetés közben
window.addEventListener("scroll", () => {
   if (window.scrollY >= 75) {
      headerMenu.classList.add("on-scroll");
   } else {
      headerMenu.classList.remove("on-scroll");
   }
});

