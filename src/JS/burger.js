const burgerBtn = document.querySelector('#burgerBtn');
const burgerMenu = document.querySelector('#burgerMenu');
const burgerLinks = document.querySelector('#burgerLinks');
const burgerLink = document.querySelector('#burgerLink');

burgerBtn.addEventListener('click', () => {
  burgerMenu.classList.toggle('burger-active');
  if (burgerMenu.classList.contains('burger-active')) {
    document.body.classList.add('stop-scrolling');
  } else {
    document.body.classList.remove('stop-scrolling');
  }
});

burgerLinks.addEventListener('click', () => {
  burgerMenu.classList.remove('burger-active');
});

burgerLink.addEventListener('click', () => {
  burgerMenu.classList.remove('burger-active');
});
