import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../css/style.css';

console.log('2');
document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.querySelector('.burger-menu');
  const mobileNav = document.querySelector('.mobile-nav');

  if (burgerMenu && mobileNav) {
    burgerMenu.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
    });
  } else {
    console.error('Элементы бургер-меню или навигации не найдены!');
  }
});
