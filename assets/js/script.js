const toggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu').querySelector('ul');

toggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
