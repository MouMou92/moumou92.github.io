document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (!menuToggle || !navMenu) return;

  // Ouvre / ferme le menu au clic sur ☰
  menuToggle.addEventListener("click", () => {
    navMenu.querySelector("ul").classList.toggle("active");
  });

  // Ferme le menu quand on clique sur un lien
  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.querySelector("ul").classList.remove("active");
    });
  });
});
