const menuHamburger = document.querySelector('.hamburger'),
      menuClose = document.querySelector('.close'),
      menu = document.querySelector('.menu');

      menuHamburger.addEventListener ( 'click', () => {
        menu.classList.add('active');
      });

      menuClose.addEventListener ( 'click', () => {
        menu.classList.remove('active');
      });