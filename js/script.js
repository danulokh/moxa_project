const typed = new Typed('.print', {
    strings: [' HI, I’M TAYLER. <br> CREATIVE <img src="icons/moxa_star_red.png" alt="star">DESIGNER BASED IN LONDON. '],
    typeSpeed: 80,
    backSpeed: 40,
    loop: true
  });
  
  new WOW().init();
  
// menu

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu-list');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('opacity');
});