import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../assets/css/style.css';


document.addEventListener('DOMContentLoaded', () => {
  console.log("dom content loaded successfully")
  const burgerMenu = document.querySelector('.burger-menu');
  const mobileNav = document.querySelector('.mobile-nav');
  const closeBtn = document.querySelector('.close-btn');

  if (burgerMenu && mobileNav && closeBtn) {
    // Открытие бургер-меню
    burgerMenu.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
      burgerMenu.classList.toggle('open');
    });

    // Закрытие бургер-меню
    closeBtn.addEventListener('click', () => {
      mobileNav.classList.remove('active');
      burgerMenu.classList.remove('open');
    });
  } else {
    console.error('Элементы бургер-меню или навигации не найдены!');
  }
});


