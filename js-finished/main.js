document.querySelector('.intro__hamburger').addEventListener('click', () => {
  document.querySelector('.hamburger').classList.add('hamburger--visible');
});

document.querySelector('.hamburger__close').addEventListener('click', () => {
  document.querySelector('.hamburger').classList.remove('hamburger--visible');
});
