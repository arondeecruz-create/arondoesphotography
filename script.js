const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
const navBack = document.getElementById('navBack');
const overlay = document.querySelector('.menu-overlay');
const hero = document.getElementById('hero');

function openMenu() {
  nav.classList.add('open');
  overlay.classList.add('open');
  hero.classList.add('blurred');
  menuBtn.classList.add('hidden');
}

function closeMenu() {
  nav.classList.remove('open');
  overlay.classList.remove('open');
  hero.classList.remove('blurred');
  menuBtn.classList.remove('hidden');
}

menuBtn.addEventListener('click', openMenu);
navBack.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});

setTimeout(openMenu, 3000);
