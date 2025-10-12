// Fichier : assets/js/script.js
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navList = navMenu ? navMenu.querySelector("ul") : null;

  if (menuToggle && navList) {
    menuToggle.addEventListener("click", () => {
      navList.classList.toggle("active");
    });

    // Fermer le menu quand on clique sur un lien (mobile)
    navList.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navList.classList.remove("active");
      });
    });
  }
});
