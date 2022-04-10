import './style.scss';

const hamburger = document.querySelector('.hamburger') as HTMLElement;


function toggleMenu() {
  hamburger.classList.toggle('open');
}
hamburger.addEventListener('click', toggleMenu);


