const menuHamburger = document.querySelector('.hamburger'),
      menuClose = document.querySelector('.close'),
      menu = document.querySelector('.menu');
      menuLink = document.querySelectorAll('.menu__link');

menuHamburger.addEventListener ( 'click', () => {
  menu.classList.add('active');
});

menuClose.addEventListener ( 'click', () => {
  menu.classList.remove('active');
});

menuLink.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});

const counters = document.querySelectorAll('.skills__progress-per'),
      lines = document.querySelectorAll('.skills__unfilled span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});