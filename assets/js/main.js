const openNav = document.querySelector('.js-open_nav');
const closeNav = document.querySelector('.js-close_nav');
const mainNav = document.querySelector('.js-main_nav');

openNav.addEventListener('click', () => {
  mainNav.classList.add('c-nav__main--open');
});

closeNav.addEventListener('click', () => {
  mainNav.classList.remove('c-nav__main--open');
});
