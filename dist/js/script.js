
// менюшка
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


// скрипт для процентов
const counters = document.querySelectorAll('.skills__progress-per'),
      lines = document.querySelectorAll('.skills__unfilled span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});


// плавная прокрутка по якорю
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}